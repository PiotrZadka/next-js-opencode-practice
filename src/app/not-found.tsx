import Link from 'next/link';

/**
 * NotFound - Server Component
 *
 * A professional 404 error page that matches the Stone theme.
 * It provides a clear message and a path back to safety.
 */
export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center p-8 text-center">
      <div className="space-y-6">
        <h1 className="text-9xl font-bold text-orange-600/20">404</h1>
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Page not found</h2>
          <p className="text-[var(--foreground)]/60 max-w-md mx-auto">
            The page you are looking for doesn&apos;t exist or has been moved to
            another URL.
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors border border-[var(--border)] rounded-lg bg-[var(--card)] hover:bg-[var(--background)] hover:text-orange-600"
        >
          Return to Dashboard
        </Link>
      </div>
    </main>
  );
}
