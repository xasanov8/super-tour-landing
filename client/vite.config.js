import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
    proxy: {
      // During `npm run dev`, the Node/Express backend runs separately
      // (see server/) — proxy API calls to it.
      "/api": "http://localhost:4001",
    },
  },
  build: {
    outDir: "dist",
  },
});
