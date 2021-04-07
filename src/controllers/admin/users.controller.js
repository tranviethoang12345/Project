// Import Database
const userService = require('../../services/admin/user.service');
const usersDB = require('../../models/users.model');

// create and save new user
exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
    return;
  }

  // new user
  const user = new usersDB({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    fullName: req.body.fullName,
    image: req.body.image,
    status: req.body.status,
    gender: req.body.gender,
  });

  // save user in the database
  user
    .save(user)
    .then((data) => {
      res.status(200).redirect('/admin');
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          'Some error occurred while creating a create operation',
      });
    });
};

// retrieve and return all user/ retrieve and return a single user
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;

    usersDB.findById(id).then((data) => {
      if (!data) {
        res.status(404).send({ message: 'Not found user with id ' + id });
      } else {
        res.send(data);
      }
    });
  }
  usersDB
    .find()
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Error Occurred while retrieving user information',
      });
    });
};

// update a new identified user by user id
exports.update = (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).send({
      message: 'Data to update can not be empty',
    });
  }

  const id = req.params.id;
  res.status(200).send(body);
  usersDB
    .findByIdAndUpdate({ _id: id }, body, {
      useFindAndModify: false,
      new: true,
    })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot Update user with ${id}. Maybe user not found`,
        });
      } else {
        res.status(200).send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error Update user information',
        error: err.message,
      });
    });
};

// delete a user with specified user id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  usersDB
    .findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot Delete with id ${id}. Maybe id is wrong`,
        });
      } else {
        res.send({
          message: 'User was deleted successfully!',
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete User with id =' + id,
        error: err.message,
      });
    });
};
