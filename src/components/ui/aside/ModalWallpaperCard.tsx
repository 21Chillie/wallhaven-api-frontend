import { Activity } from "react";
import { UseSearchContext } from "../../../hooks/searchContext.hooks";
import { FaArrowLeft, FaInfo } from "react-icons/fa";

export function ModalWallpaperCard() {
  const { clearModalWallpaper, modalWallpaper } = UseSearchContext();

  if (!modalWallpaper) return null;

  const {
    short_url,
    views,
    favorites,
    source,
    resolution,
    file_type,
    path,
    thumbs,
  } = modalWallpaper;

  return (
    <>
      <aside className="bg-base-300/60 fixed inset-0 z-10 grid place-items-center p-4 backdrop-blur-md transition-opacity">
        <div className="bg-base-300 mx-auto max-w-3xl rounded-lg">
          {/* Top Bar: Actions */}
          <div className="flex justify-between gap-2 p-4">
            <button
              className="text-base-content/60 active:text-base-content hover:text-base-content flex items-center gap-2 transition-colors"
              type="button"
              onClick={clearModalWallpaper}
            >
              <span>
                <FaArrowLeft></FaArrowLeft>
              </span>
              Go back
            </button>

            <Activity mode="hidden">
              <button
                className="btn btn-primary px-3 py-1.5 text-sm"
                type="button"
              >
                Download
              </button>
            </Activity>
          </div>

          {/* Main Image Stage */}
          <figure className="bg-base-100 relative flex justify-center p-2 md:p-6">
            <img
              loading="eager"
              fetchPriority="high"
              decoding="async"
              src={path || thumbs.large}
              alt={`Full wallpaper preview at ${resolution}`}
              className="max-h-[75vh] w-auto object-contain shadow-lg"
            />

            <div className="tooltip tooltip-left absolute top-8 right-8">
              <div className="tooltip-content">
                <p className="text-base-content/60">
                  Wallpaper provided by{" "}
                  <span className="text-base-content underline">
                    {source || "wallhaven.cc"}
                  </span>
                </p>
              </div>

              <a
                href={short_url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open wallpaper details in a new tab"
                type="button"
                className="btn btn-circle btn-sm shadow-sm"
              >
                <span>
                  <FaInfo></FaInfo>
                </span>
              </a>
            </div>
          </figure>

          {/* Bottom Bar: Stats */}
          <div className="bg-base-300 grid grid-cols-2 gap-4 rounded-b-lg p-6 md:grid-cols-4">
            <Activity mode={views ? "visible" : "hidden"}>
              <div>
                <p className="text-base-content/50 text-xs uppercase">Views</p>
                <p className="font-semibold">{views}</p>
              </div>
            </Activity>

            <Activity mode={favorites ? "visible" : "hidden"}>
              <div>
                <p className="text-base-content/50 text-xs uppercase">
                  Favorites
                </p>
                <p className="font-semibold">{favorites}</p>
              </div>
            </Activity>

            <Activity mode={resolution ? "visible" : "hidden"}>
              <div>
                <p className="text-base-content/50 text-xs uppercase">
                  Resolution
                </p>
                <p className="font-semibold">{resolution}</p>
              </div>
            </Activity>

            <Activity mode={file_type ? "visible" : "hidden"}>
              <div>
                <p className="text-base-content/50 text-xs uppercase">
                  File Type
                </p>
                <p className="font-semibold">{file_type}</p>
              </div>
            </Activity>
          </div>
        </div>
      </aside>
    </>
  );
}
