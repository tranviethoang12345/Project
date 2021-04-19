// Import Service
const userModel = require("../../models/users.model");

const tokenHelper = require("../../helper/token.helper")

exports.signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await userModel.findOne({ email: email });
    if (!existingUser)
      return res.status(404).json({ message: "User does not exist." });

    const checkPassword = await existingUser.comparePassword(password);
    if (!checkPassword) {
      return res.status(404).json({ message: "Invalid credentials." });
    }

    const token = tokenHelper.signToken(
      { email: existingUser.email, id: existingUser._id },
      "test",
      "1h"
    );

    res.status(200).json({ result: existingUser, token: token });

  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

exports.signUp = async (req, res) => {};
