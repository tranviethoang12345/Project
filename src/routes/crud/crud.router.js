const router = require("express").Router();

router.get('/', (req, res) => { 
  res.render('crud/crud');
})

module.exports = router;