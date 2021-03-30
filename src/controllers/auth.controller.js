// Import Service
const userModel = require("../models/user.model");

exports.base = (req, res) => {
  res.render("base", {
    path: "/base",
    pageTitle: "Login System",
  });
};

exports.login = async (req, res) => {
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
    res.redirect("/dashboard");
  } catch (error) {
    console.log(error);
  }
};