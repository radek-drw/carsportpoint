import * as Yup from "yup";
import { parsePhoneNumberFromString } from "libphonenumber-js";

export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
export const MAX_FILES = 5;

/* NOTE: When adding a new file type in SUPPORTED_FORMATS, make sure to update two places:
  
  1. The 'accept' attribute in the <input> tag to allow the selection of the new file extensions. 
     Example: accept=".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx,.txt,.new_type"
  
  2. The tooltip, which displays the supported file formats, should be updated to include the new format.
     Example: <strong>Supported formats: </strong> JPG, JPEG, PNG, GIF, PDF, DOC, DOCX, TXT, NEW_TYPE
  
  The changes should be made in the following file: './FileUploadField.jsx' */

export const SUPPORTED_FORMATS = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/plain",
];

export const validationSchema = Yup.object({
  companyName: Yup.string(),
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email address",
    )
    .required("Email is required"),
  phone: Yup.string().test(
    "isValidPhone",
    "Invalid phone number",
    (value, context) => {
      if (!value) return true;
      const phoneNumber = parsePhoneNumberFromString(
        value,
        context.parent.country,
      );
      return phoneNumber && phoneNumber.isValid();
    },
  ),
  description: Yup.string().trim().required("Message is required"),
  files: Yup.array()
    .test(
      "fileSize",
      `Each file must be less than ${(MAX_FILE_SIZE / (1024 * 1024)).toFixed()}MB.`,
      (files) =>
        files ? files.every((file) => file.size <= MAX_FILE_SIZE) : true,
    )
    .test("fileType", "Invalid file type.", (files) =>
      files
        ? files.every((file) => SUPPORTED_FORMATS.includes(file.type))
        : true,
    ),
});
