/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fy': '#CBF281',
        'mv': '#4731D3'
      },
      fontFamily: {
        'ınt': 'Inter'
      }
    },
  },
  plugins: [],
}