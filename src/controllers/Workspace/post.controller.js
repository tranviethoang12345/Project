// Import Database
const PostModel = require('../../models/postMessage.model');

exports.getPost = async (req, res) => {
  try {
    const postMessages = await PostModel.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostModel(post);
  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    // error 409: Conflict
    res.status(409).json({ message: error.message });
  }
};
