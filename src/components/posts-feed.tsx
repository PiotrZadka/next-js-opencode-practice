'use client';

import { useOptimistic } from 'react';
import type { Post } from '@/lib/types';
import { PostsContext } from './posts-provider';

export default function PostsFeed({ posts }: { posts: Post[] }) {
  const [optimisticPosts, addOptimisticPost] = useOptimistic(
    posts,
    (currentPosts, newPost: Post) => [newPost, ...currentPosts]
  );

  return (
    <PostsContext.Provider value={{ addOptimisticPost }}>
      <div className="posts-feed">
        <h1 className="text-3xl font-bold mb-8">Latest Posts</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {optimisticPosts.map((post) => (
            <div
              key={post.id}
              className={`p-6 border border-[var(--border)] rounded-lg shadow-sm hover:shadow-md transition-shadow bg-[var(--card)] ${
                post.id < 0 ? 'opacity-50' : ''
              }`}
            >
              <h2 className="text-xl font-semibold mb-3 capitalize text-foreground">
                {post.title}
              </h2>
              <p className="text-foreground/80 leading-relaxed">{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    </PostsContext.Provider>
  );
}
