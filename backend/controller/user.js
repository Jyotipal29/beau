const User = require("../model/user");



const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const { _id, name, email, street, city, state, pinCode, phone } = req.body;

    const address = { _id, name, email, street, city, state, pinCode, phone };
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $push: { addresses: address } },
      { new: true }
    );

    const token = req.headers.authorization.split(" ")[1];
    const response = {
      ...updatedUser.toJSON(),
      token: token,
    };
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  updateUser,
};
