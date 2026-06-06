import { Eye, Heart, Maximize2 } from "lucide-react";
import type { WallhavenWallpaper } from "~/types/apiResponse.type";
import { getProxyImageUrl } from "@utils/proxyImage";

export default function WallpaperCard({
  wallpaper,
}: {
  wallpaper: WallhavenWallpaper;
}) {
  const {
    path,
    thumbs,
    resolution,
    category,
    purity,
    views,
    favorites,
    dimension_x,
    dimension_y,
  } = wallpaper;

  // const imageUrl = thumbs.large || thumbs.original || thumbs.small;

  return (
    <article className="group border-base-300 bg-base-100 hover:border-accent/60 relative break-inside-avoid overflow-hidden rounded-md border shadow-sm transition-all duration-300 hover:shadow-lg">
      <button
        type="button"
        className="block w-full cursor-zoom-in! text-left"
        aria-label={`View ${category} ${purity} wallpaper in ${resolution}`}>
        <figure className="bg-base-300 aspect-3/4 overflow-hidden">
          <img
            src={getProxyImageUrl(path)}
            srcSet={`${thumbs.large} 1280w, ${thumbs.original} 780w, ${thumbs.small} 300w`}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            width={dimension_x}
            height={dimension_y}
            alt={`${category} ${purity} wallpaper preview, ${resolution}`}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
        </figure>

        {/* Top stats */}
        <div className="absolute top-0 right-0 left-0 z-10 flex justify-end gap-2 bg-linear-to-b from-black/70 via-black/30 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-black/45 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
            <Eye className="text-warning size-3.5" />
            {views.toLocaleString()}
          </span>

          <span className="inline-flex items-center gap-1.5 rounded-full bg-black/45 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
            <Heart className="text-success size-3.5" />
            {favorites.toLocaleString()}
          </span>
        </div>

        {/* Bottom description */}
        <div className="absolute inset-x-0 bottom-0 z-10 bg-linear-to-t from-black/90 via-black/45 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100">
          <div className="flex items-end justify-between gap-3">
            <div className="min-w-0 text-white">
              <p className="text-sm leading-tight font-bold">{resolution}</p>
              <p className="mt-1 text-[10px] font-semibold tracking-widest text-white/70 uppercase">
                {category} / {purity}
              </p>
            </div>

            <span className="bg-accent text-accent-content grid size-9 shrink-0 place-items-center rounded-full shadow-md">
              <Maximize2 className="size-4" />
            </span>
          </div>
        </div>
      </button>
    </article>
  );
}
