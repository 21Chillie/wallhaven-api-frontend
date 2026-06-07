import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { SearchParams } from "~/types/global.type";

export type SearchParamsStore = {
  params: Partial<SearchParams>;
  apiKey: string;
};

const paramsInitialState: SearchParamsStore["params"] = {
  q: "",
  categories: "111",
  purity: "100",
  sorting: "relevance",
  order: "desc",
  ratios: undefined,
  resolutions: undefined,
  colors: undefined,
  page: 1,
};

export const useSearchParamsStore = create<SearchParamsStore>()(
  persist(
    () => ({
      params: paramsInitialState,
      apiKey: "",
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
  useSearchParamsStore.setState(() => ({ params: paramsInitialState }));
}

export function setApiKey(key: string) {
  useSearchParamsStore.setState(() => ({ apiKey: key }));
}

export function clearApiKey() {
  useSearchParamsStore.setState(() => ({
    params: paramsInitialState,
    apiKey: "",
  }));
}
