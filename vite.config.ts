import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), cloudflare()],
  server: {
    proxy: {
      "/api/wallhaven": {
        target: "https://wallhaven.cc/api/v1",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/wallhaven/, ""),
      },
    },
    allowedHosts: true,
  },
});