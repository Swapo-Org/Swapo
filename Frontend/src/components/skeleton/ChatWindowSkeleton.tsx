import { ChevronLeft, Phone } from 'lucide-react';

const ChatWindowSkeleton = () => {
  return (
    <div className="flex flex-1 flex-col bg-stone-50 dark:bg-gray-900">
      <div className="mb-17 flex flex-col justify-between">
        <div>
          {/* Header Skeleton */}
          <div className="relative flex items-center justify-center border-b border-gray-200 pt-2 pb-4 dark:border-gray-700">
            <ChevronLeft
              size={28}
              className="absolute left-2 text-gray-300 dark:text-gray-700"
            />
            <div className="text-center">
              <div className="mx-auto mb-2 h-6 w-32 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
              <div className="mx-auto h-4 w-16 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
            </div>
            <Phone
              size={20}
              className="absolute right-3 text-gray-300 dark:text-gray-700"
            />
          </div>

          {/* Messages Skeleton */}
          <div className="flex flex-1 flex-col space-y-4 px-4 py-4">
            {/* Received message */}
            <div
              className="flex items-end space-x-2"
              style={{ maxWidth: '85%' }}
            >
              <div className="h-8 w-8 animate-pulse rounded-full bg-gray-300 dark:bg-gray-700" />
              <div className="flex-1 space-y-1">
                <div className="h-16 w-48 animate-pulse rounded-2xl bg-gray-300 dark:bg-gray-700" />
                <div className="ml-10 h-3 w-24 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
              </div>
            </div>

            {/* Sent message */}
            <div
              className="ml-auto flex items-end space-x-2 space-x-reverse"
              style={{ maxWidth: '85%' }}
            >
              <div className="h-8 w-8 animate-pulse rounded-full bg-gray-300 dark:bg-gray-700" />
              <div className="flex-1 space-y-1">
                <div className="ml-auto h-16 w-56 animate-pulse rounded-2xl bg-gray-300 dark:bg-gray-700" />
                <div className="mr-10 ml-auto h-3 w-24 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
              </div>
            </div>

            {/* Received message */}
            <div
              className="flex items-end space-x-2"
              style={{ maxWidth: '85%' }}
            >
              <div className="h-8 w-8 animate-pulse rounded-full bg-gray-300 dark:bg-gray-700" />
              <div className="flex-1 space-y-1">
                <div className="h-20 w-64 animate-pulse rounded-2xl bg-gray-300 dark:bg-gray-700" />
                <div className="ml-10 h-3 w-24 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
              </div>
            </div>

            {/* Sent message */}
            <div
              className="ml-auto flex items-end space-x-2 space-x-reverse"
              style={{ maxWidth: '85%' }}
            >
              <div className="h-8 w-8 animate-pulse rounded-full bg-gray-300 dark:bg-gray-700" />
              <div className="flex-1 space-y-1">
                <div className="ml-auto h-12 w-40 animate-pulse rounded-2xl bg-gray-300 dark:bg-gray-700" />
                <div className="mr-10 ml-auto h-3 w-24 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
              </div>
            </div>
          </div>
        </div>

        {/* Message Input Skeleton */}
        <div className="flex items-center space-x-2 border-t border-gray-200 bg-stone-50 px-2 pt-2 dark:border-gray-700 dark:bg-gray-900">
          <div className="flex flex-1 items-center rounded-full bg-gray-200 px-3 py-2 dark:bg-gray-700">
            <div className="h-8 flex-1 animate-pulse rounded bg-gray-300 dark:bg-gray-600" />
          </div>
          <div className="h-10 w-10 animate-pulse rounded-full bg-gray-300 dark:bg-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default ChatWindowSkeleton;
