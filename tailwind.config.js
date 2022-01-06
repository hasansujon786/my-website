const defaultTheme  = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', ...defaultTheme.fontFamily.sans],
        'roboto-mono': ['Roboto Mono', ...defaultTheme.fontFamily.mono]
      },
      colors: {
        accent: '#4E46B4'
      }
    },
  },
  plugins: [],
}
