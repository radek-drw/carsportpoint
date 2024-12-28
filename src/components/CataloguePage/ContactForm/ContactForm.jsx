import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaInfoCircle } from "react-icons/fa";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const MAX_FILES = 5;
const SUPPORTED_FORMATS = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/plain",
];

const validationSchema = Yup.object({
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
    .max(MAX_FILES, `You can upload up to ${MAX_FILES} files.`)
    .test(
      "fileSize",
      `Each file must be less than ${(
        MAX_FILE_SIZE /
        (1024 * 1024)
      ).toFixed()}MB.`,
      (files) =>
        files ? files.every((file) => file.size <= MAX_FILE_SIZE) : true,
    )
    .test("fileType", "Invalid file type.", (files) =>
      files
        ? files.every((file) => SUPPORTED_FORMATS.includes(file.type))
        : true,
    ),
});

const ContactForm = () => {
  const [country, setCountry] = useState("IE");

  return (
    <Formik
      initialValues={{
        companyName: "",
        email: "",
        phone: "",
        description: "",
        files: [],
        country: "IE",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
        // Send data to the server here
      }}
    >
      {({ errors, touched, setFieldValue, values, isSubmitting }) => {
        const handleFileChange = (event) => {
          const selectedFiles = Array.from(event.currentTarget.files);
          const newFiles = [...values.files, ...selectedFiles].slice(
            0,
            MAX_FILES,
          );
          setFieldValue("files", newFiles);

          // Clear file input so it doesn't display the file name
          event.target.value = "";
        };

        const handleFileRemove = (index) => {
          const updatedFiles = values.files.filter((_, i) => i !== index);
          setFieldValue("files", updatedFiles);
        };

        return (
          <Form
            className="mx-auto mt-20 md:max-w-[524px] lg:max-w-[630px] xl:max-w-[732px]"
            noValidate
          >
            <h3 className="mb-8 text-2xl font-bold text-customRed sm:text-3xl md:text-4xl">
              Do you want to add your company? <br /> Please fill the form
            </h3>

            {/* Company name */}
            <div className="mb-8">
              <label htmlFor="text" className="mb-1 block text-sm font-medium">
                Company Name
              </label>
              <Field
                type="text"
                name="companyName"
                id="text"
                className="input-bordered w-full"
              />
              <ErrorMessage
                name="companyName"
                component="div"
                className="mt-1 text-sm text-red-500"
              />
            </div>

            <div className="flex justify-between">
              {/* E-mail */}
              <div className="mb-8 basis-[47%]">
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium"
                >
                  Email Address *
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className={`input-bordered w-full ${
                    errors.email && touched.email ? "border-red-500" : ""
                  }`}
                  aria-describedby="email-error"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="mt-1 text-sm font-bold text-red-500"
                  id="email-error"
                />
              </div>

              {/* Phone */}
              <div className="mb-8 basis-[47%]">
                <label
                  htmlFor="phone"
                  className="mb-1 block text-sm font-medium"
                >
                  Phone Number
                </label>
                <PhoneInput
                  defaultCountry={country}
                  value={values.phone}
                  onChange={(phone) => setFieldValue("phone", phone)}
                  onCountryChange={(newCountry) => setCountry(newCountry)}
                  className="input-bordered w-full focus-within:border-inputBorder focus-within:shadow-inputShadow"
                />

                <ErrorMessage
                  name="phone"
                  component="div"
                  className="mt-1 text-sm font-bold text-red-500"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mb-8">
              <label
                htmlFor="description"
                className="mb-1 block text-sm font-medium"
              >
                Company Information *
              </label>

              <Field
                as="textarea"
                id="description"
                name="description"
                rows={9}
                placeholder="Please provide some information about your company: opening hours, address, contact details, and any other important info"
                className={`input-bordered w-full ${
                  errors.description && touched.description
                    ? "border-red-500"
                    : ""
                }`}
              />

              <ErrorMessage
                name="description"
                component="div"
                className="mt-0.5 text-sm font-bold text-red-500"
              />
            </div>

            {/* Files */}
            <div className="mb-8">
              <label
                className={`block w-full rounded px-4 py-2 text-center text-white ${
                  values.files.length >= MAX_FILES
                    ? "cursor-not-allowed bg-gray-300"
                    : "cursor-pointer bg-blue-500 duration-300 hover:bg-blue-700"
                }`}
              >
                {values.files.length >= MAX_FILES
                  ? "File Limit Reached"
                  : "Upload Files"}
                <input
                  type="file"
                  name="files"
                  multiple
                  disabled={values.files.length >= MAX_FILES}
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx,.txt"
                />
              </label>

              <span className="text-sm text-gray-500">
                You can upload up to {MAX_FILES} files. Each file must be less
                than {(MAX_FILE_SIZE / (1024 * 1024)).toFixed()}MB
              </span>
              <ErrorMessage
                name="files"
                component="div"
                className="mt-1 text-sm font-bold text-red-500"
              />

              {/* Display File List */}
              {values.files.length > 0 && (
                <ul className="mt-4">
                  {values.files.map((file, index) => {
                    const isInvalidFileType = !SUPPORTED_FORMATS.includes(
                      file.type,
                    );
                    const isInvalidFileSize = file.size > MAX_FILE_SIZE;

                    return (
                      <li
                        key={index}
                        className="mb-2 flex items-center justify-between rounded-md bg-gray-100 p-2"
                      >
                        <div className="flex w-3/4 flex-col">
                          <span
                            className={`truncate text-sm ${
                              isInvalidFileType || isInvalidFileSize
                                ? "text-gray-500 line-through"
                                : "text-green-500"
                            }`}
                          >
                            {file.name} (
                            {(file.size / (1024 * 1024)).toFixed(2)} MB)
                          </span>
                          {/* Display error messages for invalid file type */}
                          {isInvalidFileType && (
                            <span className="flex items-center text-xs text-red-500">
                              Unsupported file type.
                              <span className="group relative ml-2">
                                <FaInfoCircle
                                  className="cursor-pointer text-base text-blue-500 group-hover:text-blue-700"
                                  aria-label="Supported file types"
                                />
                                <span className="invisible absolute left-0 z-10 mt-2 whitespace-nowrap rounded-lg bg-gray-800 p-3 text-xs text-white opacity-0 shadow-lg transition-opacity duration-500 ease-in-out group-hover:visible group-hover:opacity-100">
                                  <strong>Supported formats: </strong>
                                  JPG, JPEG, PNG, GIF, PDF, DOC, DOCX, TXT
                                </span>
                              </span>
                            </span>
                          )}

                          {/* Display error messages for invalid file sizes */}
                          {isInvalidFileSize && (
                            <span className="text-xs text-red-500">
                              <span className="text-xs text-red-500">
                                File size exceeds{" "}
                                {(MAX_FILE_SIZE / (1024 * 1024)).toFixed()}MB.
                                Please upload a smaller file.
                              </span>
                            </span>
                          )}
                        </div>
                        <button
                          type="button"
                          onClick={() => handleFileRemove(index)}
                          className="text-sm font-bold text-red-500 duration-300 hover:text-red-700"
                        >
                          Remove
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="block w-full rounded-md bg-red-500 px-5 py-4 text-white duration-300 hover:bg-red-700"
            >
              SEND NOW
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ContactForm;
