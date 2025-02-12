/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        navigation: ["Orbitron", "sans-serif"],
        main: ["Raleway", "sans-serif"],
        form: ["Open Sans", "sans-serif"],
      },
      colors: {
        navDesktop: "#3C4346",
        customRed: "#FF0000 !important",
        customGrey: "#626262",
        customLight: "#FCFCFC",
        articleHead: "#20292C",
        articleTxt: "#A6A8A9",
        footerCustomGrey: "#ABACAC",
        inputBorder: "#66AFE9",
        inputText: "#2D3748",
      },
      boxShadow: {
        inputShadow: "0 0 8px rgba(102, 175, 233, 0.6)",
      },
      spacing: { "input-gap": "1.5rem", "mobile-padding": "7vw" },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        ".input-bordered": {
          fontFamily: theme("fontFamily.form"),
          borderWidth: "2px",
          color: theme("colors.inputText"),
          borderColor: theme("colors.gray.300"),
          padding: theme("spacing.3"),
          borderRadius: theme("borderRadius.md"),
          backgroundColor: theme("colors.white"),
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
        // BTN
        ".btn": {
          padding: `${theme("spacing.2")} ${theme("spacing.4")}`,
          borderRadius: theme("borderRadius.md"),
          backgroundColor: theme("colors.blue.500"),
          color: theme("colors.white"),
          ".blue-btn": {
            ...theme("components.btn"),
            backgroundColor: theme("colors.blue.500"),

            "&:hover": {
              backgroundColor: theme("colors.blue.600"),
            },
          },
          ".red-btn": {
            ...theme("components.btn"),
            backgroundColor: theme("colors.red.500"),

            "&:hover": {
              backgroundColor: theme("colors.red.600"),
            },
          },
        },
      });
    },
  ],
};
