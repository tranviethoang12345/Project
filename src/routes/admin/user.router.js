const router = require('express').Router();

const usersServices = require('../../services/admin/users.service');
const usersController = require('../../controllers/admin/users.controller');

/**
 * @description admin crud
 * @method GET /
 */
router.get('/', usersServices.homeCrud);

/**
 * @description add_user
 * @method GET /add_user
 */
router.get('/add_user', usersServices.add_user);

/**
 * @description update_user
 * @method GET /update_user
 */
router.get('/update_user', usersServices.update_user);

//API
router.post('/api/users', usersController.create);
router.get('/api/users', usersController.find);
router.put('/api/users/:id', usersController.update);
router.delete('/api/users/:id', usersController.delete)

module.exports = router;
