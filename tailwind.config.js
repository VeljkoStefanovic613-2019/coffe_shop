/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        sans: ["Poppins", "sans-serif"],
        cursive: ["Pacifico", "cursive"],
      },
      colors:{
        primary: "#854d3d",
        secondary: "#4a1e1b",
        brandDark: "#270c03",

      },
      container: {
        center: true,
        padding:{
          DEFAULT: "1rem",
          sm: "2rem",
         
        },
      },
    },
  },
  plugins: [],
}