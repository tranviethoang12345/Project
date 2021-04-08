const router = require('express').Router();

const postController = require('../../controllers/Workspace/post.controller');

router.get('/', postController.getPost);

router.post('/', postController.createPost);

module.exports = router;
