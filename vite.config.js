import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    proxy: {
      "/api": "http://localhost:5000",
    },

    watch: {
      ignored: [
        "**/server/**",
        "**/server/data/**",
        "**/store.json",
      ],
    },
  },
});