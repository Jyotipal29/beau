require("dotenv").config();
const products = require("./data/product");
const connectDB = require("./config/db");
const Product = require("./model/product");

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});

    await Product.insertMany(products);

    console.log("hey");

    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();
