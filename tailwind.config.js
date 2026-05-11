/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Geist Variable', 'Geist', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // True-black dark mode canvas colors
        canvas: {
          950: '#0a0a0a', // primary dark page background
          900: '#0d0d0d', // alternate section background (slight tint)
          800: '#111111', // slightly elevated surfaces (e.g. current-role card)
        },
      },
    },
  },
  plugins: [],
}