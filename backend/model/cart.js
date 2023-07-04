const mongoose = require("mongoose");
const { Schema } = mongoose;

const cartSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  items: [
    {
      quantity: { type: Number, required: true },
      product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
      size: { type: Schema.Types.Mixed },
    },
  ],
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
