import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@enums": path.resolve(__dirname, "src/enums"),
      "@i18n": path.resolve(__dirname, "src/i18n"),
      "@layout": path.resolve(__dirname, "src/layout"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@sections": path.resolve(__dirname, "src/sections"),
      "@theme": path.resolve(__dirname, "src/theme"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
});
