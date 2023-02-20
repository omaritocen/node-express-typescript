import { Request, Response } from 'express';
import IPostService from '../services/post/IPostService';

class PostController {
  private postService: IPostService;

  constructor(postService: IPostService) {
    this.postService = postService;
  }

  createPost = async (req: Request, res: Response) => {
    const { title, body } = req.body;
    const post = await this.postService.createPost(title, body);
    return res.status(201).json(post);
  };

  getPostById = async (req: Request, res: Response) => {
    const postId = req.params.id;
    const post = await this.postService.getPostById(postId);

    return res.status(200).json(post);
  };

  getAllPosts = async (req: Request, res: Response) => {
    const posts = await this.postService.getAllPosts();
    return res.status(200).json(posts);
  };
}

export default PostController;
