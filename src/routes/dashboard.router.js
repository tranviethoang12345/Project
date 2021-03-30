const router = require("express").Router();

const dashboard = require('../controllers/dashboard.controller');

// Dashboard
router.get("/dashboard", dashboard.dashboard);

// Logout
router.get("/logout", dashboard.logout);

module.exports = router;