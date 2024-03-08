/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fy': '#CBF281',
        'mv': '#4731D3',
        'btn': '#3730A3',
        'darkMv': "#171043",
        'darkFy': "#1A210B",
      },
      fontFamily: {
        'int': 'Inter'
      }
    },
  },
  plugins: [],
}