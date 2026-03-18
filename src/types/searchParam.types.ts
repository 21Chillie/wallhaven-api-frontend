import { RESOLUTION_GROUPS } from "../components/ui/main/search-form/filterParameterValues";

// Filter Params
export type BitFlagType = `${0 | 1}${0 | 1}${0 | 1}`;

export type CategoryOrPurityParamType = {
  label: string;
  value: BitFlagType;
};

export type SearchParamsType = {
  apiKey?: string;
  q?: string;
  categories?: BitFlagType;
  purity?: BitFlagType;
  sorting?:
    | "date_added"
    | "relevance"
    | "random"
    | "views"
    | "favorites"
    | "toplist";
  order?: "desc" | "asc";
  ratios?: keyof typeof RESOLUTION_GROUPS;
  resolutions?: (typeof RESOLUTION_GROUPS)[keyof typeof RESOLUTION_GROUPS][number];
  colors?: string;
  page?: number;
};
