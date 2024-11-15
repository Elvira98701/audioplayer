import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@scripts": "/src/scripts",
      "@styles": "/src/styles",
      "@assets": "/src/assets",
    },
  },
});
