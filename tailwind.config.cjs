/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        primary: {
          main: "#01959F",
          surface: "#F7FEFF",
          border: "#4DB5BC",
        },
        secondary: {
          surface: "#FFFCF5",
          border: "#FEEABC",
          pressed: "#FA9810",
        },
        danger: {
          main: "#E11428",
          border: "#F5B1B7",
          surface: "#FFFAFA",
        },
        success: {
          main: "#43936C",
          border: "#B8DBCA",
          surface: "#F8FBF9",
        },
        neutral: {
          100: "#1D1F20",
          90: "#404040",
          70: "#757575",
          40: "#E0E0E0",
          30: "#EDEDED",
          20: "#FAFAFA",
        },
        utilities: {
          fontColor: "#333333",
        },
      },
    },
  },
  plugins: [],
};
