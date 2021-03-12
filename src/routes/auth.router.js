const accountModel = require('../models/account.model');
const bcrypt = require('bcrypt');

// Create Router
const router = require('express').Router();

// Import Controller


router.post('/', async (req, res) => {
  try {
    var username = req.body.username;
    var password = req.body.password;

    var user = await accountModel.findOne({ username: username});

    var checkPassword = await user.comparePassword(password)
    console.log(checkPassword);

    

    if (user != null) {
      if (checkPassword) {
        console.log("login thanh cong")
      } else {
        console.log("sai ten dang nhap hoac mat khau")
      }
    } 
    else {
      console.log("user khong ton tai")
    }

  } catch (error) {
    
  }
});

module.exports = router;