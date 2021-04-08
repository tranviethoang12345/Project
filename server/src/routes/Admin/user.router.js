const router = require('express').Router();

const renderServices = require('../../services/admin/render.service');
const usersController = require('../../controllers/admin/users.controller');

/**
 * @description admin crud
 * @method GET /
 */
router.get('/', renderServices.homeCrud);

/**
 * @description add_user
 * @method GET /add_user
 */
router.get('/add_user', renderServices.add_user);

/**
 * @description update_user
 * @method GET /update_user
 */
router.get('/update_user', renderServices.update_user);

// API CRUD
router.post('/api/users', usersController.create);
router.get('/api/users', usersController.find);
router.put('/api/users/:id', usersController.update);
router.delete('/api/users/:id', usersController.delete)

module.exports = router;
