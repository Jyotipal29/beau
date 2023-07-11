const crypto = require("crypto");
const Payment = require("../model/payment");
const dotenv = require("dotenv").config();

const Razorpay = require("razorpay");
const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

const checkout = async (req, res) => {
  try {
    const options = {
      amount: req.body.amount * 100,
      currency: "INR",
    };
    const order = await instance.orders.create(options);
    res.status(200).json({ success: true, order });
  } catch (err) {
    console.log(err);
  }
};

const paymentVerification = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
      .update(body.toString())
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;
    console.log(isAuthentic, "isAuthentic");
    if (isAuthentic) {
      // Database comes here
      const final_Data = await Payment.create({
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
      });
      console.log("payment verified", final_Data);

      final_Data
        ? res.status(200).json({ isVerified: true })
        : res.status(400).json({ isVerified: false });

      // res.redirect(
      //   `http://localhost:5173/ordersuccess?reference=${razorpay_payment_id}`
      // );
    } else {
      res.status(400).json({
        success: false,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
 
};

module.exports = {
  checkout,
  paymentVerification,
};
