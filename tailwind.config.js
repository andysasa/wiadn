/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'turquoise': '#93ffe0',
        'coral': '#ff6f61',
        'offwhite': '#FFFAF1',
      },
    },
  },
  plugins: [],
}