const axios = require('axios');

exports.homeCrud = (req, res) => {
  // Make a get request to /api/users
  axios
    .get('http://localhost:3000/admin/api/users')
    .then((response) => {
      console.log(response.data);
      res.render('admin/index_user', { users: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.add_user = (req, res) => {
  res.render('admin/add_user');
};

exports.update_user = (req, res) => {
  // Make an update request to /api/users
  axios
    .get('http://localhost:3000/admin/api/users', {
      params: { id: req.query.id },
    })
    .then((response) => {
      res.render('admin/update_user', { users: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};
