/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      garamond: ["EB Garamond", "serif"],
    },
    extend: {
      backgroundImage: (theme) => ({
        bg: "url('/bg.svg')",
      }),
      zIndex: {
        "-10": "-10"
      }
    },
  },
  plugins: [],
}

