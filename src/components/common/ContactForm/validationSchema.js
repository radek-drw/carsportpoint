import * as Yup from "yup";
import { parsePhoneNumberFromString } from "libphonenumber-js";

import { defaultConfig } from "./utils/defaultConfig";

/* NOTE: When adding a new file type in SUPPORTED_FORMATS, make sure to update two places:
  
  1. The 'accept' attribute in the <input> tag to allow the selection of the new file extensions. 
     Example: accept=".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx,.txt,.new_type"
  
  2. The tooltip, which displays the supported file formats, should be updated to include the new format.
     Example: <strong>Supported formats: </strong> JPG, JPEG, PNG, GIF, PDF, DOC, DOCX, TXT, NEW_TYPE

  3. In aria-label in FaInfoCircle
     Example: aria-label={"Supported formats are: jpg, jpeg, png, gif, pdf, doc, docx, txt, new_type"}
  
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

export const getValidationSchema = (overrides = {}) => {
  const mergedConfig = {
    ...defaultConfig,
    ...overrides,
    files: { ...defaultConfig.files, ...overrides.files },
  };

  const maxFileSize = mergedConfig.files.maxFileSize;
  const maxFilesCount = mergedConfig.files.maxFilesCount;

  return Yup.object({
    name: Yup.string()
      .trim()
      .max(50, "Name cannot exceed 50 characters")
      .when([], {
        is: () => mergedConfig.name.required,
        then: (schema) => schema.required("Name is required"),
      }),
    email: Yup.string()
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
    message: Yup.string()
      .trim()
      .max(1000, "Message cannot exceed 1000 characters"),
    subject: Yup.string()
      .trim()
      .max(100, "Subject cannot exceed 100 characters"),
    files: Yup.array()
      .of(Yup.mixed())
      .max(
        maxFilesCount,
        `You can upload up to ${maxFilesCount} file${maxFilesCount > 1 ? "s" : ""}.`,
      )
      .test(
        "fileSize",
        `Each file must be less than ${maxFileSize}MB.`,
        (files) =>
          !files ||
          files.length === 0 ||
          files.every((file) => file.size <= maxFileSize * 1024 * 1024),
      )
      .test(
        "fileType",
        "Invalid file type.",
        (files) =>
          !files ||
          files.length === 0 ||
          files.every((file) => SUPPORTED_FORMATS.includes(file.type)),
      ),
  });
};
