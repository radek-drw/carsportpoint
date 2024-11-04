/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        navigation: ["Orbitron", "sans-serif"],
        primary: ["Raleway", "sans-serif"],
      },
      colors: {
        navDesktop: "#3C4346",
        primaryRed: "#FF0000",
        customGrey: "#626262",
        customLight: "#FCFCFC",
      },
      height: {
        600: "600px",
      },
    },
  },
  plugins: [],
};
