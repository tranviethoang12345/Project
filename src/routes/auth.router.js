const accountModel = require('../models/account.model');

// Create Router
const router = require('express').Router();

// Import Controller


router.post('/', async (req) => {
  try {
    var username = req.body.username;
    var password = req.body.password;

    var user = await accountModel.findOne({ username: username});

    var checkPassword = await user.comparePassword(password)
    console.log(checkPassword);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;