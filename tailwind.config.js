/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        navigation: ["Orbitron", "sans-serif"],
        main: ["Raleway", "sans-serif"],
      },
      colors: {
        navDesktop: "#3C4346", // desktop menu font color
        customRed: "#FF0000",
        customGrey: "#626262",
        customLight: "#FCFCFC",
        articleHead: "#20292C", // head for article's text
        articleTxt: "#A6A8A9", // article text
      },
    },
  },
  plugins: [],
};
