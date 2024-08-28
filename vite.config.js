import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import alias from "@rollup/plugin-alias";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [alias(), react()],
  resolve: {
    alias: {
      "/@": path.resolve(__dirname, "./src"),
    },
  },
});
