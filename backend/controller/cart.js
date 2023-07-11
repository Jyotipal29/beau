const { Cart } = require("../model/cart");

const getCart = async (req, res) => {
  try {
    const cartItems = await Cart.find({ user: req.user._id }).populate(
      "product"
    );

    res.status(200).json(cartItems);
  } catch (err) {
    res.status(400).json(err);
  }
};

const addToCart = async (req, res) => {
  const cart = new Cart({ ...req.body, user: req.user._id });
  try {
    const doc = await cart.save();
    const result = await doc.populate("product");
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
};

const deleteFromCart = async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await Cart.findByIdAndDelete(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};

const updateCart = async (req, res) => {
  const { id } = req.params;
  try {
    const cart = await Cart.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    const result = await cart.populate("product");

    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
};

const emptyCart = async (req, res) => {
  try {
    await Cart.deleteMany({ user: req.user._id });

    res.status(200).json({ message: "Cart emptied successfully" });
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  addToCart,
  getCart,
  deleteFromCart,
  updateCart,
  emptyCart,
};
