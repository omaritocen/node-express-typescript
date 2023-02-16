import { model, Schema } from 'mongoose';

export interface IPost {
  title: string;
  body: string;
}

const postSchema = new Schema<IPost>({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

const Post = model<IPost>('Post', postSchema);

export default Post;
