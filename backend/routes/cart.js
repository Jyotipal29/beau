const express = require("express");
const {
  addToCart,
  getCart,
  deleteFromCart,
  updateCart,
  emptyCart,
} = require("../controller/cart");
const { protect } = require("./verifytoken");
const router = express.Router();

router.get("/", protect, getCart);
router.post("/", protect, addToCart);
router.delete("/:id", protect, deleteFromCart);
router.put("/:id", protect, updateCart);
router.delete("/", protect, emptyCart);
module.exports = router;
