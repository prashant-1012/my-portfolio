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
      boxShadow: {
        'glow-sm': '0 0 0 1px rgba(52,211,153,0.08), 0 4px 24px rgba(52,211,153,0.10)',
        'glow':    '0 0 0 1px rgba(52,211,153,0.20), 0 0 40px rgba(52,211,153,0.18)',
        'glow-lg': '0 0 0 1px rgba(52,211,153,0.28), 0 0 60px rgba(52,211,153,0.22)',
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