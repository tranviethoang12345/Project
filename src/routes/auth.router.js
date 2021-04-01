// Create Router
const router = require("express").Router();

// Import Controller
const authController = require("./../controllers/auth.controller");

// Base
router.get("/", authController.base);

// Login User
router.post("/login", authController.login);

// Dashboard
router.get("/dashboard", authController.dashboard);

// Logout
router.get("/logout", authController.logout);

module.exports = router;
