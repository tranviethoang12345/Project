/* eslint-disable no-useless-catch */
// Connect Database
const accountModel = require('../models/users.model');

exports.adminAccount = async (req, res, next) => {
  try {
    let name = 'admin';
    let password = '12345678';
    let email = 'admin@gmail.com';
    let status = 'Active';
    let gender = 'Other';
    let roleId = '604b2d3f36b2fd0610004e0c';

    let accountRecord = await accountModel.findOne({ email });
    if (accountRecord) {
      return next();
    }
    await accountModel.create({
      name,
      email,
      password,
      status,
      gender,
      roleId,
    });

    return next();
  } catch (error) {
    throw error;
  }
};
