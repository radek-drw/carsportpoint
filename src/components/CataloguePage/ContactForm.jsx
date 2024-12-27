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
      "Invalid email address"
    )
    .required("Email is required"),
  phone: Yup.string().test(
    "isValidPhone",
    "Invalid phone number",
    (value, context) => {
      if (!value) return true;
      const phoneNumber = parsePhoneNumberFromString(
        value,
        context.parent.country
      );
      return phoneNumber && phoneNumber.isValid();
    }
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
        files ? files.every((file) => file.size <= MAX_FILE_SIZE) : true
    )
    .test("fileType", "Invalid file type.", (files) =>
      files
        ? files.every((file) => SUPPORTED_FORMATS.includes(file.type))
        : true
    ),
});

const AddCompanyForm = () => {
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
            MAX_FILES
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
            className="mx-auto xl:max-w-[732px] lg:max-w-[630px] md:max-w-[524px] mt-20"
            noValidate
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-customRed">
              Do you want to add your company? <br /> Please fill the form
            </h3>

            {/* Company name */}
            <div className="mb-8">
              <label htmlFor="text" className="block text-sm font-medium mb-1">
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
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="flex justify-between">
              {/* E-mail */}
              <div className="basis-[47%] mb-8">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
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
                  className="text-red-500 text-sm mt-1 font-bold"
                  id="email-error"
                />
              </div>

              {/* Phone */}
              <div className="basis-[47%] mb-8">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-1"
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
                  className="text-red-500 text-sm mt-1 font-bold"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mb-8">
              <label
                htmlFor="description"
                className="block text-sm font-medium mb-1"
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
                className="text-red-500 text-sm mt-0.5 font-bold"
              />
            </div>

            {/* Files */}
            <div className="mb-8">
              <label
                className={`block w-full px-4 py-2 text-center text-white rounded ${
                  values.files.length >= MAX_FILES
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-700 cursor-pointer duration-300"
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
                className="text-red-500 text-sm mt-1 font-bold"
              />

              {/* Display File List */}
              {values.files.length > 0 && (
                <ul className="mt-4">
                  {values.files.map((file, index) => {
                    const isInvalidFileType = !SUPPORTED_FORMATS.includes(
                      file.type
                    );
                    const isInvalidFileSize = file.size > MAX_FILE_SIZE;

                    return (
                      <li
                        key={index}
                        className="flex justify-between items-center mb-2 bg-gray-100 p-2 rounded-md"
                      >
                        <div className="flex flex-col w-3/4">
                          <span
                            className={`text-sm truncate ${
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
                            <span className="text-red-500 text-xs flex items-center">
                              Unsupported file type.
                              <span className="relative group ml-2">
                                <FaInfoCircle
                                  className="text-blue-500 cursor-pointer group-hover:text-blue-700 text-base"
                                  aria-label="Supported file types"
                                />
                                <span className="absolute left-0 mt-2 z-10   bg-gray-800 text-white text-xs rounded-lg shadow-lg p-3   transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 invisible group-hover:visible   whitespace-nowrap">
                                  <strong>Supported formats: </strong>
                                  JPG, JPEG, PNG, GIF, PDF, DOC, DOCX, TXT
                                </span>
                              </span>
                            </span>
                          )}

                          {/* Display error messages for invalid file sizes */}
                          {isInvalidFileSize && (
                            <span className="text-red-500 text-xs">
                              <span className="text-red-500 text-xs">
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
                          className="text-red-500 hover:text-red-700 font-bold text-sm duration-300"
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
              className="block text-white bg-red-500 w-full px-5 py-4 rounded-md hover:bg-red-700 duration-300"
            >
              SEND NOW
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddCompanyForm;
