import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { SearchParams } from "~/types/global.type";

type SearchParamsStore = {
  params: Partial<SearchParams>;
};

export const useSearchParamsStore = create<SearchParamsStore>()(
  persist(
    () => ({
      params: {},
    }),
    { name: "search-params-store" }
  )
);

export function setParams(newParams: Partial<SearchParams>) {
  // Set params but not include falsy values
  const params = Object.fromEntries(
    Object.entries(newParams).filter(([_, val]) => val)
  ) as Partial<SearchParams>;

  useSearchParamsStore.setState(() => ({ params: params }));
}

export function clearParams() {
  useSearchParamsStore.setState(() => ({ params: {} }));
}
