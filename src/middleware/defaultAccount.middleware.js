/* eslint-disable no-useless-catch */
// Connect Database
const accountModel = require('../models/users.model');

exports.adminAccount = async (req, res, next) => {
  try {
    let username = 'admin';
    let password = '12345678';
    let email = 'admin@gmail.com';
    let fullName = 'admin';
    let status = 'Active';
    let gender = 'Other';
    let roleId = '604b2d3f36b2fd0610004e0c';

    let accountRecord = await accountModel.findOne({ email });
    if (accountRecord) {
      return next();
    }
    await accountModel.create({
      username,
      email,
      password,
      fullName,
      status,
      gender,
      roleId,
    });
    
    return next();
  } catch (error) {
    throw error;
  }
};
