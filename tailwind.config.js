/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,ts,js}",
  ],
  theme: {
    screens: {
      'mobile': {'min':'200px','max':'427px'},
      'tablet': {'min':'427px','max':'900px'},
      'laptop': {'min':'900px'}
    },
    fontFamily: {
      'manrope':['Manrope','sans-serif'],
      'playfair':['Playfair Display','serif'],
      'chivo': ['Chivo','sans-serif'],
      'medula': ['Medula','system-ui']
    },
    colors:{},
    extend: {
      animation: {
        wiggle: 'wiggle 0.5s ease-in-out infinite',
      },
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      }
    },
  },
  plugins: [
    plugin(function({addVariant}){
      addVariant('children','&>*')
    })
  ],
}