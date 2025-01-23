# Project Notes: Slider and Form Features

## 1. Slider on the 'Home' Page

- **Technologies Used:**

  - `swiper` - for image slides.
  - `react-spring/web` - for text animations.
  - `mui/material` - for the progress bar.

- **Slider Configuration (config.js):**

  - Adjustable slide duration:
    - Used in text animation and progress bar animation.
    - Includes a ratio for the duration of the first and second slides.

- **Text Animation and Progress Bar:**
  - Both the progress bar and text animations use the slideDuration time as the base.
  - The text animations have their own specific ratios relative to the slideDuration:
    - The first text appears for 28% of the slideDuration time.
    - The second text appears for 17% of the slideDuration time.
  - As a result, when the slideDuration is changed, the text animation times adjust automatically according to these ratios, without needing to manually adjust them.

---

## 2. Counter on the 'Tuning' Page

- **Library Used:** `react-countup` - for counter animation.
- **Visibility Detection:** `react-intersection-observer` - detects when the counter is visible on the screen.

---

## 3. Contact Form

- **File Validation:**

  - **Libraries:** `formik` and `yup` - for form validation.
  - **Supported File Types:** `.jpg, .jpeg, .png, .gif, .pdf, .doc, .docx, .txt`.
  - **Maximum File Size:** 5 MB.
  - **Maximum Number of Files:** 5.
  - **Features:**
    - Validation messages for incorrect files (red and crossed-out filenames).
    - Correct files are highlighted in green.
    - Uploaded files are displayed as a list with their sizes and a **Remove** button.
    - The "Submit" button is disabled when the file limit is reached:
      - The text changes dynamically to "File Limit Reached."
      - The upload button becomes gray, and the cursor changes to indicate it is not clickable.
    - When an invalid file type is added, a tooltip appears next to the file name, displaying a message with the supported file formats.

- **Field Validation:**

  - **Name:**
    - Length: The name cannot exceed 50 characters. If it does, the error message will be shown.
  - **Phone Number:**
    - Uses `react-phone-number-input` and `libphonenumber-js` for formatting and validation based on the selected country.
    - An error message is displayed if the phone number is not in the correct format.
  - **Email:**
    - The field is marked as required and displays an error if left empty
    - The email must follow a valid email format (e.g., user@example.com). Invalid formats trigger the error message
    - The email cannot exceed 320 characters, as per email standards. If the length exceeds this limit, the error message will be shown.
  - **Subject:**
    - The subject cannot exceed 100 characters. If it does, the error message will be shown.
  - **Message:**
    - The field is marked as required and displays an error if left empty.
    - The description cannot exceed 1000 characters. If it does, the error message will be shown.

---

## 4. ARIA attributes are added for screen reader accessibility

## 5. Logo Component

- **Props:** The Logo component accepts the following props:
  - isClickable: Determines if the logo should be clickable. It accepts values true or false.
  - className: Allows for custom styling of the logo.
  - onClick: A function to handle click events when isClickable is true.
- **Usage in Navbar:**
  - The logo is clickable and redirects the user to the 'home' page ('/').
- **Usage in Footer:**
  - The logo is not clickable and serves only as a visual element.

## TODO

- determine if the logo should be a separate component.
- establish a naming convention for images.
- add padding to the 'About' page.
- fix nav routing
- update Contact Form documentation
- add aria to contact form - DONE
- make more maintainable SUPPORTED_FORMATS

**Code to check if the correct image is loaded**
useEffect(() => {
const handleResize = () => {
const picture = document.querySelector("picture");
const img = picture.querySelector("img");
console.log(`Loaded image: ${img.currentSrc}`);
};
window.addEventListener("resize", handleResize);
handleResize();
return () => {
window.removeEventListener("resize", handleResize);
};
}, []);
