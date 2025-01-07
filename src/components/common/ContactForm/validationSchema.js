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
  name: Yup.string().trim().max(50, "Name cannot exceed 50 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address")
    .max(320, "Email cannot exceed 320 characters"),
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
  description: Yup.string()
    .trim()
    .required("Message is required")
    .max(1000, "Message cannot exceed 1000 characters"),
  subject: Yup.string().trim().max(100, "Subject cannot exceed 100 characters"),
  files: Yup.array()
    .of(Yup.mixed())
    .test(
      "fileSize",
      `Each file must be less than ${(MAX_FILE_SIZE / (1024 * 1024)).toFixed()}MB.`,
      (files) =>
        Array.isArray(files) &&
        files.every((file) => file.size <= MAX_FILE_SIZE),
    )
    .test(
      "fileType",
      "Invalid file type.",
      (files) =>
        Array.isArray(files) &&
        files.every((file) => SUPPORTED_FORMATS.includes(file.type)),
    ),
});
