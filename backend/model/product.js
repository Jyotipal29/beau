const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  url: {
    type: String,
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
    mainImageUrl: {
      type: imageSchema,
      required: true,
    },
    extraImages: {
      type: [imageSchema],
      default: [],
    },
    price: {
      type: Number,
      required: true,
    },
    size: [
      {
        type: String,
      },
    ],
    category: {
      type: String,
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
