const ENV: string = import.meta.env.VITE_BUN_ENV;
const BASE_URL: string = import.meta.env.VITE_API_BASE_URL;
const PROD_BASE_URL: string = import.meta.env.VITE_PROD_BASE_URL;

export const getProxyImageUrl = (url: string): string => {
  if (!url) return "";

  // Base prefix based on environment
  const prefix = ENV === "production" ? PROD_BASE_URL : BASE_URL;

  // Full images: https://w.wallhaven.cc/full/... -> /api/wallhaven/full/...
  if (url.includes("w.wallhaven.cc/full")) {
    return url.replace("https://w.wallhaven.cc/full", `${prefix}/full`);
  }

  // Thumbnails: https://th.wallhaven.cc/... -> /api/wallhaven/th/...
  if (url.includes("th.wallhaven.cc")) {
    return url.replace("https://th.wallhaven.cc", `${prefix}/th`);
  }

  return url;
};
