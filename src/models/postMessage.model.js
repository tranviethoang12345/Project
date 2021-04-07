// Import NPM
const mongoose = require('mongoose');

const { Schema } = mongoose;

// Post Detail
const postSchema = new Schema(
  {
    title: {
      type: String,
    },

    message: {
      type: String,
    },

    creator: {
      type: String,
    },

    tag: [String],

    selectedFile: {
      type: String,
    },

    likeCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// Compile the model from the schema
const post = mongoose.model('post', postSchema);

// Export
module.exports = post;