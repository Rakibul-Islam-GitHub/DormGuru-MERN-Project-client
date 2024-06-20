/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '10-50': '10% / 50%',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}