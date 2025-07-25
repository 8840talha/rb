/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cormorant Merriweather', 'serif'],
        body: ['Cormorant Merriweather', 'sans-serif'],
      },
    },
  },
  plugins: [],
}