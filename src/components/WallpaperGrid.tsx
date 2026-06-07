import type { WallhavenWallpaper } from "~/types/apiResponse.type";
import WallpaperCard from "./WallpaperCard";

export default function WallpaperGrid({wallpapers}: {wallpapers: WallhavenWallpaper[]}) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {wallpapers.map((w) => {
        return <WallpaperCard key={w.id} wallpaper={w} />;
      })}
    </div>
  );
}
