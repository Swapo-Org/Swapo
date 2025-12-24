import { Search } from 'lucide-react';

const ListingPageSkeleton = () => {
  return (
    <div className="min-h-screen bg-white px-4 pt-5 pb-20 md:px-8 dark:bg-black">
      {/* Header Skeleton */}
      <div className="mb-5 flex items-center justify-between">
        <div className="h-8 w-40 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
        <div className="h-11 w-11 animate-pulse rounded-full bg-gray-300 dark:bg-gray-700" />
      </div>

      {/* Search Input Skeleton */}
      <div className="relative mb-5">
        <Search
          size={18}
          className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-300 dark:text-gray-600"
        />
        <div className="h-12 w-full animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700" />
      </div>

      {/* Category Tabs Skeleton */}
      <div className="mb-6 flex space-x-3 overflow-x-auto pb-2">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-9 w-24 animate-pulse rounded-full bg-gray-300 dark:bg-gray-700"
          />
        ))}
      </div>

      {/* Listing Cards Skeleton */}
      <div className="grid gap-5">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="rounded-2xl border border-gray-100 p-5 shadow-sm"
          >
            {/* Header with avatar and info */}
            <div className="flex gap-4">
              <div className="h-14 w-14 animate-pulse rounded-full bg-gray-300 dark:bg-gray-700" />
              <div className="flex-1 space-y-2">
                <div className="h-6 w-32 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
                <div className="h-4 w-48 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
              </div>
            </div>

            {/* Skills Info Skeleton */}
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
                <div className="h-4 w-56 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
              </div>
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
                <div className="h-4 w-48 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
              </div>
            </div>

            {/* Buttons Skeleton */}
            <div className="mt-5 flex gap-3">
              <div className="h-10 flex-1 animate-pulse rounded-xl bg-gray-300 dark:bg-gray-700" />
              <div className="h-10 flex-1 animate-pulse rounded-xl bg-gray-300 dark:bg-gray-700" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingPageSkeleton;
