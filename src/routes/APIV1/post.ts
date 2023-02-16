import { Router } from 'express';
import PostController from '../../controllers/postController';

const router = Router();
const postController = new PostController();

router.post('/', postController.createPost);
router.get('/:id', postController.getPostById);
router.get('/', postController.getAllPosts);

export default router;
