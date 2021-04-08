// Create Router
const router = require('express').Router();

// Import Controller
const authController = require('../../controllers/Auth/auth.controller');

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
 * @description Home
 * @method GET /home
 */
router.get('/home', authController.home);

/**
 * @description Logout
 * @method GET /logout
 */
router.get('/logout', authController.logout);

module.exports = router;
