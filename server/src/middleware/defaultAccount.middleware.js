/* eslint-disable no-useless-catch */
// Connect Database
const userModel = require('../models/users.model');

exports.adminAccount = async (req, res, next) => {
  try {
    let name = 'admin';
    let password = '12345678';
    let email = 'admin@gmail.com';
    let roleId = '604b2d3f36b2fd0610004e0c';

    let accountRecord = await userModel.findOne({ email });
    if (accountRecord) {
      return next();
    }
    await userModel.create({
      name,
      email,
      password,
      roleId,
    });

    return next();
  } catch (error) {
    throw error;
  }
};
