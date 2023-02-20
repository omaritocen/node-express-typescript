import { Router } from 'express';
import PostController from '../../controllers/postController';
import PostService from '../../services/post/postService';

const postService = new PostService();
const postController = new PostController(postService);

const router = Router();

router.post('/', postController.createPost);
router.get('/:id', postController.getPostById);
router.get('/', postController.getAllPosts);

export default router;
