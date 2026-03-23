import useTanstackForm from "../hooks/form.hooks";
import useTanstackQuery from "../hooks/query.hooks";
import type { WallhavenWallpaper } from "./apiResponse.types";

export type useTanstackFormReturnType = ReturnType<typeof useTanstackForm>;
export type useTanstackQueryReturnType = ReturnType<typeof useTanstackQuery>;

export type SearchContextType = {
  form: useTanstackFormReturnType;
  query: useTanstackQueryReturnType;
  toggleModalWallpaper: (id: string) => void;
  modalWallpaper?: WallhavenWallpaper;
  clearModalWallpaper: () => void;
};
