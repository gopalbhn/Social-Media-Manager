/** @type {import('tailwindcss').Config} */


module.exports = {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        '3xl':'0px 0px 50px 5px rgba(0,0,0,0.1)'
      }
    },
  },
  plugins: [],
}

