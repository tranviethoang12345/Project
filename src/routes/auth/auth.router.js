// Create Router
const router = require('express').Router();

// Import Controller
const authController = require('../../controllers/auth/auth.controller');

/**
 * @description Base
 * @method GET /
 */
router.get('/', authController.base);

/**
 * @description Login User
 * @method GET /login
 */
router.post('/login', authController.login);

/**
 * @description Dashboard
 * @method GET /dashboard
 */
router.get('/dashboard', authController.dashboard);

/**
 * @description Logout
 * @method GET /logout
 */
router.get('/logout', authController.logout);

module.exports = router;
