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
            @import "./src/assets/styles/utils/_tailwind_config.scss";
            @import "./src/assets/styles/utils/index.scss";
            @import "./src/assets/styles/icons/icons.scss";
          `,
        ],
      },
    },
  },
});
