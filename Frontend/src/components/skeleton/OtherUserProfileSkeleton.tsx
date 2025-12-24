import { ChevronLeft, MoreVertical } from 'lucide-react';

const OtherUserProfileSkeleton = () => {
  return (
    <div className="mx-auto min-h-screen max-w-xl p-4">
      {/* Header Skeleton */}
      <div className="relative mb-6 flex items-center justify-between border-b pb-4">
        <ChevronLeft size={28} className="text-gray-300 dark:text-gray-700" />
        <div className="h-7 w-32 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
        <MoreVertical size={24} className="text-gray-300 dark:text-gray-700" />
      </div>

      {/* Profile Info Skeleton */}
      <div className="text-center">
        {/* Avatar Skeleton */}
        <div className="mx-auto h-36 w-36 animate-pulse rounded-full bg-gray-300 dark:bg-gray-700" />

        <div className="mt-4 space-y-2">
          {/* Name Skeleton */}
          <div className="mx-auto h-7 w-40 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
          {/* Role Skeleton */}
          <div className="mx-auto h-5 w-32 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
          {/* Bio Skeleton */}
          <div className="mx-auto h-4 w-56 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
        </div>
      </div>

      {/* Send Message Button Skeleton */}
      <div className="mt-6 h-11 w-full animate-pulse rounded-lg bg-gray-300 dark:bg-gray-700" />

      {/* Tabs Skeleton */}
      <nav className="mt-6 mb-4 border-b">
        <ul className="flex justify-start space-x-6">
          {[1, 2, 3, 4].map((i) => (
            <li key={i} className="pb-2">
              <div className="h-5 w-20 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex flex-col space-y-6">
        {/* Offered Skills Section Skeleton */}
        <div>
          <div className="mb-3 h-7 w-36 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
          <div className="flex flex-wrap gap-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-lg border p-4"
              >
                <div className="h-5 w-5 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
                <div className="h-5 w-24 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
              </div>
            ))}
          </div>
        </div>

        {/* Desired Skills Section Skeleton */}
        <div>
          <div className="mb-3 h-7 w-36 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
          <div className="flex flex-wrap gap-3">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-lg border p-4"
              >
                <div className="h-5 w-5 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
                <div className="h-5 w-24 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio Section Skeleton */}
        <div>
          <div className="mb-3 h-7 w-24 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
          <div className="grid grid-cols-2 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-40 w-full animate-pulse rounded-lg bg-gray-300 dark:bg-gray-700"
              />
            ))}
          </div>
        </div>

        {/* Reviews Section Skeleton */}
        <div>
          <div className="mb-3 h-7 w-24 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
          <div className="mb-3 h-8 w-16 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />

          {/* Stars Skeleton */}
          <div className="mb-4 flex space-x-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="h-4 w-4 animate-pulse rounded-full bg-gray-300 dark:bg-gray-700"
              />
            ))}
          </div>

          {/* Review Cards Skeleton */}
          <div className="mb-20 space-y-3">
            {[1, 2].map((i) => (
              <div key={i} className="rounded-lg border p-4">
                <div className="mb-2 flex items-center space-x-3">
                  <div className="h-10 w-10 animate-pulse rounded-full bg-gray-300 dark:bg-gray-700" />
                  <div className="flex-1 space-y-2">
                    <div className="h-5 w-32 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
                    <div className="h-4 w-24 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
                  </div>
                </div>

                {/* Stars */}
                <div className="mt-2 mb-2 flex space-x-1">
                  {[1, 2, 3, 4, 5].map((j) => (
                    <div
                      key={j}
                      className="h-4 w-4 animate-pulse rounded-full bg-gray-300 dark:bg-gray-700"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <div className="mb-2 space-y-2">
                  <div className="h-4 w-full animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
                  <div className="h-4 w-3/4 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
                </div>

                {/* Likes/Dislikes */}
                <div className="flex space-x-4">
                  <div className="h-4 w-12 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
                  <div className="h-4 w-12 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherUserProfileSkeleton;
