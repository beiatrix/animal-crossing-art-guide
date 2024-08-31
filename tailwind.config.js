/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    colors: {
      'darkgreen': '#264653',
      'teal': '#2A9D8F',
      'green': '#57CC99',
      'lightgreen': '#C7F9CC',
      'yellow': '#E9C46A',
      'orange': '#F4A261',
      'red': '#E76F51',
      'neutral-1': '#EDEDE9',
      'neutral-2': '#D6CCC2',
      'neutral-3': '#F5EBE0',
      'neutral-4': '#E3D5CA',
      'neutral-5': '#D5BDAF',
      'earth-1': '#DAD7CD',
      'earth-2': '#A3B18A',
      'earth-3': '#588157',
      'earth-4': '#3A5A40',
      'earth-5': '#344E41'
    },
    fontFamily: {
      sans: ['Karla', 'sans-serif'],
      serif: ['Libre Baskerville', 'serif']
    },
    extend: {},
  },
  plugins: [],
}
