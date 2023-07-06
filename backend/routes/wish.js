const express = require("express");
const { toggleWish, getWishlist } = require("../controller/wish");
const { protect } = require("./verifytoken");
const router = express.Router();

router.post("/toggle/:id", protect, toggleWish);
router.get("/", protect, getWishlist);
module.exports = router;
