export const getProxyImageUrl = (url: string): string => {
  if (!url) return "";

  // Base prefix based on environment
  const prefix = "/api/wallhaven";

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
