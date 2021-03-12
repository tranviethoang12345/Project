// Connect Database
const accountModel = require('../models/account.model');

exports.adminAccount = async (req, res, next) => {
  try {
    let username = 'admin';
    let email = 'admin@gmail.com';
    let password = '12345678';
    let roleId = '604b2d3f36b2fd0610004e0c';

    let accountRecord = await accountModel.findOne({ email });
    if (accountRecord) {
      return next();
    }
    await accountModel.create({username, email, password, roleId})

    return next();
  } catch (error) {
    throw error;
  }
}