const express = require("express");
const { toggleWish } = require("../controller/wish");
const { protect } = require("./verifytoken");
const router = express.Router();

router.post("/toggle/:id", protect, toggleWish);
module.exports = router;
