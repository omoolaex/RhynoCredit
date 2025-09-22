/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'rc-green': '#39B44A',   // Primary CTA
        'rc-ink': '#010B07',     // Dark Green/Black
        'rc-deep': '#052D1B',    // Deep Green
        'rc-paper': '#FBFCFD',   // White
      },
      fontFamily: {
        sans: ['Axiforma', 'system-ui', 'sans-serif'],        
        heading: ['Clash Display', 'Axiforma', 'sans-serif'], 
        accent: ['Ancorli Regular', 'Axiforma', 'sans-serif'],
      },
      borderRadius: {
        xl2: '1rem',
      },
      boxShadow: {
        soft: '0 8px 24px rgba(1,11,7,0.08)',
      },
      keyframes: {
        zoom: {
          '0%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        fadeInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-30px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        zoom: 'zoom 6s ease-in-out forwards',
        fadeInLeft: 'fadeInLeft 1s ease forwards',
        fadeInUp: 'fadeInUp 1s ease forwards',
      },
    },
  },
  plugins: [],
}
