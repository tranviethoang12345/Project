// Import Service
const userModel = require("../../models/users.model");

exports.base = (req, res) => {
  res.render("auth/base", {
    path: "/auth/base",
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

exports.dashboard = async (req, res) => {
  const user = req.session.user;
  if (!user) {
    res.send("Unauthorize User");
  }
  await res.render("dashboard/dashboard", {
    pageTitle: "dashboard",
    user: user,
  });
};

exports.logout = async (req, res) => {
  const logout = req.session.destroy;

  if (!logout) {
    res.send("Error");
  }

  res.redirect("/");
};
