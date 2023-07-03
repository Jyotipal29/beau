const User = require("../model/user");

const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  updateUser,
};
