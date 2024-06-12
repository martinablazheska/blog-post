/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        yellow: "hsl(47, 88%, 63%)",
        white: "#FFFFFF",
        grey: "hsl(0, 0%, 50%)",
        black: "hsl(0, 0%, 7%)",
      },
      fontFamily: {
        sans: ["'Figtree', sans-serif"],
      },
      boxShadow: {
        box: "#000000 10px 5px",
      },
    },
  },
  plugins: [],
};
