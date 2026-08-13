import { WallpaperSkeleton } from "@components/skeleton/WallpaperSkeleton";
import WallpaperGrid from "@components/WallpaperGrid";
import { apiQueryOptions } from "@services/apiQuery";
import { useSearchParamsStore } from "@store/useSearchParamsStore";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Activity, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { useShallow } from "zustand/shallow";

export default function WallpaperResult() {
  const { params, key } = useSearchParamsStore(
    useShallow((s) => ({
      params: s.params,
      key: s.apiKey,
    }))
  );
  const {
    data,
    isPending,
    isError,
    error,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery(apiQueryOptions(params, key));

  // Handling load more wallpapers
  // The behaviour like infinite scrolls
  const sentinelRef = useRef<HTMLDivElement>(null);

  // Infinite scroll side-effect
  useEffect(() => {
    if (!sentinelRef.current || !hasNextPage) return;

    // if the view position reach the div element (sentinelRef)
    // it will fetch next page
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { rootMargin: "1000px" }
    );

    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  useEffect(() => {
    if (!isError) return;

    toast.error(error.message);
  }, [isError, error]);

  if (isPending) {
    return (
      <section
        id="section-wallpaper-grid"
        className="mx-auto max-w-6xl max-xl:px-4">
        <WallpaperSkeleton length={8} />
      </section>
    );
  }

  if (!data) return null;

  const wallpaperData = data.pages.flatMap((page) => page.data);
  const metaData = data.pages[0].meta;
  console.log({ data: wallpaperData, meta: metaData });

  return (
    <section
      id="section-wallpaper-grid"
      className="mx-auto max-w-6xl max-xl:px-4">
      <header className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
        {/*<h3 className="text-2xl font-medium tracking-tight md:text-3xl">
          {metaData.query}
        </h3>*/}

        <p className="text-base-content/50 text-sm font-medium">
          Showing {metaData.total.toLocaleString()}
          <Activity mode={metaData.query ? "visible" : "hidden"}>
            {" "}
            <span>{metaData.query?.toUpperCase()} </span>
          </Activity>{" "}
          wallpapers
        </p>
      </header>

      <WallpaperGrid wallpapers={wallpaperData} />

      <Activity mode={isFetchingNextPage ? "visible" : "hidden"}>
        <div className="mt-4">
          <WallpaperSkeleton
            length={6}
            withHeader={false}
          />
        </div>
      </Activity>

      <Activity mode={!hasNextPage ? "visible" : "hidden"}>
        <div className="mt-6 text-center">
          <p className="text-base-content/50 text-sm font-medium">
            You have reached the end of the results
          </p>
        </div>
      </Activity>

      <Activity
        mode={hasNextPage && !isFetchingNextPage ? "visible" : "hidden"}>
        {/* sentinelRef div for infinite scroll */}
        <div ref={sentinelRef} />
      </Activity>
    </section>
  );
}
