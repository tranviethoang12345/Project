const router = require('express').Router();

const crudServices = require('../../services/admin/crud.service');
const crudController = require('../../controllers/admin/crud.controller');

/**
 * @description admin crud
 * @method GET /
 */
router.get('/', crudServices.homeCrud);

/**
 * @description add_user
 * @method GET /add_user
 */
router.get('/add_user', crudServices.add_user);

/**
 * @description update_user
 * @method GET /update_user
 */
router.get('/update_user', crudServices.update_user);

//API
router.post('/api/users', crudController.create);
router.get('/api/users', crudController.find);
router.put('/api/users/:id', crudController.update);
router.delete('/api/users/:id', crudController.delete)

module.exports = router;
