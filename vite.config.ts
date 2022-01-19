import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import mpa from "@chipunderblade/vite-plugin-mpa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    mpa(),
    react(),
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "src")
      }
    ]
  }
});
