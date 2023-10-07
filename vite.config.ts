import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: [
          `
            @import "./src/assets/stylesheets/utils/_tailwind_config.scss";
            @import "./src/assets/stylesheets/utils/index.scss";
          `,
        ],
      },
    },
  },
});
