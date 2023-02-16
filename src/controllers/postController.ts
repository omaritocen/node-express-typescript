import { Request, Response } from 'express';
import { createPost, getPostById, getAllPosts } from '../services/postService';

class PostController {
  async createPost(req: Request, res: Response) {
    const { title, body } = req.body;
    const post = await createPost(title, body);
    return res.status(201).json(post);
  }

  async getPostById(req: Request, res: Response) {
    const postId = req.params.id;
    const post = await getPostById(postId);

    return res.status(200).json(post);
  }

  async getAllPosts(req: Request, res: Response) {
    const posts = await getAllPosts();
    return res.status(200).json(posts);
  }
}

export default PostController;
