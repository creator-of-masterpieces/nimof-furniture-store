import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    assetsDir: "assets", // Указывает папку для статических файлов
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
});
