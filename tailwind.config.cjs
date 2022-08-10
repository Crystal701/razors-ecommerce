/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        secondary: "Libre Baskerville"
      },
      screens: {
        "xs": "500px"
      }
    },
  },
  plugins: [],
}
