const Order = require("../model/order");
const { Product } = require("../model/product");
const { User } = require("../model/user");

const fetchOrdersByUser = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id });
    const populatedOrders = await Promise.all(
      orders.map(async (order) => {
        await order.populate("cart.product");
        return order;
      })
    );

    res.status(200).json(populatedOrders);
  } catch (err) {
    res.status(400).json(err);
  }
};

const createOrder = async (req, res) => {
  const order = new Order(req.body);
  try {
    const populatedOrder = await order.populate("cart.product");
    await populatedOrder.save();
    res.status(201).json(populatedOrder);
  } catch (err) {
    res.status(400).json(err);
  }
};

const deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findByIdAndDelete(id);
    res.status(200).json(order);
  } catch (err) {
    res.status(400).json(err);
  }
};

const updateOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(order);
  } catch (err) {
    res.status(400).json(err);
  }
};

const fetchAllOrders = async (req, res) => {};

module.exports = {
  createOrder,
  updateOrder,
  deleteOrder,
  fetchAllOrders,
  fetchOrdersByUser,
};
