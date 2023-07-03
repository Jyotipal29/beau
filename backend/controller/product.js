const Product = require("../model/product");

// create product
const createProduct = async (req, res) => {
  try {
    const {
      title,
      description,
      color,
      material,
      mainImageUrl,
      extraImages,
      price,
      sizes,
      InStock,
      qty,
    } = req.body;

    const product = new Product({
      title,
      description,
      color,
      material,
      mainImageUrl,
      extraImages,
      price,
      sizes,
      InStock,
      qty,
    });

    const savedProduct = await product.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ error: "Failed to create the product" });
  }
};

// get one product

const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getProduct,
  getAllProduct,
  createProduct
};
