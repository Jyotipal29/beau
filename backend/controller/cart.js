const Cart = require("../model/cart");

const addToCart = async (req, res) => {
  const { id } = req.user;
  const { quantity, product, size } = req.body;
  const cartItem = { quantity, product, size };

  try {
    const cart = await Cart.findOne({ user: id });
    if (!cart) {
      // Create a new cart if it doesn't exist
      const newCart = new Cart({ user: id, items: [cartItem] });
      const savedCart = await newCart.save();
      return res.status(201).json(savedCart.items);
    }

    // Check if the product already exists in the cart
    const existingItem = cart.items.find(
      (item) => item.product.toString() === product
    );

    if (existingItem) {
      // If the product exists, increment the quantity
      existingItem.quantity += Number(quantity);
    } else {
      // If the product doesn't exist, add it to the cart
      cart.items.push(cartItem);
    }

    const savedCart = await cart.save();
    res.status(201).json(savedCart.items);
  } catch (err) {
    res.status(400).json(err);
  }
};

const getCart = async (req, res) => {
  const { id } = req.user;
  try {
    const cart = await Cart.findOne({ user: id }).populate("items.product");
    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }
    res.status(200).json(cart.items);
  } catch (err) {
    res.status(400).json(err);
  }
};

// const deleteFromCart = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const doc = await Cart.findByIdAndDelete(id);
//     res.status(200).json(doc);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// };

const deleteFromCart = async (req, res) => {
  const { id } = req.params;
  const { id: userId } = req.user;

  try {
    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    // Find the index of the product in the items array
    const productIndex = cart.items.findIndex(
      (item) => item.product.toString() === id
    );

    if (productIndex === -1) {
      return res.status(404).json({ error: "Product not found in cart" });
    }

    // Remove the product from the items array
    cart.items.splice(productIndex, 1);

    await cart.save();
    res.status(200).json({ message: "Product removed from cart" });
  } catch (err) {
    res.status(400).json(err);
  }
};

const updateCart = async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;
  const { userId } = req.user;
  try {
    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    // Find the item in the cart and update its quantity
    const item = cart.items.find((item) => item._id.toString() === id);
    if (!item) {
      return res.status(404).json({ error: "Item not found in cart" });
    }
    item.quantity = quantity;

    const savedCart = await cart.save();
    res.status(200).json(savedCart.items);
  } catch (err) {
    res.status(400).json(err);
  }
};
module.exports = {
  addToCart,
  deleteFromCart,
  getCart,
  updateCart,
};