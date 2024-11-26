import { defineConfig } from "vite";

import MillionLint from "@million/lint";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    MillionLint.vite({
      enabled: false,
    }),
    react(),
  ],
});
