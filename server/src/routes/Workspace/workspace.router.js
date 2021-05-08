// Create Router
const router = require('express').Router();

// Import Controller
const workspaceController = require('../../controllers/Workspace/post.controller');

/**
 * @description Workspace - Posts
 * @method GET /
 */
router.get('/', workspaceController.getPosts);

/**
 * @description Workspace - Create Post
 * @method POST /
 */
router.post('/', workspaceController.createPost);

/**
 * @description Workspace - Update Post
 * @method Patch /:id
 */
router.patch('/:id', workspaceController.updatePost);

/**
 * @description Workspace - Delete Post
 * @method Delete /:id
 */
router.delete('/:id', workspaceController.deletePost);

/**
 * @description Workspace - Like Post
 * @method Patch /:id/likePost
 */
router.patch('/:id/likePost', workspaceController.likePost);

/**
 * @description Workspace - Download Post
 * @method Patch /:id/likePost
 */
 router.get('/download/:id',  workspaceController.downloadPost);

module.exports = router;
