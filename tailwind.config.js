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
        articleTxt: "#A6A8A9",
        footerCustomGrey: "#ABACAC",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".input-bordered": {
          borderWidth: "2px",
          borderColor: "#D1D5DB",
          padding: "0.75rem",
          borderRadius: "0.375rem",
          backgroundColor: "#FFFFFF",
          transition: "all 0.3s ease",
          "&:focus": {
            outline: "none",
            backgroundColor: "#e9f7fd",
            borderColor: "#66afe9",
            boxShadow: "0 0 8px rgba(102, 175, 233, .6)",
          },
          "&:hover": {
            borderColor: "#66afe9",
            backgroundColor: "#e9f7fd",
          },
        },
      });
    },
  ],
};
