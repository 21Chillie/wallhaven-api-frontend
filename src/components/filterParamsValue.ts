import type {
  CategoryOptions,
  OrderOptions,
  PurityOptions,
  RatioType,
  ResolutionType,
  SortingOption,
} from "~/types/global.type";

export const CATEGORY_OPTIONS: CategoryOptions[] = [
  { label: "all", value: "111" },
  { label: "general", value: "100" },
  { label: "anime", value: "010" },
  { label: "people", value: "001" },
];

export const PURITY_OPTIONS: PurityOptions[] = [
  { label: "all", value: "111" },
  { label: "SFW", value: "100" },
  { label: "sketchy", value: "010" },
  { label: "NSFW", value: "001" },
];

export const SORTING_OPTIONS: SortingOption[] = [
  { label: "Date Added", value: "date_added" },
  { label: "Relevance", value: "relevance" },
  { label: "Random", value: "random" },
  { label: "Views", value: "views" },
  { label: "Favorites", value: "favorites" },
  { label: "Toplist", value: "toplist" },
];

export const ORDER_OPTIONS: OrderOptions[] = [
  { label: "Descending", value: "desc" },
  { label: "Ascending", value: "asc" },
];

export const RESOLUTION_GROUPS = {
  "16x9": ["1280x720", "1600x900", "1920x1080", "2560x1440", "3840x2160"],
  "21x9": ["2560x1080", "3440x1440", "3840x1600"],
  "16x10": ["1280x800", "1600x1000", "1920x1200", "2560x1600", "3840x2400"],
  "4x3": ["1280x960", "1600x1200", "1920x1440", "2560x1920", "3840x2880"],
  "5x4": ["1280x1024", "1600x1280", "1920x1536", "2560x2048", "3840x3072"],
} as const;

export const RATIO_OPTIONS: { label: string; value: RatioType }[] = (
  Object.keys(RESOLUTION_GROUPS) as RatioType[]
).map((val) => {
  return { label: val, value: val };
});

export const RESOLUTION_OPTIONS = (
  ratio: RatioType | null
): { label: string; value: ResolutionType }[] => {
  if (!ratio) {
    return [];
  }

  const resolutionByRatio = RESOLUTION_GROUPS[ratio];

  return resolutionByRatio.map((value) => {
    return { label: value, value };
  });
};
