const postModel = require('../../models/postMessage.model');
const mongoose = require('mongoose');

// var multer = require('multer');
// const fs = require('fs');
// const uploadsFolder = './uploads';

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, uploadsFolder);
//   },
//   selectedFile: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalName)); //Appending extension
//   },
// });

// var upload = multer({ dest: 'uploads/', storage: storage });

// get all post
exports.getPosts = async (req, res) => {
  try {
    const postMessage = await postModel.find();

    res.status(200).json(postMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// create and save new post
exports.createPost = async (req, res) => {
  const post = req.body;

  const newPost = new postModel({
    ...post,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// update a new identified post by post id
exports.updatePost = async (req, res) => {
  const { id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = await postModel.findByIdAndUpdate(id, post, {
    new: true,
  });
  res.json(updatedPost);
};

// delete a post with specified post id in the request
exports.deletePost = async (req, res) => {
  const { id } = req.params;
  // const filePath = req.query.filePath;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await postModel.findByIdAndDelete(id);
  // fs.unlinkSync(filePath);

  res.json({ message: 'Post Deleted successfully' });
};

exports.likePost = async (req, res) => {
  const { id } = req.params;

  if (!req.userId) return res.json({ message: 'Unauthenticated' });

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const post = await postModel.findById(id);

  const index = post.likes.findIndex((id) => id === String(req.userId));

  if (index === -1) {
    // like the post
    post.likes.push(req.userId);
  } else {
    // dislike a post
    post.likes = post.likes.filter((id) => id !== String(req.userId));
  }

  const updatedPost = await postModel.findByIdAndUpdate(id, post, {
    new: true,
  });

  res.json(updatedPost);
};

exports.downloadPost = async (req, res) => {
  try {
    const filePath = req.query.body;

    const absoluteFilePath = path.resolve(__dirname, filePath);
    res.sendFile(absoluteFilePath);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
