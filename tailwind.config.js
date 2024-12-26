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
        inputBorder: "#66AFE9",
        inputBg: "#F3FBFE",
      },
      boxShadow: {
        inputShadow: "0 0 8px rgba(102, 175, 233, 0.6)",
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
            backgroundColor: "theme('colors.inputBg')",
            borderColor: "theme('colors.inputBorder')",
            boxShadow: "theme('boxShadow.inputShadow')",
          },
          "&:hover": {
            borderColor: "theme('colors.inputBorder')",
          },
        },
        "input:focus": {
          outline: "none",
          backgroundColor: "theme('colors.inputBg')",
        },
      });
    },
  ],
};
