/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        'primary': '#F9F1E7',
        'secondary': '#9F9F9F',
        'itemBg':'#F4F5F7',
        'selectedItemBg':'#3A3A3A'
      }
    },
  },
  plugins: [],
}

