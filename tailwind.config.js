/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', 'about.html'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@egoist/tailwindcss-icons'),
  ]
}


