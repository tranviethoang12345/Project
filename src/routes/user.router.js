// Create Router
const router = require('express').Router();
const modelAccount = require('../models/account.model');
const modelRole = require('../models/role.model');

router.get('/', async (req, res) => {
  try {
    let result = await modelAccount.find();
    return res.status(200).json({
      message: ' Get successful',
      messageCode: ' GET_SUCCESSFUL',
      data: result,
      status: 200
    })
  } catch (error) {
    console.log(error);
  }
})

router.post('/register', async (req, res) => {
  try {
    let result = await modelAccount.create(req.body);
    return res.status(200).json({
      message: 'Create account successful',
      messageCode: 'Create_ACCOUNT_SUCCESSFUL',
      data: result,
      status: 200
    })
  } catch (error) {
    console.log(error);
  }
})

router.get('/role', async (req, res) => {
  try {
    let result = await modelRole.find();
    return res.status(200).json({
      message: ' Get successful',
      messageCode: ' GET_SUCCESSFUL',
      data: result,
      status: 200
    })
  } catch (error) {
    console.log(error);
  }
})

router.post('/role', async (req, res) => {
  try {
    let result = await modelRole.create(req.body);
    return res.status(200).json({
      message: 'Create role successful',
      messageCode: 'Create_ROLE_SUCCESSFUL',
      data: result,
      status: 200
    })
  } catch (error) {
    console.log(error);
  }
})

router.post('/auth', async (req, res) => {
  try {
  

    let result = await modelRole.findById("604b2d3f36b2fd0610004e0c");

    // gui len ten user -> query trong DB  -> UserObj -> lay ra duoc role -> luu vao 1 bien toan cuc

    // Obj.role 
    console.log(result);

    if (result.role == "Admin") {
      console.log("you are admin") // cho phep them, sua, xoa
    } else {
      console.log("you are not admin"); // chi cho phep xem , redirect ve index
    }
// tao object chua thong tin cua user, bao gom role

    // api/v1/create -> UserController/create -> check role
    return res.status(200).json({
      message: 'Create role successful',
      messageCode: 'Create_ROLE_SUCCESSFUL',
      data: result,
      status: 200
    })
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;
