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
  // Fetching happens on the server. Next.js extends the native fetch API 
  // to support caching and revalidation.
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  const posts: Post[] = await response.json();

  return (
    <main className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold mb-8">Latest Posts</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div 
            key={post.id} 
            className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white"
          >
            <h2 className="text-xl font-semibold mb-3 capitalize">{post.title}</h2>
            <p className="text-gray-600 leading-relaxed">{post.body}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
