import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2d5a27",
          light: "#3d7a35",
          dark: "#1e3d1a",
        },
        gold: {
          DEFAULT: "#c9a84c",
          light: "#e0c56a",
        },
        cream: "#faf7f0",
        warm: "#f5f0e8",
        brown: {
          DEFAULT: "#6b4a2e",
          light: "#8b6a4e",
        },
      },
      fontFamily: {
        arabic: ['"Noto Kufi Arabic"', '"Readex Pro"', "sans-serif"],
        body: ['"Readex Pro"', '"Noto Kufi Arabic"', "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;