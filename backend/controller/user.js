const User = require("../model/user");



const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const { name, email, street, city, state, pinCode, phone } = req.body;

    const address = { name, email, street, city, state, pinCode, phone };
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $push: { addresses: address } },
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
