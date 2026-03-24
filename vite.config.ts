import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api/wallhaven/full": {
        target: "https://w.wallhaven.cc/full",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/wallhaven\/full/, ""),
        headers: {
          Referer: "https://wallhaven.cc/",
        },
      },
      "/api/wallhaven": {
        target: "https://wallhaven.cc/api/v1",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/wallhaven/, ""),
      },
      "/api/th": {
        target: "https://th.wallhaven.cc",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/th/, ""),
      },
    },
    allowedHosts: true,
  },
});
