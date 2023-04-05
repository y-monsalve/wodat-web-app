/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      backgroundImage: {
        movingday: "url(' ./images/movingday.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
