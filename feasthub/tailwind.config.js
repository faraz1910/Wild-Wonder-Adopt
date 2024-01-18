/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'homeimg1': "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.8), rgba(0,0,0,0.5), transparent) ,url('/src/assets/homeimg1.jpg')"
      }
    },
  },
  plugins: [],
}

