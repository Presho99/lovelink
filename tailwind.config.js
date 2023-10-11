/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainsection: '#F7F8FC',
        primary: '#F2481D',
        secondary: '#F15073',
        texts: '#A8A8A8',
        lighttext: '#FDEEF1',
        lightblack: '#1D1D1D',
        dark: '#101010',
        
      },
    },
  },
  plugins: [],
}

