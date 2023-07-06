const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, default: "user" },
    addresses: { type: [Schema.Types.Mixed] },
    name: { type: String, required: true },
    image: {
      type: String,
      default:
        "https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png",
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
