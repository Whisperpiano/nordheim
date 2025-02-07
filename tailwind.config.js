const { heroui } = require("@heroui/theme");
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/(accordion|drawer|input|divider|modal|form).js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "Arial", "Helvetica Neue", "sans-serif"],
        condensed: [
          "Roboto Condensed",
          "Arial Narrow",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [heroui()],
};
