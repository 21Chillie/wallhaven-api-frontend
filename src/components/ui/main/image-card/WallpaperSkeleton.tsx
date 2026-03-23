function WallpaperSkeleton({ length }: { length: number }) {
  return (
    <>
      <section id="wallpaper-skeleton">
        <ul className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length }).map((_, index) => {
            return (
              <li key={index}>
                <WallpaperSkeletonCard></WallpaperSkeletonCard>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

function WallpaperSkeletonCard() {
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

export default WallpaperSkeleton;
