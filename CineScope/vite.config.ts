import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },

  vite: {
    server: {
      port: 8080,      // dev
    },
    preview: {
      port: 8080,      // preview (build)
    },
  },
});
