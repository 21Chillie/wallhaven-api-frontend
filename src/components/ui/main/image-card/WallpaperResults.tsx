import { UseSearchContext } from "../../../../hooks/searchContext.hooks";
import { Activity } from "react";
import WallpaperCard from "./WallpaperCard";
import WallpaperSkeleton from "./WallpaperSkeleton";
import ErrorCard from "./ErrorCard";
import ButtonScrollTop from "./ButtonScrollTop";

export function WallpaperResults() {
  const { query } = UseSearchContext();
  const { data, error, isError, isFetching } = query;

  if (isFetching) {
    return <WallpaperSkeleton></WallpaperSkeleton>;
  }

  if (isError) {
    return <ErrorCard error={error}></ErrorCard>;
  }

  const wallpapersData = data?.data;
  const metaData = data?.meta;

  return (
    <>
      <section id="wallpaper-result">
        <Activity mode={metaData ? "visible" : "hidden"}>
          <header className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
            <h1 className="text-3xl leading-relaxed font-bold capitalize md:text-4xl">
              {metaData?.query}
            </h1>

            <p className="text-base-content/50 text-sm uppercase md:text-base">
              {`${metaData?.total} wallpapers found for '${metaData?.query}'`}
            </p>
          </header>
        </Activity>

        <ul className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {wallpapersData &&
            wallpapersData.map((w) => {
              return (
                <li key={w.id}>
                  <WallpaperCard {...w}></WallpaperCard>
                </li>
              );
            })}
        </ul>

        <ButtonScrollTop></ButtonScrollTop>
      </section>
    </>
  );
}
