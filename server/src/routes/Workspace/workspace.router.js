// Create Router
const router = require('express').Router();

// Import Controller
const workspaceController = require('../../controllers/Workspace/post.controller');

/**
 * @description SignIn User
 * @method GET /SignIn
 */

router.get("/", workspaceController.getPosts);
router.post("/", workspaceController.createPost);
router.patch("/:id", workspaceController.updatePost);
router.delete("/:id", workspaceController.deletePost);
router.patch("/:id/likePost", workspaceController.likePost);

module.exports = router;