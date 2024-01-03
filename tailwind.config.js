/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,ts,js}",
  ],
  theme: {
    fontFamily: {
      'manrope':['Manrope','sans-serif']
    },
    colors:{},
    extend: {},
  },
  plugins: [
    plugin(function({addVariant}){
      addVariant('children','&>*')
    })
  ],
}