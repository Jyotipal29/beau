const express = require("express");
const {
  getAllProduct,
  getProduct,
  createProduct,
  updateProduct,
} = require("../controller/product");
const router = express.Router();

router.get("/", getAllProduct);
router.get("/find/:id", getProduct);
router.post("/", createProduct);
router.patch("/:id", updateProduct);
module.exports = router;
