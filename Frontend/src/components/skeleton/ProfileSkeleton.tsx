const ProfileSkeleton = () => {
  return (
    <div className="mx-auto flex min-h-screen max-w-xl flex-col bg-stone-50/50 py-2 pb-10 dark:bg-gray-900">
      {/* Header Skeleton */}
      <div className="relative flex items-center justify-center border-b border-gray-200 pt-2 pb-4 dark:border-gray-700">
        <div className="h-7 w-24 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
      </div>

      {/* Profile Info Skeleton */}
      <div className="rounded-b-lg bg-stone-50/50 px-4 pt-10 text-center dark:bg-gray-800">
        {/* Avatar Skeleton */}
        <div className="mx-auto h-36 w-36 animate-pulse rounded-full bg-gray-300 dark:bg-gray-700" />

        <div className="my-5 space-y-3">
          {/* Name Skeleton */}
          <div className="mx-auto h-8 w-48 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
          {/* Role Skeleton */}
          <div className="mx-auto h-4 w-32 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
          {/* Bio Skeleton */}
          <div className="mx-auto h-3 w-56 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
        </div>

        {/* Button Skeleton */}
        <div className="mx-auto h-10 w-full animate-pulse rounded-lg bg-gray-300 dark:bg-gray-700" />
      </div>

      {/* Tabs Skeleton */}
      <nav className="mt-6 mb-6 border-b border-gray-200 px-4 dark:border-gray-600">
        <ul className="flex justify-start space-x-6">
          {[1, 2, 3, 4].map((i) => (
            <li key={i} className="pb-6">
              <div className="h-4 w-16 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex flex-col space-y-8 px-6 pb-15">
        {/* Offered Skills Skeleton */}
        <SkillsSectionSkeleton />

        {/* Desired Skills Skeleton */}
        <SkillsSectionSkeleton />

        {/* Portfolio Skeleton */}
        <PortfolioSectionSkeleton />

        {/* Reviews Skeleton */}
        <ReviewsSectionSkeleton />
      </div>
    </div>
  );
};

const SkillsSectionSkeleton = () => (
  <div>
    <div className="mt-3 mb-6 flex items-center justify-between">
      <div className="h-7 w-36 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
      <div className="h-5 w-5 animate-pulse rounded-full bg-gray-300 dark:bg-gray-700" />
    </div>
    <div className="flex flex-wrap gap-3">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="flex items-center gap-3 rounded-lg border border-gray-300 px-4 py-3 dark:border-gray-600"
        >
          <div className="h-5 w-5 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
          <div className="flex flex-col gap-2">
            <div className="h-4 w-24 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
            <div className="h-3 w-16 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const PortfolioSectionSkeleton = () => (
  <div className="mt-3 mb-6 flex flex-col gap-4">
    <div className="flex items-center justify-between">
      <div className="h-7 w-24 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
      <div className="h-5 w-5 animate-pulse rounded-full bg-gray-300 dark:bg-gray-700" />
    </div>
    <div className="mt-4 grid grid-cols-2 gap-3">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="aspect-square animate-pulse rounded-lg bg-gray-300 dark:bg-gray-700"
        />
      ))}
    </div>
  </div>
);

const ReviewsSectionSkeleton = () => (
  <div className="text-left">
    <div className="my-3 h-7 w-24 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
    <div className="mb-3 h-10 w-16 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />

    {/* Stars Skeleton */}
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="h-4 w-4 animate-pulse rounded-full bg-gray-300 dark:bg-gray-700"
        />
      ))}
    </div>

    {/* Rating Distribution Skeleton */}
    <div className="mt-6 space-y-2">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="flex items-center space-x-2">
          <div className="h-4 w-4 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
          <div className="h-2 flex-1 animate-pulse rounded-full bg-gray-300 dark:bg-gray-700" />
          <div className="h-4 w-10 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
        </div>
      ))}
    </div>

    {/* Individual Reviews Skeleton */}
    <div className="mt-6 space-y-4">
      {[1, 2].map((i) => (
        <div
          key={i}
          className="rounded-lg border border-gray-200 p-4 dark:border-gray-700"
        >
          <div className="mb-2 flex items-center space-x-3">
            <div className="h-10 w-10 animate-pulse rounded-full bg-gray-300 dark:bg-gray-700" />
            <div className="flex-1 space-y-2">
              <div className="h-4 w-32 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
              <div className="h-3 w-24 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
            </div>
          </div>

          {/* Stars */}
          <div className="mb-3 flex space-x-1">
            {[1, 2, 3, 4, 5].map((j) => (
              <div
                key={j}
                className="h-4 w-4 animate-pulse rounded-full bg-gray-300 dark:bg-gray-700"
              />
            ))}
          </div>

          {/* Review Text */}
          <div className="mb-4 space-y-2">
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
);

export default ProfileSkeleton;
