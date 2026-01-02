import type { Post } from '@/lib/types';
import { db } from '@/lib/db';
import PostsFeed from './posts-feed';

export default async function PostsList() {
  //Delay to simulate loading
  await new Promise((resolve) => setTimeout(resolve, 8000));
  const posts: Post[] = await db.post.findMany();

  return <PostsFeed posts={posts} />;
}
