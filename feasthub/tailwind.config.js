// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        homeimg1:
          "linear-gradient(to bottom, rgba(0.2,0.2,0.1,0.6), rgba(0.2,0.1,0,0.6), rgba(0.2,0.2,0,0.6), transparent) ,url('/src/assets/whitetiger.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
