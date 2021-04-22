const router = require('express').Router();

const usersController = require('../../controllers/Admin/users.controller');

/**
 * @description Admin - User
 * @method GET /
 */
 router.get("/users", usersController.getUsers);

 /**
  * @description Admin - Create User
  * @method POST /
  */
 router.post("/users", usersController.createUser);
 
 /**
  * @description Admin - Update User
  * @method Patch /:id
  */
 router.patch("/users/:id", usersController.updateUser);
 
 /**
  * @description Admin - Delete User
  * @method Delete /:id
  */
 router.delete("/users/:id", usersController.deleteUser);
 

module.exports = router;
