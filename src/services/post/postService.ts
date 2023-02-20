import { isValidObjectId } from 'mongoose';
import Post, { IPost } from '../../models/post';
import AppError from '../../utils/apperror';
import IPostService from './IPostService';

class PostService implements IPostService {
  async createPost(title: string, body: string): Promise<IPost> {
    const post = await Post.create({
      title,
      body,
    });

    return post;
  }

  async getPostById(postId: string): Promise<IPost> {
    if (!isValidObjectId(postId)) {
      throw new AppError(`postId ${postId} is invalid`, 400);
    }

    const post = await Post.findById(postId);

    if (!post) {
      throw new AppError(`No post with id ${postId} is found`, 404);
    }

    return post;
  }

  async getAllPosts(): Promise<IPost[]> {
    const posts = await Post.find();
    return posts;
  }
}

export default PostService;
