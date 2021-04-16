// Import Service
const userModel = require("../../models/users.model");

exports.signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await userModel.findOne({ email: email });
    if (!existingUser)
      return res.status(404).json({ message: "User does not exist." });

    const checkPassword = await user.comparePassword(password);
    if (!checkPassword) {
      return res.status(404).json({ message: "Invalid credentials." });
    }

  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

exports.signUp = async (req, res) => {};
