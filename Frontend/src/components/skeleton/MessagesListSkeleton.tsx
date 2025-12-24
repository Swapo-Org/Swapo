import { ChevronLeft } from 'lucide-react';

const MessagesListSkeleton = () => {
  return (
    <div className="mx-auto flex h-[calc(100vh-60px)] max-w-4xl bg-stone-50 dark:bg-gray-900">
      <div className="flex-1 overflow-y-auto p-4">
        <ChevronLeft
          size={28}
          className="absolute left-2 text-gray-300 dark:text-gray-700"
        />
        <div className="mb-6 h-7 w-20 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />

        {/* Chat List Skeleton */}
        <div className="space-y-1">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="flex items-center space-x-5 border-b border-gray-200 px-2 py-4 dark:border-gray-800"
            >
              {/* Avatar Skeleton */}
              <div className="h-10 w-10 animate-pulse rounded-full bg-gray-300 dark:bg-gray-700" />

              {/* Message Info Skeleton */}
              <div className="relative w-full space-y-2">
                <div className="h-5 w-32 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
                <div className="h-4 w-48 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
                <div className="h-3 w-24 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MessagesListSkeleton;
