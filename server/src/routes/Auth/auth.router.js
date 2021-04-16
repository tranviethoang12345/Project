// Create Router
const router = require('express').Router();

// Import Controller
const authController = require('../../controllers/Auth/auth.controller');

/**
 * @description SignIn User
 * @method POST /SignIn
 */
router.post('/signIn', authController.signIn);

/**
 * @description Home
 * @method POST /home
 */
router.post('/signUp', authController.signUp);

module.exports = router;
