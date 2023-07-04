const mongoose = require("mongoose");


const sizeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
});
const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    material: {
      type: String,
      required: true,
    },
    mainImageUrl: {
      type: String,
      required: true,
    },
    extraImages: {
      type: [String],
      default: [],
    },
    price: {
      type: Number,
      required: true,
    },
    sizes: {
      type: [String],
      default: [],
    },
    InStock: {
      type: Number,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
