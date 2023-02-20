import { IPost } from '../../models/post';

interface IPostService {
  createPost(title: string, body: string): Promise<IPost>;
  getPostById(postId: string): Promise<IPost>;
  getAllPosts(): Promise<IPost[]>;
}

export default IPostService;
