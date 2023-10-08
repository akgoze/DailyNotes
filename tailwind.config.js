/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Averia Serif Libre", "cursive"],
    },
    extend: {
      colors: {
        orange: "#FF9D80",
        navy: "061737",
      },
      fontFamily: {
        sans: [
          "Averia Serif Libre",
          "cursive",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
};
