import { ArrowLeftRight, Bell, PlusCircle, Settings, Star } from 'lucide-react';

const DashboardHomeSkeleton = () => {
  return (
    <div className="min-h-screen bg-stone-50 pb-10 dark:bg-gray-900">
      {/* Profile Header Skeleton */}
      <div className="flex items-center justify-between bg-red-500 px-4 pt-10 pb-26 text-white">
        <div className="flex items-center justify-center space-x-3">
          <div className="h-10 w-10 animate-pulse rounded-full bg-white/30" />
          <div className="flex flex-col items-start space-y-2">
            <div className="h-4 w-24 animate-pulse rounded bg-white/30" />
            <div className="h-7 w-32 animate-pulse rounded bg-white/30" />
          </div>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
          <Bell size={18} className="text-white/50" />
        </div>
      </div>

      {/* Recent Trades Card Skeleton */}
      <div className="mx-4 -mt-10 rounded-xl border-transparent bg-white p-4 shadow-xl dark:bg-gray-800">
        <div className="flex justify-between">
          <div className="h-6 w-32 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
          <div className="h-5 w-20 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
        </div>

        {/* Trade Items Skeleton */}
        <div className="mt-4 space-y-4">
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {/* Avatar */}
                <div className="h-10 w-10 animate-pulse rounded-full bg-gray-300 dark:bg-gray-700" />

                {/* Trade Info */}
                <div className="space-y-2">
                  <div className="h-5 w-40 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
                  <div className="h-4 w-32 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
                  <div className="h-5 w-20 animate-pulse rounded-full bg-gray-300 dark:bg-gray-700" />
                </div>
              </div>

              {/* Message Icon */}
              <div className="h-5 w-5 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
            </div>
          ))}
        </div>
      </div>

      {/* Quick Links Skeleton */}
      <div className="mx-4 my-10">
        <div className="mb-5 h-6 w-28 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />

        <div className="grid grid-cols-2 gap-6">
          {[
            { icon: PlusCircle },
            { icon: ArrowLeftRight },
            { icon: Star },
            { icon: Settings },
          ].map((link, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center rounded-xl border-transparent bg-white p-10 shadow-md dark:bg-gray-800"
            >
              <div className="mb-2 rounded-full bg-gray-200 p-4 dark:bg-gray-700">
                <link.icon
                  size={18}
                  className="text-gray-400 dark:text-gray-600"
                />
              </div>
              <div className="h-5 w-24 animate-pulse rounded bg-gray-300 dark:bg-gray-700" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardHomeSkeleton;
