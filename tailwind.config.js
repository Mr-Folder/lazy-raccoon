/** @type { import('tailwindcss').Config } */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#121212',
        'light-grey': '#E0E0E0',
        'light-white': '#FAFAFA'
      },
      fontFamily: {
        feijoa: 'feijoa',
      }
    },
  },
  plugins: [],
}
