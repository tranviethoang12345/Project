// Import Service
const userModel = require("../../models/users.model");

exports.signIn = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const user = await userModel.findOne({
      email: email,
    });
    if (!user) {
      res.end("Invalid email");
    }

    const checkPassword = await user.comparePassword(password);
    if (!checkPassword) {
      res.end("Invalid password");
    }

    req.session.user = email;
    res.redirect("/home");
  } catch (error) {
    console.log(error);
  }
};

exports.signUp = async (req, res) => {}