/** @type { import('tailwindcss').Config } */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base Colors
        'dark': '#121212', // Pure black or dark background
        'light-grey': '#E0E0E0',
        'light-white': '#FAFAFA',
        // Pure black
        "black": "#000000",
        "dark-1": "#0A0A0A",
        "dark-2": "#0E0E0E",
        "dark-3": "#161616",
        "dark-4": "#2B2B2B",
        // Neon Colors
      },
      fontFamily: {
        feijoa: 'feijoa',
      },
    },
  },
  plugins: [],
}
