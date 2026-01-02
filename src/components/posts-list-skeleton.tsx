export default function PostsListSkeleton() {
  return (
    <div className="posts-feed">
      <div className="h-9 w-48 bg-gray-200 dark:bg-gray-800 rounded mb-8 animate-pulse" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="p-6 border border-[var(--border)] rounded-lg shadow-sm bg-[var(--card)] h-48 flex flex-col justify-between"
          >
            <div className="h-7 w-3/4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse mb-3" />

            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
              <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
              <div className="h-4 w-4/6 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
