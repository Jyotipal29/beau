const express = require("express");
const { updateUser } = require("../controller/user");
const router = express.Router();

router.put("/:id", updateUser);
module.exports = router;
