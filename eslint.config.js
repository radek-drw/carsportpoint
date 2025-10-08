import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // ✅ Twoje podstawowe reguły
      "no-unused-vars": "warn",
      "no-undef": "error",
      "no-console": "off",
      "react/react-in-jsx-scope": "off", // niepotrzebne w React 17+
      "react/prop-types": "off", // wyłączone jeśli nie używasz PropTypes
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
