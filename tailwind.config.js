/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'NavBarBorder': "#1E2D3D",
      'Background' : "#011627"
    },
    },
  },
  plugins: [],
}