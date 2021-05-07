const userModel = require('../../models/users.model');
const mongoose = require('mongoose');

// get all users
exports.getUsers = async (req, res) => {
  try {
    const user = await userModel.find();

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// create and save new user
exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await userModel.findOne({ email: email });

    if (existingUser) {
      return res.status(200).json({ message: "User already exist" });
    }
    
    const result = await userModel.create({ name: name, email: email, password: password });

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
};

// update a new identified user by user id
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const user = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedUser = await userModel.findByIdAndUpdate(id, user, {
    new: true,
  });
  res.json(updatedUser);
};

// delete a user with specified user id in the request
exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await userModel.findByIdAndDelete(id);

  res.json({ message: 'Post Deleted successfully' });
};
