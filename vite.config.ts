import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: false,

  base: "/alex-rivera/",

  tanstackStart: {
    spa: {
      enabled: true,
    },

    server: { entry: "server" },
  },
});