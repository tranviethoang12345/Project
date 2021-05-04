// Import NPM
const mongoose = require('mongoose');

const { Schema } = mongoose;

// Post Detail
const postSchema = new Schema(
  {
    title: String,
    message: String,
    name: String,
    creator: String,
    tags: [String], // []ARRAY
    selectedImage: String,
    selectedFile: String,
    likes: {
      type: [String],
      default: [],
    },
    createAt: {
      type: Date,
      default: new Date(),
    },
  },
  { timestamps: true }
);

// Compile the model from the schema
const post = mongoose.model('post', postSchema);

// Export
module.exports = post;
