import { isValidObjectId } from 'mongoose';
import Post, { IPost } from '../models/post';
import AppError from '../utils/apperror';

const createPost = async (title: string, body: string): Promise<IPost> => {
  const post = await Post.create({
    title,
    body,
  });

  return post;
};

const getPostById = async (postId: string): Promise<IPost> => {
  if (!isValidObjectId(postId)) {
    throw new AppError(`postId ${postId} is invalid`, 400);
  }

  const post = await Post.findById(postId);

  if (!post) {
    throw new AppError(`No post with id ${postId} is found`, 404);
  }

  return post;
};

const getAllPosts = async (): Promise<IPost[]> => {
  const posts = await Post.find();
  return posts;
};

export { createPost, getPostById, getAllPosts };
