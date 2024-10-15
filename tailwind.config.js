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
        "Pbtn" : "#8173DA"
      },
      fontFamily: {
        'int': 'Inter'
      },
      backgroundImage:{
        'sharp-gradient': 'linear-gradient(to right, #4731D3 70%, #CBF281 30%)',
        'dark-sharp-gradient': 'linear-gradient(to right, #171043 70%, #1A210B 30%)',
        'b-sharp-gradient': 'linear-gradient(to bottom, #4731D3 70%, #CBF281 30%)',
        'b-dark-sharp-gradient': 'linear-gradient(to bottom, #171043 70%, #1A210B 30%)',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.mp': {
          'padding-top': '1.5rem',   
          'padding-bottom': '1.5rem',
          '@screen lg': {
            'padding-top': '3rem',  
            'padding-bottom': '3rem',
          },
        },
      });
      addUtilities({
        '.x-space': {
          '@apply md:space-x-24 lg:space-x-48': {},
        },
      });
    },
  ],
}