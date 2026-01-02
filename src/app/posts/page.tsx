import CreatePostForm from '@/components/create-post-form';
import PostsList from '@/components/posts-list';
import PostsListSkeleton from '@/components/posts-list-skeleton';
import { Suspense } from 'react';
import { PostsProvider } from '@/components/posts-provider';

export default async function PostsPage() {
  return (
    <main className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <PostsProvider>
        <div className="mb-8">
          <CreatePostForm />
        </div>
        <Suspense fallback={<PostsListSkeleton />}>
          <PostsList />
        </Suspense>
      </PostsProvider>
    </main>
  );
}
