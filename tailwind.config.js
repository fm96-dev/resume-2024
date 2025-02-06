/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '**/components/*.{vue,js,ts,jsx,tsx}',
    '**/utils/*.{vue,js,ts,jsx,tsx}',
    './node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}'
  ],

  theme: {
    container: {
      padding: '0 1rem',
      center: true
    },
    extend: {}
  },

  plugins: []
}
