const express = require("express");
const { updateUser } = require("../controller/user");
const router = express.Router();

router.patch("/:id", updateUser);
module.exports = router;
