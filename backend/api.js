const router = require('express').Router();

const productRoutes = require("./routes/product");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const cartRoutes = require("./routes/cart");
const orderRoutes = require("./routes/orders");
const wishRoutes = require("./routes/wish");
const paymentRoutes = require("./routes/payment");

router.use("/products", productRoutes);
router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/cart", cartRoutes);
router.use("/order", orderRoutes);
router.use("/wish", wishRoutes);
router.use("/payment", paymentRoutes);

router.get("/api/getkey", (req, res) => {
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY });
});

module.exports = router