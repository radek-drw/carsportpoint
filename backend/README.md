## 🚀 Functions

### 1. `sendContactForm`

- **Location**: `functions/sendContactForm.mjs`
- **Description**:
  - Sends an email with contact form details (name, email, message, file links) using AWS SES
- **Test Purpose**:
  - Can be run locally to test backend logic independently of the frontend and without deploying to AWS Lambda
- **Run Test**:

```bash
npm run test:sendContactForm
```

- **Deploy Function to AWS Lambda**:

```bash
npm run deploy:sendContactForm
```

### 2. `saveCompanyDetails`

- **Location**: `functions/saveCompanyDetails.mjs`
- **Description**:
  - Function collects data from an admin form and saves it to DynamoDB database
- **Test Purpose**:
  - Used to test backend logic locally by simulating a form submission and sending real data to DynamoDB, without running the frontend
- **Run Test**:

```bash
npm run test:saveCompanyDetails
```

- **Deploy Function to AWS Lambda**:

```bash
npm run deploy:saveCompanyDetails
```

### 3. `getCompanies`

- **Location**: `functions/getCompanies.mjs`
- **Description**:
  - Function retrieves company data from the DynamoDB database when a user navigates to the corresponding page
- **Test Purpose**:
  - Used to test retrieving company data from DynamoDB locally, logging the response to the terminal to verify structure — no frontend required
- **Run Test**:

```bash
npm run test:getCompanies
```

- **Deploy Function to AWS Lambda**:

```bash
npm run deploy:getCompanies
```

### 4. `uploadFilesToS3`

- **Location**: `functions/uploadFilesToS3.mjs`
- **Description**:
  - Handles file uploads from the contact form (cataloguePage) to an S3 bucket. It accepts multipart form data, uploads files, and returns URLs for the uploaded files
- **Test Purpose**:
  - Can be run locally to test file upload functionality independently of the frontend and without deploying to AWS Lambda
- **Run Test**:

```bash
npm run test:uploadFilesToS3
```

- **Deploy Function to AWS Lambda**:

```bash
npm run deploy:uploadFilesToS3
```
