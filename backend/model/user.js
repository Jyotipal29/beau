const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: Buffer, required: true },
    role: { type: String, required: true, default: "user" },
    addresses: { type: [Schema.Types.Mixed] },
    name: { type: String },
  },

  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
