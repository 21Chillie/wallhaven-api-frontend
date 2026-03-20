import { RESOLUTION_GROUPS } from "../components/ui/main/search-form/filterParameterValues";

// Filter Params
export type BitFlagType = `${0 | 1}${0 | 1}${0 | 1}`;

export type CategoryOrPurityParamType = {
  label: string;
  value: BitFlagType;
};

export type SortingOptionType =
  | "date_added"
  | "relevance"
  | "random"
  | "views"
  | "favorites"
  | "toplist";

export type OrderOptionType = "desc" | "asc";

export type RatioKeyType = keyof typeof RESOLUTION_GROUPS;

export type ResolutionValueType =
  (typeof RESOLUTION_GROUPS)[RatioKeyType][number];

export type SearchParamsType = {
  apiKey: string;
  q: string;
  categories: CategoryOrPurityParamType;
  purity: CategoryOrPurityParamType;
  sorting: SortingOptionType;

  order: OrderOptionType;
  ratios: RatioKeyType;
  resolutions: ResolutionValueType;
  colors: string;
  page: number;
};
