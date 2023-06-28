const express = require("express");
const { getAllProduct, getProduct } = require("../controller/product");
const router = express.Router();

router.get("/", getAllProduct);
router.get("/find/:id", getProduct);
module.exports = router;
