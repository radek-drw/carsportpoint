## 🚀 Functions

### 1. `sendContactForm`

- **Location**: `functions/sendContactForm.mjs`
- **Purpose**:
  - Sends an email notification when a user submits a contact form
  - Includes details like Name, Email, Phone, Subject, Message, and File Attachments
  - Uses **AWS SES** for email delivery
  - Files are assumed to be hosted on **Amazon S3** and include download links

### 2. `saveCompanyDetails`

- **Location**: `functions/saveCompanyDetails.mjs`
- **Purpose**:
  - Includes fields like Name, Address, Phone, Opening Hours, and Image URLs
  - Uses Amazon DynamoDB for data storage
  - Each entry is assigned a unique ID using UUID v4
  - Image URLs are stored as a list of strings in DynamoDB

### 3. `getCompanies`

- **Location**: `functions/getCompanies.mjs`
- **Purpose**:
  - Uses a ScanCommand to fetch all items from the 'companies' table
  - Converts DynamoDB format to standard JSON using unmarshall
  - Returns a JSON response with all stored company details

## 🧪 Tests

Each backend function has an associated test file that ensures the function works as expected. Tests are located in the `tests/` folder.

### 1. `test-sendContactForm.js`

- **Location**: `tests/test-sendContactForm.js`
- **Purpose**:
  - Run backend functions locally before deploying them to AWS Lambda (sends real e-mail)
  - Verify that backend logic works correctly without having to run the frontend
  - Simulates a contact form submission with data and file links
  - Verifies the function behaves correctly (logs the status and response)
- **Run Test**:

```bash
npm run test:sendContactForm
```

- **Deploy Function**:

```bash
npm run deploy:sendContactForm
```

### 2. `test-saveCompanyDetails.js`

- **Location**: `tests/test-saveCompanyDetails.js`
- **Purpose**:
  - Run backend functions locally before deploying them to AWS Lambda
  - Simulates a real backend request without running the frontend or submitting the form
  - Sends actual data to DynamoDB for testing purposes
- **Run Test**:

```bash
npm run test:saveCompanyDetails
```

- **Deploy Function**:

```bash
npm run deploy:saveCompanyDetails
```

### 3. `test-getCompanies.js`

- **Location**: `tests/test-getCompanies.js`
- **Purpose**:
  - Run backend functions locally before deploying them to AWS Lambda
  - Simulates a backend request to retrieve all companies from DynamoDB
  - Parses and logs the response to the terminal to verify the returned data structure
- **Run Test**:

```bash
npm run test:getCompanies
```

- **Deploy Function**:

```bash
npm run deploy:getCompanies
```
