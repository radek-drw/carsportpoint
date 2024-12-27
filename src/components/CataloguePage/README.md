# Contact Form Component Documentation

This is a contact form component styled using Tailwind CSS. The component relies on custom theme settings in the `tailwind.config.js` and a custom autofill reset in `main.css`.

### Required Libraries:

Before using the ContactForm component, ensure the following libraries are installed:

```bash
npm install formik yup react-icons libphonenumber-js react-phone-number-input
```

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
          },
          colors: {
            customRed: "#FF0000",
            inputBorder: "#66AFE9",
          },
          boxShadow: {
            inputShadow: "0 0 8px rgba(102, 175, 233, 0.6)",
          },
        },
      },
```

- The component uses `.input-bordered` class for inputs with following styles:

```javascript
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
```

2.  **main.css**

- The autofill input fields are reset to a white background color using the following custom CSS:

```css
@layer base {
  input:-webkit-autofill {
    @apply bg-white;
    transition: background-color 5000s ease-in-out 0s;
  }
}
```

### Usage

1. Import the Contact Form component in your React file:

```javascript
import ContactForm from "./components/ContactForm"; // Adjust the path as needed
```

2. Ensure that the tailwind.config.js and main.css files are configured and included in your project to prevent any styling issues.

### Notes

- If you want to modify any of the custom theme values, simply update the tailwind.config.js file.
- The component should be used in any React project that has Tailwind CSS set up.
