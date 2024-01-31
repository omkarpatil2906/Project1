/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sf: {'min': '240px', 'max': '380px'},
        '2xl':'1800px'
      },
      
       fontFamily:{
        Raleway:[ 'Raleway', 'sans-serif'],
        Libre:['Libre Baskerville', 'serif'],
        Playfair:['Playfair Display', 'serif'],
        Robot:['Roboto', 'sans-serif']
       }
    },
  },
  plugins: [require("daisyui")],
}

