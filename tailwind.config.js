module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'spartan': ['League Spartan', 'sans-serif']
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require("@tailwindcss/line-clamp")
  ],
}
