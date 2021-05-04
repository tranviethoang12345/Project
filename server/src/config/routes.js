// Create Router
const router = require('express').Router();

// Import Router
const auth = require('../routes/Auth/auth.router');
const users = require('../routes/Admin/user.router');
const workspace = require('../routes/Workspace/workspace.router');

const authCheck = require('../middleware/auth.middleware');

router.use('/', auth);

router.use(authCheck.auth);
router.use('/admin', users);
router.use('/posts', workspace);

module.exports = router;
