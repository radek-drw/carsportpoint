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

Added ARIA attributes to form components and navigation items for improved accessibility. For forms, attributes like aria-invalid, aria-describedby, aria-required, and aria-labelledby enhance navigation for assistive technologies. In the NavItem component, aria-current="page" indicates the active page for better navigation interaction

## 5. Image optimization and implementation

All images on the site are in WebP format, with <picture> and <source> used to provide fallback image in JPG to support browsers that do not support WebP. The <picture> element also enables responsive images to load based on the screen size. To streamline this functionality I created a custom ResponsiveImage component that accepts the following props:

- sources: an array of WebP image sources with breakpoints
- fallback: the JPEG fallback source
- alt: a description for accessibility
- lazy: controls lazy loading (default is false but can be set to true for off-screen images)

- **Responsive Image Breakpoints**
  The breakpoints defined for loading images of appropriate resolutions are:
  - max-width: 480px
  - max-width: 640px
  - max-width: 768px
  - min-width: 1280px

For partner logos on the "Partners" page, the images have a fixed width of 240px. Since these are small and static, responsive sources are not necessary.

## 6. Logo Component

- **Props:** The Logo component accepts the following props:
  - isClickable: Determines if the logo should be clickable. It accepts values true or false.
  - className: Allows for custom styling of the logo.
  - onClick: A function to handle click events when isClickable is true.
- **Usage in Navbar:**
  - The logo is clickable and redirects the user to the 'home' page ('/').
- **Usage in Footer:**
  - The logo is not clickable and serves only as a visual element.

## 7. Vite Integration in the Project

The project uses Vite for its speed, performance, and simpler configuration compared to Webpack.
Reasons to use Vite:

- Faster development startup – utilizes native ES modules and Hot Module Replacement (HMR) for instant updates.
- Optimized build process – pre-bundles dependencies with esbuild, making builds significantly faster.
- Path aliasing – allows for cleaner and more manageable imports.

## TODO

- determine if the logo should be a separate component - DONE
- establish a naming convention for images - DONE
- add padding to the 'About' page
- fix nav routing - DONE
- update Contact Form documentation
- add aria to contact form - DONE
- make more maintainable SUPPORTED_FORMATS
- use Vite - DONE
- write documentation for Companies list integrated with Google Maps
- write documentation about Admin panel
- write documentation about AWS and its key services like Amplify, DynamoDB, S3, API Gateway, and Lambda
- add loading animation to companies list, map and images
- add documentation about scripts 'deploy' in /backend
- added loading state in CompanyList and Google Maps
- function that requires sending node_modules to Lambda due to the use of uuid package
- check in S3 bucket 'company-images-bucket-csp' for images (purpose)

## KEYS

- shorten UUID to first 8 characters in file upload key for better readability
- validateProps in ContactForm
- animation effect while loading company data on catalagoue page (react-loading-skeleton)
- when a user uploads files with unsafe characters in their names, the frontend uses a custom sanitizeFileName method to clean them — making the names safe for uploading (e.g., to S3)
- add loading companies data and google maps only when become visible on screen (save fetching data requests)
- HARDEST PART IS SYNCHRONIZE FORM VALIDATION WITIH FRONTEND AND BACKEND
- find out what is 'npm workspace'

# BEFORE HOLIDAY

**what I have done**
zaczalem robic walidacje po stronie backendu, moim celem bylo skorzystac z tgego samego pliku walidacyjnego (validationSchema) z którego korzysta front end więc musiałem dokonać sporo zmian w strukturze miedzy innymi. A więc tak: stwprzyłem w katalogu głównym katalgi frontend, backend i shared. z frontendu przeniosłem validationSchema do shared tak aby backend mógł go też widzieć. z frontendu usunąłem yup i libphonenumber-js i zainstalowałęm je w katalogu głównym (jeśli front end bedzie potrzebowal tych zależności kiedys to sobie znajdzie w katalogu nadrzędnym). do katalogu shared przeniosłem defaultConfig tak żeby validation miał go blisko i wszystko było bardziej logiczne i maintainable. w ContactForm dodałem do payload customConfig tak żeby backend lambda go widział. w backendzie sendCOntactForm customConfig jest odbierany i od razu przekazywany do validationSchrma do procesu walidacji, formData tak samo. test-sendContactForm dostaje fakowe dane w celach testowych lokalnie, razem z customConfig fakeowym i to działa.

**what to do**

- sprawdzic w lambdzie aws w konsoli czy rzeczywiście jest przesyłany customCOnfig (console.log)
- jest problem z walidacją numeru telefonu (pokazuje invalid phone number - problem jest w context.parent.country w validationSchema, ale ze tam dane sa przekazywane dynamicznie to nie mozna tego zmieniac)
- npm workspace wykonac
- uzyc bundlera (esbuild) do backendu 'sendContactForm' w celu zbundlowania validationSchema ale zaleznosci takie jak yup i libphonenumber-js nie bundlowac (lambda skorzysta w lambda-layers)
- dodac api's do index.js
