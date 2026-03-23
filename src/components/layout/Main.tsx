import { WallpaperResults } from "../ui/main/image-card/WallpaperResults";
import { SearchForm } from "../ui/main/search-form/SearchForm";

export function Main() {
  return (
    <>
      <main className="flex-1 px-4 py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-12">
          <SearchForm></SearchForm>
          <WallpaperResults></WallpaperResults>
        </div>
      </main>
    </>
  );
}
