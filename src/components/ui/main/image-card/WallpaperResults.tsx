import { UseSearchContext } from "../../../../hooks/searchContext.hooks";
import { Activity } from "react";
import WallpaperCard from "./WallpaperCard";
import WallpaperSkeleton from "./WallpaperSkeleton";
import ErrorCard from "./ErrorCard";
import ButtonScrollTop from "./ButtonScrollTop";

export function WallpaperResults() {
  const { query } = UseSearchContext();
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending,
    isError,
    fetchStatus,
    error,
  } = query;

  // Initial skeleton card
  if (isPending && fetchStatus !== "idle") {
    return <WallpaperSkeleton length={12}></WallpaperSkeleton>;
  }

  if (isError) {
    return <ErrorCard error={error}></ErrorCard>;
  }

  const wallpapersData = data?.pages.flatMap((page) => page.data);
  const metaData = data?.pages[0]?.meta;

  return (
    <>
      <section id="wallpaper-result">
        <Activity mode={metaData ? "visible" : "hidden"}>
          <header className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
            <h2 className="text-3xl leading-relaxed font-bold capitalize md:text-4xl">
              {metaData?.query}
            </h2>

            <p className="text-base-content/50 text-sm uppercase md:text-base">
              {`${metaData?.total} wallpapers found for '${metaData?.query}'`}
            </p>
          </header>
        </Activity>

        <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {wallpapersData &&
            wallpapersData.map((w, index) => {
              return (
                <li key={w.id}>
                  <WallpaperCard
                    wallpaper={w}
                    loadingPriority={index < 4 ? "high" : "auto"}
                  ></WallpaperCard>
                </li>
              );
            })}
        </ul>

        {isFetchingNextPage && (
          <div className="mt-3 md:mt-6">
            <WallpaperSkeleton length={8}></WallpaperSkeleton>
          </div>
        )}

        {hasNextPage && !isFetchingNextPage && (
          <div className="mt-4 flex flex-col items-center justify-center gap-12">
            <p className="text-base-content/50 text-sm font-medium">
              Showing {wallpapersData?.length} of {metaData?.total} high-quality
              wallpapers
            </p>

            <button
              onClick={() => fetchNextPage()}
              className="btn btn-primary w-fit px-8"
            >
              Load More
            </button>
          </div>
        )}

        <ButtonScrollTop></ButtonScrollTop>
      </section>
    </>
  );
}
