/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      mixBlendMode: {
        'color-burn': 'color-burn',
      },
      zIndex: {
        '100': '100', // Add z-100 if you need it
      },
    },
  },
  plugins: [],
}

