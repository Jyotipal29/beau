const mongoose = require("mongoose");
const { Schema } = mongoose;

const paymentMethods = {
  values: ["card"],
  message: "enum validator failed for payment Methods",
};

const orderSchema = new Schema(
  {
    cart: [
      {
        quantity: { type: Number },
        product: { type: Schema.Types.ObjectId, ref: "Product" },
        size: { type: Schema.Types.Mixed },
      },
    ],
    totalPrice: { type: Number },
    totalItems: { type: Number },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    paymentMethod: { type: String, required: true, enum: paymentMethods },
    paymentStatus: { type: String, default: "pending" },
    status: { type: String, default: "pending" },
    selectedAddress: { type: Schema.Types.Mixed, required: true },
  },
  { timestamps: true }
);
const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
