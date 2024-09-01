/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    fontFamily: {
      sans: ['Work Sans', 'sans-serif'],
      serif: ['Libre Baskerville', 'serif'],
      poppins: ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        'green-1': '#D8F3DC',
        'green-2': '#B7E4C7',
        'green-3': '#95D5B2',
        'green-4': '#74C69D',
        'green-5': '#52B788',
        'green-6': '#40916C',
        'green-7': '#2D6A4F',
        'green-8': '#1B4332',
        'green-9': '#081C15'
      }
    },
  },
  plugins: [],
}
