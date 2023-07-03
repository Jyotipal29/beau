const express = require("express");
const {
  getAllProduct,
  getProduct,
  createProduct,
} = require("../controller/product");
const router = express.Router();

router.get("/", getAllProduct);
router.get("/find/:id", getProduct);
router.post("/", createProduct);
module.exports = router;
