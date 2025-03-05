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
          DEFAULT: '#6B5B95', // Soft lavender
          dark: '#4A3E6D',
        },
        secondary: {
          DEFAULT: '#F0EAD6', // Soft cream
          dark: '#D6CEB8',
        },
        accent: {
          DEFAULT: '#FF6B6B', // Soft coral
          dark: '#FF4F4F',
        },
        sage: '#C5E1A5',      // Softer, more pastel sage
        pink: '#FFB3BA',      // Soft pastel pink
        olive: '#B0CA8E',     // Softer olive
        coral: '#FFCDB2',     // Pastel coral
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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.2))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 7s ease-in-out infinite 2s',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
    },
  },
  plugins: [],
} 