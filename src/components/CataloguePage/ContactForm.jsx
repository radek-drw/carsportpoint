import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  companyName: Yup.string(), // Optional
  email: Yup.string() // Required
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string().matches(
    // Optional
    /^[0-9\s\-+()]*$/,
    "Phone number must be only digits"
  ),
  description: Yup.string().trim().required("Message is required"), // Required
  file: Yup.mixed() // Optional
    .nullable()
    .test(
      "fileSize",
      "File is too large, the maximum size is 5MB.",
      (value) => !value || value.size <= 5 * 1024 * 1024 // Check only if value exists
    )
    .test(
      "fileType",
      "Invalid file type. Please upload a valid image or document.",
      (value) =>
        !value || // Skip check if no file
        [
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
        ].includes(value.type)
    ),
});

const AddCompanyForm = () => (
  <Formik
    initialValues={{
      companyName: "",
      email: "",
      phone: "",
      description: "",
      file: null,
    }}
    validationSchema={validationSchema}
    onSubmit={(values) => {
      console.log(values);
      // here send data to the server
    }}
  >
    {({ setFieldValue, isSubmitting }) => (
      <Form
        // think to add here 50vw width and max-width 1280px?????
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

        {/* File */}
        <div className="mb-8">
          <input
            type="file"
            name="file"
            onChange={(event) =>
              setFieldValue("file", event.currentTarget.files[0])
            }
          />
          <ErrorMessage
            name="file"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
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
    )}
  </Formik>
);

export default AddCompanyForm;
