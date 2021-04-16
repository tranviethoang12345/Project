// Create Router
const router = require('express').Router();

// Import Router
const auth = require('../routes/auth/auth.router');
const users = require('../routes/admin/user.router');
const workspace = require('../routes/workspace/workspace.router');

router.use('/user', auth);
router.use('/admin', users);
router.use('/posts', workspace);

module.exports = router;
