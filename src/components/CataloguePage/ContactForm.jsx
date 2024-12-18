import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const MAX_FILES = 5;
const SUPPORTED_FORMATS = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/bmp",
  "image/tiff",
  "image/svg+xml",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "text/plain",
];

const validationSchema = Yup.object({
  companyName: Yup.string(),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string().matches(
    /^[0-9\s\-+()]*$/,
    "Phone number must be only digits"
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
  return (
    <Formik
      initialValues={{
        companyName: "",
        email: "",
        phone: "",
        description: "",
        files: [],
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
        // Send data to the server here
      }}
    >
      {({ setFieldValue, values, isSubmitting }) => {
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
              <Field
                type="text"
                name="companyName"
                placeholder="Company Name"
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
                <Field
                  type="email"
                  name="email"
                  placeholder="Your e-mail *"
                  className="input-bordered w-full"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1 font-bold"
                />
              </div>
              {/* Phone */}
              <div className="basis-[47%] mb-8">
                <Field
                  type="tel"
                  name="phone"
                  placeholder="Your phone"
                  className="input-bordered w-full"
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
              <Field
                as="textarea"
                name="description"
                rows={9}
                placeholder="Please provide some information about your company: opening hours, address, contact details, and any other important info *"
                className="input-bordered w-full"
              />
              <ErrorMessage
                name="description"
                component="div"
                className="text-red-500 text-sm mt-0.5 font-bold"
              />
            </div>

            {/* Files */}
            <div className="mb-8">
              <input
                type="file"
                name="files"
                multiple
                disabled={values.files.length >= MAX_FILES} // Disable when limit is reached
                onChange={handleFileChange}
                className="w-full mb-2 disabled:opacity-50 cursor-pointer"
                accept=".jpg,.jpeg,.png,.gif,.bmp,.tiff,.svg,.pdf,.doc,.docx,.xls,.xlsx,.txt"
              />
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
                            <span className="text-red-500 text-xs">
                              Unsupported file type. Please upload a valid file.
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
                          className="text-red-500 hover:text-red-700 font-bold text-sm"
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
              className="block text-white bg-customRed border-customRed w-full px-5 py-4 rounded-md hover:bg-red-700 hover:border-red-700 transition-all duration-300"
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
