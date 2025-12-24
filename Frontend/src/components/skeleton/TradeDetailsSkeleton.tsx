import { ChevronLeft } from 'lucide-react';

const TradeDetailsSkeleton = () => {
  return (
    <div className="mx-auto h-full max-w-xl flex-col">
      {/* Header Skeleton */}
      <div className="sticky top-0 z-10 flex items-center justify-center border-b border-gray-200 bg-white px-4 py-4 dark:border-gray-800 dark:bg-gray-900">
        <ChevronLeft
          size={24}
          className="absolute left-4 text-gray-300 dark:text-gray-700"
        />
        <div className="h-7 w-32 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
      </div>

      {/* Main Content Skeleton */}
      <div className="space-y-0 divide-y divide-gray-100 bg-white px-4 pb-5 dark:divide-gray-800 dark:bg-gray-900">
        {/* Trade Status Row */}
        <div className="flex items-center justify-between py-4">
          <div className="h-5 w-32 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
          <div className="h-6 w-24 animate-pulse rounded-full bg-gray-300 dark:bg-gray-700" />
        </div>

        {/* Your Skill Section */}
        <div className="py-4 text-left">
          <div className="mb-2 h-4 w-36 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
          <div className="mb-2 h-6 w-48 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
          <div className="h-4 w-64 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
        </div>

        {/* Other User's Skill Section */}
        <div className="py-4 text-left">
          <div className="mb-2 h-4 w-36 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
          <div className="mb-2 h-6 w-48 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
          <div className="h-4 w-64 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
        </div>

        {/* Trading Partner Section */}
        <div className="py-4">
          <div className="mb-3 h-4 w-32 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
          <div className="flex items-center space-x-4">
            <div className="h-12 w-12 animate-pulse rounded-full bg-gray-300 dark:bg-gray-700" />
            <div className="flex-1 space-y-2">
              <div className="h-5 w-32 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
              <div className="h-4 w-24 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
            </div>
          </div>
        </div>

        {/* Agreed Terms Section */}
        <div className="py-4 text-left">
          <div className="mb-3 h-4 w-28 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
          <div className="space-y-2">
            <div className="h-4 w-full animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
            <div className="h-4 w-full animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
            <div className="h-4 w-3/4 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
          </div>
        </div>

        {/* Trade Start Date Row */}
        <div className="flex justify-between py-4">
          <div className="h-5 w-36 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
          <div className="h-5 w-28 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
        </div>
      </div>

      {/* CTA Buttons Skeleton */}
      <div className="mx-auto mb-14 max-w-xl border-t border-gray-200 bg-white p-4 shadow-2xl dark:border-gray-700 dark:bg-gray-900">
        <div className="flex space-x-3">
          <div className="h-11 flex-1 animate-pulse rounded-lg bg-gray-300 dark:bg-gray-700" />
          <div className="h-11 flex-1 animate-pulse rounded-lg bg-gray-300 dark:bg-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default TradeDetailsSkeleton;
