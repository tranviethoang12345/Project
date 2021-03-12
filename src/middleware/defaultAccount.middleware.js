// Connect Database
const accountModel = require('../models/account.model');
const roleModel = require('../models/role.model');

exports.adminAccount = async (req, res, next) => {
  try {
    let username = 'admin';
    let email = 'admin@gmail.com';
    let password = '12345678';
    let role = '';

    let accountRecord = await accountModel.findOne({ email });
    if (accountRecord) {
      return next();
    }
    await accountModel.create({username, email, password})
    await roleModel.create({role})

    return next();
  } catch (error) {
    throw error;
  }
}