// Create Router
const router = require("express").Router();

// Import Router
const auth = require("../routes/auth.router");
const user = require("../routes/user.router");
const dashboard = require("../routes/dashboard.router")

router.use("/", auth);
router.use("/", dashboard);
router.use("/user", user);

module.exports = router;
