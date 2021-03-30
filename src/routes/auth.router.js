// Create Router
const router = require("express").Router();

// Import Controller
const authController = require("./../controllers/auth.controller");

// Base
router.get("/", authController.base);

// Login User
router.post("/login", authController.login);

module.exports = router;
