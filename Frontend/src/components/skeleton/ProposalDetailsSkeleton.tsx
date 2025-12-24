import { ChevronLeft } from 'lucide-react';

const ProposalDetailsSkeleton = () => {
  return (
    <div className="mx-auto mb-12 max-w-xl p-5">
      {/* Header Skeleton */}
      <div className="relative mb-5 flex items-center justify-center">
        <ChevronLeft
          size={28}
          className="absolute left-0 text-gray-300 dark:text-gray-700"
        />
        <div className="h-8 w-48 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
      </div>

      {/* Details Card Skeleton */}
      <div className="rounded-xl bg-white p-5 shadow-md dark:bg-gray-800">
        {/* Proposal ID Row */}
        <div className="flex justify-between border-b border-gray-200 py-3 dark:border-gray-700">
          <div className="h-5 w-28 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
          <div className="h-5 w-20 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
        </div>

        {/* Status Row */}
        <div className="flex justify-between border-b border-gray-200 py-3 dark:border-gray-700">
          <div className="h-5 w-16 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
          <div className="h-6 w-24 animate-pulse rounded-full bg-gray-300 dark:bg-gray-700" />
        </div>

        {/* Message Row */}
        <div className="flex justify-between border-b border-gray-200 py-3 dark:border-gray-700">
          <div className="h-5 w-20 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
          <div className="h-12 w-48 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
        </div>

        {/* Proposer Row */}
        <div className="flex justify-between border-b border-gray-200 py-3 dark:border-gray-700">
          <div className="h-5 w-24 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
          <div className="h-5 w-32 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
        </div>

        {/* Recipient Row */}
        <div className="flex justify-between border-b border-gray-200 py-3 dark:border-gray-700">
          <div className="h-5 w-24 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
          <div className="h-5 w-32 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
        </div>

        {/* Skill Offered Row */}
        <div className="flex justify-between border-b border-gray-200 py-3 dark:border-gray-700">
          <div className="h-5 w-28 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
          <div className="h-5 w-36 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
        </div>

        {/* Skill Desired Row */}
        <div className="flex justify-between border-b border-gray-200 py-3 dark:border-gray-700">
          <div className="h-5 w-28 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
          <div className="h-5 w-36 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
        </div>

        {/* Proposal Date Row */}
        <div className="flex justify-between border-b border-gray-200 py-3 dark:border-gray-700">
          <div className="h-5 w-32 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
          <div className="h-5 w-40 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
        </div>

        {/* Last Updated Row */}
        <div className="flex justify-between py-3">
          <div className="h-5 w-28 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
          <div className="h-5 w-40 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
        </div>
      </div>

      {/* Action Buttons Skeleton */}
      <div className="mt-5 flex gap-3">
        <div className="h-11 flex-1 animate-pulse rounded-lg bg-gray-300 dark:bg-gray-700" />
        <div className="h-11 flex-1 animate-pulse rounded-lg bg-gray-300 dark:bg-gray-700" />
      </div>
    </div>
  );
};

export default ProposalDetailsSkeleton;
