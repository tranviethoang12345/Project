const accountModel = require('../models/user.model');

// Create Router
const router = require('express').Router();

// Import Controller

// Login User
router.get('/', (req, res) => {
  res.render('base', {
    path:'/base',
    title: 'Login System'
  });
});

router.post('/login', async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const user = await accountModel.findOne({ email: email});
    if (!user) {
      res.end("Invalid email")
    }

    const checkPassword = await user.comparePassword(password)
    if (!checkPassword) {
      res.end("Invalid password")
    }
    
    res.redirect('/dashboard');
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;