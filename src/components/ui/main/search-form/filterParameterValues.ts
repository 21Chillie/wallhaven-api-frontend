import type { CategoryOrPurityParamType } from "../../../../types/searchParam.types";

export const CATEGORY_OPTIONS: CategoryOrPurityParamType[] = [
  { label: "All", value: "111" },
  { label: "General", value: "100" },
  { label: "Anime", value: "010" },
  { label: "People", value: "001" },
];

export const PURITY_OPTIONS: CategoryOrPurityParamType[] = [
  { label: "All", value: "111" },
  { label: "SFW", value: "100" },
  { label: "Sketchy", value: "010" },
  { label: "NSFW", value: "001" },
];

export const RESOLUTION_GROUPS = {
  "16x9": ["1280x720", "1600x900", "1920x1080", "2560x1440", "3840x2160"],
  "21x9": ["2560x1080", "3440x1440", "3840x1600"],
  "16x10": ["1280x800", "1600x1000", "1920x1200", "2560x1600", "3840x2400"],
  "4x3": ["1280x960", "1600x1200", "1920x1440", "2560x1920", "3840x2880"],
  "5x4": ["1280x1024", "1600x1280", "1920x1536", "2560x2048", "3840x3072"],
} as const;

export const SORTING_OPTIONS = [
  { label: "Date Added", value: "date_added" },
  { label: "Relevance", value: "relevance" },
  { label: "Random", value: "random" },
  { label: "Views", value: "views" },
  { label: "Favorites", value: "favorites" },
  { label: "Toplist", value: "toplist" },
] as const;

export const ORDER_OPTIONS = [
  { label: "Descending", value: "desc" },
  { label: "Ascending", value: "asc" },
] as const;
