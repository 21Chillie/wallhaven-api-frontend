import { UseSearchContext } from "../../../../hooks/searchContext.hooks";

export function WallpaperResults() {
  const { query } = UseSearchContext();
  const { data } = query;

  return (
    <>
      {data?.data.map((item) => {
        return <p>{item.id}</p>;
      })}
    </>
  );
}
