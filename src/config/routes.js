// Create Router
const router = require('express').Router();

// Import Router
const auth = require('../routes/auth.router');
const room = require('../routes/Room/room.router');
const post = require('../routes/workspace/post.router');
const users = require('../routes/admin/user.router');

router.use('/', auth);

router.use('/room', room);
router.use('/workspace', post);
router.use('/admin', users);

module.exports = router;
