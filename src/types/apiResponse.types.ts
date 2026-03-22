// Individual Wallpaper Object
export type WallhavenWallpaper = {
  id: string;
  url: string;
  short_url: string;
  views: number;
  favorites: number;
  source: string;
  purity: "sfw" | "sketchy" | "nsfw";
  category: "general" | "anime" | "people";
  dimension_x: number;
  dimension_y: number;
  resolution: string;
  ratio: string;
  file_size: number;
  file_type: "image/jpeg" | "image/png";
  created_at: string;
  colors: string[];
  path: string;
  thumbs: {
    large: string;
    original: string;
    small: string;
  };
};

// Metadata for Pagination and Search Context
export type WallhavenMeta = {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  query: string | null;
  seed: string | null;
};

// Root Response from /search endpoint
export type WallhavenSearchResponse = {
  data: WallhavenWallpaper[];
  meta: WallhavenMeta;
};
