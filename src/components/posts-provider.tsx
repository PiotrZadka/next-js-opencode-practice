'use client';
import { createContext, useContext, useOptimistic } from 'react';
import type { Post } from '@/lib/types';

type PostsContextType = {
  optimisticPosts: Post[];
  addOptimisticPost: (post: Post) => void;
};

export const PostsContext = createContext<PostsContextType | null>(null);

export function PostsProvider({ children }: { children: React.ReactNode }) {
  // "Hollow" optimistic state - starts empty, holds only pending posts
  // These are temporary and will be cleared when the Server Action completes
  const [optimisticPosts, addOptimisticPost] = useOptimistic<Post[], Post>(
    [], // Base state is empty - server data lives elsewhere
    (currentPosts, newPost) => [newPost, ...currentPosts]
  );

  return (
    <PostsContext.Provider value={{ optimisticPosts, addOptimisticPost }}>
      {children}
    </PostsContext.Provider>
  );
}

export function usePostsContext() {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error('usePostsContext must be used within a PostsProvider');
  }
  return context;
}
