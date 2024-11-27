import { Config as TailwindConfig } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "camino-slim": ["ElCaminoSlim", "sans-serif"],
        "camino-regular": ["ElCaminoRegular", "sans-serif"],
        "camino-bold": ["ElCaminoBold", "sans-serif"],
        "camino-caps": ["ElCaminoCaps", "sans-serif"],
      },
    },
  },
  plugins: [],
} as TailwindConfig;
