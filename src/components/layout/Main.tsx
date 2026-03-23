import { WallpaperResults } from "../ui/main/image-card/WallpaperResults";
import { SearchForm } from "../ui/main/search-form/SearchForm";

export function Main() {
  return (
    <>
      <main className="flex-1 px-4 py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-12">
          <section aria-label="Wallpaper search introduction">
            <p className="text-base-content/70 max-w-2xl text-sm md:text-base">
              Find high-resolution wallpapers by keyword and refine results by
              category, ratio, purity, and resolution.
            </p>
          </section>
          <SearchForm></SearchForm>
          <WallpaperResults></WallpaperResults>
        </div>
      </main>
    </>
  );
}
