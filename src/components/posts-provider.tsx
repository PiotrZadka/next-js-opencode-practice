'use client';
import { createContext, useContext } from 'react';
import type { Post } from '@/lib/types';

type PostsContextType = {
  addOptimisticPost: (post: Post) => void;
};

export const PostsContext = createContext<PostsContextType | null>(null);

export function PostsProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
export function usePostsContext() {
  const context = useContext(PostsContext);
  // Return a safe no-op if context isn't ready yet (before PostsFeed mounts)
  // This allows CreatePostForm to render before the Suspense boundary resolves
  if (!context) {
    return { addOptimisticPost: () => {} };
  }
  return context;
}
