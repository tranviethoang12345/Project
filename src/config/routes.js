// Create Router
const router = require('express').Router();

// Import Router
const auth = require('../routes/auth.router');
const crud = require('../routes/admin/crud.router');

router.use('/', auth);

router.use('/admin', crud);

module.exports = router;
