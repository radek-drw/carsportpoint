// External libraries
import React, { useState, useRef } from "react";
import { Formik, Form } from "formik";
import { AnimatePresence } from "framer-motion";
import ClipLoader from "react-spinners/ClipLoader";

// Local form fields (components)
import NameField from "./fields/NameField";
import EmailField from "./fields/EmailField";
import PhoneField from "./fields/PhoneField";
import SubjectField from "./fields/SubjectField";
import MessageField from "./fields/MessageField";
import FileUploadField from "./fields/FileUploadField";

// Form feedback UI
import FeedbackMessage from "./formSubmitStatus/FeedbackMessage";
import { showMessage } from "./formSubmitStatus/showMessage";

// Configs & validation
import validateProps from "./utils/validators/validateProps";
import { defaultConfig } from "@shared/defaultConfig";
import { validationSchema } from "@shared/validationSchema";

// API handlers
import { sendContactForm } from "../../../../../backend/functions/sendContactForm"; // connect with backend without API calls (only for test)

import { uploadFilesToS3 } from "./utils/api/uploadFilesToS3";
// import { sendContactForm, uploadFilesToS3 } from "./utils/api"; // this will be when the backend is ready

const ContactForm = ({ displayMode = "label" }) => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const successTimeoutRef = useRef(null);
  const errorTimeoutRef = useRef(null);

  // validateProps is a function that checks the data types of props passed to ContactForm.
  // If any property has an incorrect type or contains invalid values,
  // the function throws an error with an appropriate message and stops further code execution
  validateProps(displayMode);

  const visibleFields = Object.entries(defaultConfig).reduce(
    (acc, [key, config]) => {
      if (key === "submitLabel") return acc; // what about submitLabel?
      if (config.visible === false) return acc;
      acc[key] = config;
      return acc;
    },
    {},
  );

  // Initial values based on visible fields
  const initialValues = Object.keys(visibleFields).reduce((acc, key) => {
    acc[key] = key === "files" ? [] : "";
    return acc;
  }, {});

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm, setErrors }) => {
        try {
          let fileUrls = [];

          if (values.files && values.files.length > 0) {
            fileUrls = await uploadFilesToS3(values.files);
          }

          const payload = {
            ...values,
            files: fileUrls,
          };
          // console.log("Form submission payload:", payload);

          await sendContactForm(payload);

          showMessage(
            setSuccessMessage,
            successTimeoutRef,
            "The form has been successfully submitted!",
          );
          resetForm();
        } catch (error) {
          console.error("Submission error:", error);

          if (
            error?.response?.status === 400 &&
            error?.response?.data?.errors
          ) {
            setErrors(error.response.data.errors);
          } else {
            showMessage(
              setErrorMessage,
              errorTimeoutRef,
              "Something went wrong. Please try again later",
            );
          }
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ values, setFieldValue, isSubmitting, errors, touched }) =>
        /* prettier-ignore */
        <Form noValidate>
          {visibleFields.name && (
            <NameField
              name="name"
              label={displayMode !== "placeholder" ? visibleFields.name.label : ""}
              placeholder={displayMode !== "label" ? visibleFields.name.placeholder : ""}
              required={visibleFields.name.required}
              errors={errors}
              touched={touched}
            />
          )}

          {(visibleFields.email || visibleFields.phone) && (
            <div className="mb-input-gap flex flex-col items-start justify-between md:flex-row">
              {visibleFields.email && (
                <EmailField
                  name="email"
                  label={displayMode !== "placeholder" ? visibleFields.email.label : ""}
                  placeholder={displayMode !== "label" ? visibleFields.email.placeholder : ""}
                  required={visibleFields.email.required}
                  errors={errors}
                  touched={touched}
                />
              )}
              {visibleFields.phone && (
                <PhoneField
                  name="phone"
                  label={displayMode !== "placeholder" ? visibleFields.phone.label : ""}
                  placeholder={displayMode !== "label" ? visibleFields.phone.placeholder: ""}
                  required={visibleFields.phone.required}
                  country={visibleFields.phone.country}
                  value={values.phone}
                  onChange={(phone) => setFieldValue("phone", phone)}
                  errors={errors}
                  touched={touched}
                />
              )}
            </div>
          )}

          {visibleFields.subject && (
            <SubjectField
              name="subject"
              label={displayMode !== "placeholder" ? visibleFields.subject.label : ""}
              placeholder={displayMode !== "label" ? visibleFields.subject.placeholder : ""}
              required={visibleFields.subject.required}
              errors={errors}
              touched={touched}
            />
          )}
          {visibleFields.message && (
            <MessageField
              name="message"
              label={displayMode !== "placeholder" ? visibleFields.message.label : ""} 
              placeholder={displayMode !== "label" ? visibleFields.message.placeholder : ""}
              required={visibleFields.message.required}
              rows={visibleFields.message.rows}
              errors={errors}
              touched={touched}
            />
          )}
          {visibleFields.files && (
            <FileUploadField
              name="files"
              label={visibleFields.files.label}
              files={values.files || []}
              maxFilesCount={visibleFields.files.maxFilesCount}
              maxFileSize={visibleFields.files.maxFileSize}
              setFieldValue={setFieldValue}
            />
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`mt-12 flex w-full items-center justify-center gap-2 rounded-md px-5 py-4 text-white transition duration-300 ${
              isSubmitting ? "bg-gray-400" : "bg-red-500 hover:bg-red-700"
            }`}
          >
            {isSubmitting ? (
              <>
                <ClipLoader color="#fff" size={20} />
                Sending...
              </>
            ) : (
              defaultConfig.submitLabel
            )}
          </button>

          <AnimatePresence>
            {successMessage && (
              <FeedbackMessage
                key="success"
                type="success"
                message={successMessage}
                onClose={() => setSuccessMessage("")}
              />
            )}
            {errorMessage && (
              <FeedbackMessage
                key="error"
                type="error"
                message={errorMessage}
                onClose={() => setErrorMessage("")}
              />
            )}
          </AnimatePresence>
        </Form>
      }
    </Formik>
  );
};

export default ContactForm;
