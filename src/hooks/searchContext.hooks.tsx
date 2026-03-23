import { useContext, createContext, type ReactNode, useState } from "react";
import useTanstackQuery from "./query.hooks";
import useTanstackForm from "./form.hooks";
import type { SearchContextType } from "../types/searchContext.types";
import type { SearchParamsType } from "../types/searchParam.types";
import type { WallhavenWallpaper } from "../types/apiResponse.types";

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<Partial<SearchParamsType>>({});
  const [modalWallpaper, setModalWallpaper] = useState<
    WallhavenWallpaper | undefined
  >(undefined);

  const form = useTanstackForm(setFilters);
  const query = useTanstackQuery(filters);

  const toggleModalWallpaper = (id: string) => {
    if (!query.data) return;

    const wallpaperData = query.data.pages.flatMap((page) => page.data);
    const wallpaperDataMap = new Map(wallpaperData.map((w) => [w.id, w]));

    if (wallpaperDataMap.has(id)) {
      setModalWallpaper(wallpaperDataMap.get(id));
    }
  };

  const clearModalWallpaper = () => {
    setModalWallpaper(undefined);
  };

  return (
    <SearchContext
      value={{
        form,
        query,
        toggleModalWallpaper,
        modalWallpaper,
        clearModalWallpaper,
      }}
    >
      {children}
    </SearchContext>
  );
}

export function UseSearchContext() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearchContext must be used within SearchProvider");
  }

  return context;
}
