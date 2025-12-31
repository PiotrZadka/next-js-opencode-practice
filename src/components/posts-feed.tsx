'use client';

import { useOptimistic } from 'react';
import CreatePostForm from './create-post-form';
import { createPost, FormState } from '@/app/posts/actions';

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function PostsFeed({ posts }: { posts: Post[] }) {
  const [optimisticPosts, addOptimisticPost] = useOptimistic(
    posts,
    (currentPosts, newPost: Post) => [newPost, ...currentPosts]
  );

  const handleAction = async (prevState: FormState, formData: FormData) => {
    const title = formData.get('title') as string;
    const body = formData.get('body') as string;

    addOptimisticPost({
      id: -1, // Temporary ID for optimistic state
      title,
      body,
    });

    return await createPost(prevState, formData);
  };

  return (
    <div className="posts-feed">
      <CreatePostForm action={handleAction} />
      <h1 className="text-3xl font-bold mb-8">Latest Posts</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {optimisticPosts.map((post) => (
          <div
            key={post.id}
            className={`p-6 border border-[var(--border)] rounded-lg shadow-sm hover:shadow-md transition-shadow bg-[var(--card)] ${
              post.id === -1 ? 'opacity-50' : ''
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
  );
}
