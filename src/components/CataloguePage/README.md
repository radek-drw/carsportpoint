# Contact Form Component Documentation

This is a contact form component styled using Tailwind CSS. The component relies on custom theme settings in the `tailwind.config.js` and a custom autofill reset in `main.css`.

### Required Files:
1. **tailwind.config.js**
   - The component uses custom theme values for `inputBorder`, `inputBg`, and `inputShadow`. Make sure to include the following in your Tailwind configuration:
   
   ```javascript
   theme: {
     extend: {
       colors: {
         inputBorder: '#66AFE9',  // Example custom color
         inputBg: '#F3FBFE',      // Background color for inputs
       },
       boxShadow: {
         inputShadow: '0 0 8px rgba(102, 175, 233, 0.6)',  // Shadow for inputs on focus
       },
     },
   }
   
2. **main.css**
 - The autofill input fields are reset to a white background color using the following custom CSS:

 @layer base {
  input:-webkit-autofill {
    @apply bg-white;
    transition: background-color 5000s ease-in-out 0s;
  }
}

### Usage
1. Import the Contact Form component in your React file:

    import ContactForm from './components/ContactForm';  // Adjust the path as needed

2. Ensure that the tailwind.config.js and main.css files are configured and included in your project to prevent any styling issues.

### Notes
 - If you want to modify any of the custom theme values, simply update the tailwind.config.js file.
 - The component should be used in any React project that has Tailwind CSS set up.