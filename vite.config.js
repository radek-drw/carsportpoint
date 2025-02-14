import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/carsportpoint/",
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@common": path.resolve(__dirname, "src/components/common"),
      "@context": path.resolve(__dirname, "src/context"),
    },
  },
});
