// Create Router
const router = require('express').Router();

// Import Controller
const workspaceController = require('../../controllers/Auth/auth.controller');

/**
 * @description SignIn User
 * @method GET /SignIn
 */
router.post('/signIn', authController.signIn);

/**
 * @description Home
 * @method GET /home
 */
router.get('/signUp', authController.signUp);

module.exports = router;
