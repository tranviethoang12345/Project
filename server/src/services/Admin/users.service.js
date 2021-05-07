const userModel = require("../../models/users.model");
const mongoose = require("mongoose");
const responseHelper = require("../../helper/response.helper");

// get all users
exports.getUsers = async () => {
  try {
    const result = await userModel.find();

    return responseHelper.handleResponse(
      200,
      "Get data successfully",
      "SUCCEED",
      result
    );
  } catch (error) {
    throw error;
  }
};

// create and save new user
exports.createUser = async (req, res) => {
  const user = req.body;

  const newUser = new userModel({
    ...user,
  });

  try {
    await user.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
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

  res.json({ message: "Post Deleted successfully" });
};
