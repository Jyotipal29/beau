const User = require("../model/user");



const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const { addresses, ...otherFields } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { ...otherFields, addresses: [...addresses] },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  updateUser,
};
