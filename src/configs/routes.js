// Create Router
const router = require('express').Router();

// Import Router
const auth = require('../routes/auth.router');

router.use('/', auth)

module.exports = router;