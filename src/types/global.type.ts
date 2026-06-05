import type { RESOLUTION_GROUPS } from "@components/form-filter/filterParamsValue";

// Type for theme
export type Theme = "system" | "light" | "dark";

export type ThemeStore = {
  theme: Theme;
  setTheme: (selectedTheme: Theme) => void;
};

// Type for search params
export type BitFlag = `${0 | 1}${0 | 1}${0 | 1}`;

export type CategoryOptions = {
  label: "all" | "general" | "anime" | "people";
  value: BitFlag;
};

export type PurityOptions = {
  label: "all" | "sfw" | "sketchy" | "nsfw";
  value: BitFlag;
};

export type SortingOption = {
  label: string;
  value:
    | "date_added"
    | "relevance"
    | "random"
    | "views"
    | "favorites"
    | "toplist";
};

export type OrderOptions = {
  label: string;
  value: "asc" | "desc";
};

export type RatioType = keyof typeof RESOLUTION_GROUPS;

export type ResolutionType = (typeof RESOLUTION_GROUPS)[RatioType][number];

export type SearchParams = {
  q: string;
  categories: CategoryOptions["value"];
  purity: PurityOptions["value"];
  sorting: SortingOption["value"];
  order: OrderOptions["value"];
  ratios: RatioType;
  resolutions: ResolutionType;
  colors: string;
  page: number;
};
