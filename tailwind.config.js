/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'pink': '#da2f68',
        'clrBlack': '#04152d'
      },
      backgroundImage: {
        'Landing': 'url("../public/assets/landing.jpg")',
      },
      backgroundColor: {
        'bg-shadow': 'rgba(0,0,0,.25)',
        'bg-black': '#04152d',
        'bg-black2': '#020c1b',
        'black-light': '#173d77',
        'pink': '#da2f68',
      },
    },
  },
  plugins: [],
}
