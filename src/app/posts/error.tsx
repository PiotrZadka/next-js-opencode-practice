'use client';

import { useEffect } from 'react';

/**
 * ErrorBoundary - Client Component
 * 
 * In Next.js App Router, 'error.tsx' must be a Client Component.
 * It serves as a React Error Boundary for its route segment and its children.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen p-8 flex flex-col items-center justify-center font-[family-name:var(--font-geist-sans)]">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4 text-red-600">Something went wrong!</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          {error.message || 'There was an error while displaying the page content.'}
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
