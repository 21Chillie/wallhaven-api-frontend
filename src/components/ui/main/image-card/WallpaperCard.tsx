import { UseSearchContext } from "../../../../hooks/searchContext.hooks";
import type { WallhavenWallpaper } from "../../../../types/apiResponse.types";
import { FaHeart, FaEye } from "react-icons/fa";

function WallpaperCard(props: WallhavenWallpaper) {
  const { id, thumbs, resolution, category, purity, views, favorites } = props;
  const { toggleModalWallpaper } = UseSearchContext();

  return (
    <>
      <div
        className="group hover:border-primary/50 border-base-content/10 relative cursor-zoom-in overflow-hidden rounded-md border shadow-md transition-all duration-300"
        onClick={() => toggleModalWallpaper(id)}
      >
        {/* View and favorite count */}
        <div className="absolute -top-1 right-0 left-0 z-10 flex items-center justify-end gap-3 bg-linear-to-b from-black/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100">
          <div className="flex items-center gap-1.5 text-white/90">
            <FaEye className="text-accent text-xs"></FaEye>
            <span className="text-[11px] font-bold">{views}</span>
          </div>
          <div className="flex items-center gap-1.5 text-white/90">
            <FaHeart className="text-secondary text-xs"></FaHeart>
            <span className="text-[11px] font-bold">{favorites}</span>
          </div>
        </div>

        {/* image */}
        <figure className="aspect-3/4">
          <img
            src={thumbs.large || thumbs.original || thumbs.small}
            alt="Wallpaper Preview"
            className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            loading="lazy"
            decoding="async"
          />
        </figure>

        {/* Meta tag and button */}
        <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/90 via-black/20 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100 md:p-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-0.5 text-white/90">
              <span className="text-sm font-bold tracking-tight">
                {resolution}
              </span>
              <span className="text-[10px] font-medium tracking-widest uppercase">
                {category} • {purity}
              </span>
            </div>

            <button
              type="button"
              className="btn btn-primary btn-soft items-center gap-2 rounded-full px-4 text-xs font-semibold backdrop-blur-md transition-colors max-sm:hidden"
              onClick={() => toggleModalWallpaper(id)}
            >
              View
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default WallpaperCard;
