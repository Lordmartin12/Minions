/** @type {import('tailwindcss').Config} */
module.exports = {
<<<<<<< HEAD
  content: ['./build/*.html'],
  theme: {
    extend: {},
=======
  content: ['./build/*.{html,js}'],
  theme: {
    extend: {
      screens: {
        'widescreen': { 'raw': '(min-aspect-ratio: 3/2'},
        'tallcreen': { 'raw': '(max-aspect-ratio: 13/20'},
      },
      keyframes:{
       ' open-menu':{
        '0%': { transform : 'scaleY(0)' },
        '80%': { transform : 'scaleY(1.2)' },
        '100%': { transform : 'scaleY(1)' },
       },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      }
    },
>>>>>>> dcaedb876e5e39eb04f47426b2ce758a0d5b6d74
  },
  plugins: [],
}

