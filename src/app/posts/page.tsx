import { db } from '@/lib/db';
import PostsFeed from '@/components/posts-feed';

interface Post {
  id: number;
  title: string;
  body: string;
}

/**
 * PostsPage - Server Component
 *
 * This is a Server Component by default because it doesn't include the 'use client' directive.
 *
 * Why Server Component?
 * 1. Data Fetching: We can fetch data directly on the server. This happens during the
 *    rendering process on the server, before the HTML is sent to the browser.
 * 2. Performance: Since the fetching happens on the server, the browser receives
 *    fully rendered HTML. This reduces the amount of JavaScript sent to the client
 *    and eliminates the need for a separate client-side fetch, resulting in
 *    faster First Contentful Paint (FCP).
 * 3. Security: Sensitive information (like API keys) can stay on the server
 *    without being exposed to the client.
 */
export default async function PostsPage() {
  // Fetching happens on the server.
  // We use Prisma to fetch data directly from the database.
  const posts: Post[] = await db.post.findMany();

  return (
    <main className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <div className="mb-8">
        <PostsFeed posts={posts} />
      </div>
    </main>
  );
}
