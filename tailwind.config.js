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
      'Background' : "#011627",
      'NavbarBackground' : "#011627"
    },
    backgroundImage:{
      "heroBlur" : "url('src/assets/backgrounds/BackgroundBlurs.png')",
    }
    },
  },
  plugins: [],
}