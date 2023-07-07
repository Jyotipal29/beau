const express = require("express");
const {
  createOrder,
  updateOrder,
  deleteOrder,
  fetchAllOrders,
  fetchOrdersByUser,
} = require("../controller/order");
const { protect } = require("./verifytoken");
const router = express.Router();

router.post("/", protect, createOrder);
router.get("/all", protect, fetchAllOrders);
router.get("/", protect, fetchOrdersByUser);
router.delete("/:id", protect, deleteOrder);
router.put("/:id", protect, updateOrder);
module.exports = router;
