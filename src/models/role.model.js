const mongoose = require('mongoose');

const { Schema } = mongoose;

const roleSchema = new Schema ({
  roleName:{
    type: String,
    trim: true,
    require: true
  }
});

const roleModel = mongoose.model('role', roleSchema);

module.exports = roleModel;