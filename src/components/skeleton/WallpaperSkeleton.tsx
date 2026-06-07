import { Activity } from "react";

export function WallpaperSkeleton({
  length,
  withHeader = true,
}: {
  length: number;
  withHeader?: boolean;
}) {
  return (
    <>
      <div>
        <Activity mode={withHeader ? "visible" : "hidden"}>
          <header className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
            {/*<div className="bg-base-100 h-10 w-48 animate-pulse rounded-xl md:h-12 md:w-64" />*/}

            {/*<div className="bg-base-100 mt-2 h-5 w-64 animate-pulse rounded-xl md:mt-0 md:h-6 md:w-80" />*/}
            <p className="skeleton skeleton-text text-sm">
              Searching wallpaper...
            </p>
          </header>
        </Activity>

        <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length }).map((_, index) => {
            return (
              <li key={index}>
                <WallpaperSkeletonCard></WallpaperSkeletonCard>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export function WallpaperSkeletonCard() {
  return (
    <>
      <div className="relative aspect-3/4 w-full overflow-hidden rounded-md shadow-md">
        <div className="bg-base-100 absolute inset-0 bg-linear-to-r from-transparent to-transparent"></div>

        <div className="absolute top-0 right-0 flex gap-3 p-4">
          <div className="bg-base-content/15 h-4 w-10 animate-pulse rounded-sm"></div>
          <div className="bg-base-content/10 h-4 w-10 animate-pulse rounded-sm"></div>
        </div>

        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <div className="bg-base-content/20 h-4 w-16 animate-pulse rounded-sm md:w-24"></div>

              <div className="bg-base-content/10 h-3 w-24 animate-pulse rounded-sm md:w-32"></div>
            </div>

            <div className="bg-base-content/15 h-8 w-16 animate-pulse rounded-full max-sm:hidden"></div>
          </div>
        </div>
      </div>
    </>
  );
}
