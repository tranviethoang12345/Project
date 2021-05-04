const mongoose = require('mongoose');

const { Schema } = mongoose;

const roleSchema = new Schema(
  {
    role: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { timestamps: true }
);

const roleModel = mongoose.model('role', roleSchema);

module.exports = roleModel;
