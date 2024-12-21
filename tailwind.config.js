/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00BAF2',
        secondary: '#002E6E',
        accent: '#F7931A'
      }
    },
  },
  plugins: [],
}