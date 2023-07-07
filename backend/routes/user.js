const express = require("express");
const { updateUser } = require("../controller/user");
const { protect } = require("./verifytoken");
const router = express.Router();

router.put("/:id", protect, updateUser);
module.exports = router;
