const path = require('path');
const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/db");
const productRoutes = require("./routes/product");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const cartRoutes = require("./routes/cart");
const orderRoutes = require("./routes/orders");
const wishRoutes = require("./routes/wish");
const paymentRoutes = require("./routes/payment");
connectDB();
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/products", productRoutes);
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/cart", cartRoutes);
app.use("/order", orderRoutes);
app.use("/wish", wishRoutes);
app.use("/payment", paymentRoutes);

app.get("/api/getkey", (req, res) => {
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY });
});

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

const port = process.env.PORT | 5000;
app.listen(port, () => console.log(`listening on port ${port}`));
