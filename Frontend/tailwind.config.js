/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ebb61f',
        secondery: '#eab218ff',
      },
      fontFamily: {
        sans: ['Nexa', 'sans-serif'],
      },
      keyframes: {
        bounce: {
          '0%, 75%, 100%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        bounce: 'bounce 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
// tailwind.config.js
 