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
        navDesktop: "#3C4346",
        customRed: "#FF0000",
        customGrey: "#626262",
        customLight: "#FCFCFC",
        articleHead: "#20292C",
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
    function ({ addComponents, theme }) {
      addComponents({
        ".input-bordered": {
          borderWidth: "2px",
          borderColor: theme("colors.gray.300"),
          padding: theme("spacing.3"),
          borderRadius: theme("borderRadius.md"),
          backgroundColor: theme("colors.white"),
          transition: "all 0.3s ease",
          "&:focus": {
            outline: "none",
            borderColor: theme("colors.inputBorder"),
            boxShadow: theme("boxShadow.inputShadow"),
          },
          "&:hover": {
            borderColor: theme("colors.inputBorder"),
          },
        },
        "input:focus": {
          outline: "none",
        },
      });
    },
  ],
};
