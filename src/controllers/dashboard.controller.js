exports.dashboard = async (req, res) => {
  const user = req.session.user;
  if (!user) {
    res.send("Unauthorize User");
  }
  await res.render("dashboard", {
    pageTitle: "dashboard",
    user: user,
  });
};

exports.logout = async (req, res) => {
  const logout = req.session.destroy;

  if (!logout) {
    res.send("Error");
  }

  res.redirect('/');
};
