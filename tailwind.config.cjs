/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': {'min': '900px'},
      // => @media (min-width: 960px) { ... }
      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        "navy-blue": "#0c0c0c",
        "sky-blue":"#9fc5e8",
        "light-blue":"#2832c2",
        "dark-green":"#02993b",
        "light-green":"#03c04a",
        "light-purple":"#d5acd5"
      },
    },
  },
  plugins: [],
};
