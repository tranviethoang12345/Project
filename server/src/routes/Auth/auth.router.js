// Create Router
const router = require('express').Router();

// Import Controller
const authController = require('../../controllers/Auth/auth.controller');

/**
 * @description SignIn User
 * @method POST /signIn
 */
router.post('/signIn', authController.signIn);

/**
 * @description SignUp User
 * @method POST /signUp
 */
router.post('/signUp', authController.signUp);

module.exports = router;
