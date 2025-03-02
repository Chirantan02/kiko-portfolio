/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)'],
        montserrat: ['var(--font-montserrat)'],
        playfair: ['var(--font-playfair)'],
      },
      colors: {
        primary: {
          DEFAULT: '#000000', // Black
          dark: '#000000',
        },
        secondary: {
          DEFAULT: '#787878', // Gray
          dark: '#505050',
        },
        accent: {
          DEFAULT: '#DC2626', // Red
          dark: '#B91C1C',
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
    },
  },
  plugins: [],
} 