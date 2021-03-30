// Import NPM
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

// User Detail
const userSchema = new Schema ({
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

  fullName: {
    type: String,
    trim: true
  },

  image: {
    type: String,
    trim: true
  },

  dob: {
    type: Date,
  },

  gender: {
    type: Number,
    min: 1,
    max: 3
  },

  roleId: {
    type: Schema.Types.ObjectId, ref: 'role'
  }
}, {timestamps: true});

// Bcrypt password
userSchema.pre('save', function (next) {
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
userSchema.methods.comparePassword = function(password) {
  return bcrypt.compare(password, this.password)
}

// Compile the model from the schema
const user = mongoose.model('user', userSchema);

// Export
module.exports = user;