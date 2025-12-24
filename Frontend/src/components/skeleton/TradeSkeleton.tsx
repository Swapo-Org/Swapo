import { ChevronLeft } from 'lucide-react';

const TradeSkeleton = () => {
  return (
    <div className="mx-auto mb-5 min-h-screen max-w-xl bg-stone-50 py-5 dark:bg-gray-900">
      {/* Header Skeleton */}
      <div className="relative mb-8 flex items-center justify-center border-b border-gray-200 pb-4 dark:border-gray-700">
        <ChevronLeft
          size={28}
          className="absolute left-0 text-gray-300 dark:text-gray-700"
        />
        <div className="h-7 w-20 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
      </div>

      {/* Navigation Tabs Skeleton */}
      <nav className="border-b border-gray-200 px-4 dark:border-gray-700">
        <ul className="flex justify-start space-x-10">
          {[1, 2, 3, 4].map((i) => (
            <li key={i} className="pb-6">
              <div className="h-5 w-20 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
            </li>
          ))}
        </ul>
      </nav>

      {/* Trade List Skeleton */}
      <div className="space-y-4 bg-stone-50/50 px-4 pt-6 pb-10 dark:bg-gray-900">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="flex items-center justify-between rounded-lg border border-gray-200 p-3 dark:border-gray-600"
          >
            <div className="flex items-center space-x-3">
              {/* Avatar Skeleton */}
              <div className="h-10 w-10 animate-pulse rounded-full bg-gray-300 dark:bg-gray-700" />

              {/* Trade Info Skeleton */}
              <div className="space-y-2 text-left">
                <div className="h-5 w-48 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
                <div className="h-4 w-32 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
                <div className="h-5 w-20 animate-pulse rounded-full bg-gray-300 dark:bg-gray-700" />
              </div>
            </div>

            {/* Chevron Skeleton */}
            <div className="h-5 w-5 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradeSkeleton;
