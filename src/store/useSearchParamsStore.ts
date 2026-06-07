import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { SearchParams } from "~/types/global.type";

export type SearchParamsStore = {
  params: Partial<SearchParams>;
  apiKey: string;
};

export const useSearchParamsStore = create<SearchParamsStore>()(
  persist(
    () => ({
      params: {},
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
  useSearchParamsStore.setState(() => ({ params: {} }));
}

export function setApiKey(key: string) {
  useSearchParamsStore.setState(() => ({ apiKey: key }));
}

export function clearApiKey() {
  useSearchParamsStore.setState(() => ({ apiKey: "" }));
}
