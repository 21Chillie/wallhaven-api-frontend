import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
  resolve: {
    tsconfigPaths: true,
  },
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
