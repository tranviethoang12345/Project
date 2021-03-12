// Import NPM
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

// Account
const accountSchema = new Schema ({
  username: {
    type: String, 
    unique: true,
    trim: true,
    lowercase: true,
    required: true
  },

  password: {
    type: String,
    trim: true,
    required: true
  },

  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: true
  },

  roleId: {
    type: Schema.Types.ObjectId, ref: 'role'
  }
}, {timestamps: true});

// Bcrypt password
accountSchema.pre('save', function (next) {
  var userPassword = this;

  // only hash the password if it has been modified (or is new)
  if (!userPassword.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);
    // hash the password using our new salt
    bcrypt.hash(userPassword.password, salt, function (err, hash) {
        if (err) return next(err);
        // override the cleartext password with the hashed one
        userPassword.password = hash;
        next();
    });
  });
})

// Compare Password (function)
accountSchema.methods.comparePassword = function(password) {
  return bcrypt.compare(password, this.password)
}

// Compile the model from the schema
const account = mongoose.model('account', accountSchema);

// Export
module.exports = account;