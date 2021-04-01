// Create Router
const router = require("express").Router();

// Import Router
const auth = require("../routes/auth.router");
const user = require("../routes/user.router");
const crud = require("../routes/crud/crud.router");

router.use("/", auth);

router.use("/user", user);
router.use("/crud", crud);

module.exports = router;
