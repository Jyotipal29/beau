const express = require("express");
const {
  addToCart,
  fetchCartByUser,
  updateCart,
  deleteFromCart,
} = require("../controller/cart");
const router = express.Router();

router.post("/", addToCart);
router.get("/", fetchCartByUser);
router.delete("/:id", deleteFromCart);
router.patch("/:id", updateCart);
module.exports = router;
