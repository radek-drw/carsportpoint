# Contact Form Component Documentation (Built with React and Tailwind CSS)

This is a contact form component styled using Tailwind CSS. The component relies on custom theme settings in the `tailwind.config.js` and a custom autofill reset in `main.css`.

### Required Libraries:

Before using the ContactForm component, ensure the following libraries are installed:

```bash
npm install react formik yup react-icons libphonenumber-js react-phone-number-input tailwindcss
```

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework used to style the form.
- **Formik**: A library for handling form state and validation in React.
- **Yup**: A JavaScript schema builder for validation.
- **React Icons**: Provides customizable icons for React.
- **libphonenumber-js**: A library to parse, format, and validate international phone numbers.
- **react-phone-number-input**: A React component for international phone number input fields.

### Required Files:

1.  **tailwind.config.js**

- The component uses custom theme values. Make sure to include the following in Tailwind configuration:

```javascript
      theme: {
        extend: {
          fontFamily: {
            main: ["Raleway", "sans-serif"],
            form: ["Open Sans", "sans-serif"],
          },
          colors: {
            customRed: "#FF0000",
            inputBorder: "#66AFE9",
            inputText: "#2D3748",
          },
          boxShadow: {
            inputShadow: "0 0 8px rgba(102, 175, 233, 0.6)",
          },
          transitionDuration: {
          default: "300ms",
          },
        },
      },
```

- **Raleway and Open Sans Font Family**: The Raleway font is used for the main text (head, labels, buttons) and Open Sans isused for input text. Make sure to include both fonts in the `head` section of `index.html`.

```bash
  <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Orbitron&family=Raleway:wght@100..900&display=swap"
      rel="stylesheet"
  />
```

- The component uses `.input-bordered` class for inputs with following styles. Make sure to include the following in Tailwind configuration:

```javascript
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
              transition: `all ${theme("transitionDuration.default")} ease`,
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
```

2.  **main.css**

- The autofill input fields are reset to a white background color and custom font color using the following custom CSS:

```css
@layer base {
  input:-webkit-autofill {
    @apply bg-white;
    -webkit-text-fill-color: theme("colors.inputText");
    transition: background-color 5000s ease-in-out 0s;
  }
}
```

### Usage

1. Import the Contact Form component in your React file:

```javascript
import ContactForm from "./components/ContactForm"; // Adjust the path as needed
```

2. Ensure that the tailwind.config.js and main.css files are configured and included in the project to prevent any styling issues.

### Notes

- If you want to modify any of the custom theme values, simply update the tailwind.config.js file.
- The component should be used in any React project that has Tailwind CSS set up.
