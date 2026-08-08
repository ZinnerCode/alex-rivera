import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "node:path";

export default defineConfig({
  base: "/alex-rivera/",

  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],

  build: {
    outDir: "dist/github",
    emptyOutDir: true,

    rollupOptions: {
      input: resolve(__dirname, "index.github.html"),
    },
  },
});