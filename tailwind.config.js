/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cormorant': ['Cormorant Garamond', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#C9A55A',
          hover: '#B89550',
        },
        background: '#FAFAF8',
        dark: '#2C2C2C',
        text: '#333333',
      },
    },
  },
  plugins: [],
}