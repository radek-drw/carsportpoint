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
          borderColor: "#B0B0B0",
          padding: "0.75rem",
          borderRadius: "0.375rem",
          transition: "all 0.3s ease",
          "&:focus": {
            outline: "none",
            backgroundColor: "#F7FAFC",
            borderColor: "#3182CE",
            boxShadow: "0 0 0 3px rgba(49, 130, 206, 0.4)",
          },
          "&:hover": {
            borderColor: "#3182CE",
          },
        },
      });
    },
  ],
};
