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
import { defaultConfig } from "./utils/config/defaultConfig";
import validateProps from "./utils/validators/validateProps";
import { getValidationSchema } from "./utils/validators/validationSchema";

// API handlers
import { sendContactForm } from "./utils/api/sendContactForm";
import { uploadFilesToS3 } from "./utils/api/uploadFilesToS3";

const ContactForm = ({
  visibleFields = {},
  displayMode = "label",
  customConfig = {},
  submitLabel = "Send a Message",
}) => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const successTimeoutRef = useRef(null);
  const errorTimeoutRef = useRef(null);

  // validateProps is a function that checks the data types of props passed to ContactForm.
  // If any property has an incorrect type or contains invalid values,
  // the function throws an error with an appropriate message and stops further code execution
  validateProps(visibleFields, displayMode, submitLabel, customConfig);

  const mergedConfig = {
    ...Object.keys(defaultConfig).reduce((acc, key) => {
      if (visibleFields[key] !== false) {
        acc[key] = { ...defaultConfig[key], ...customConfig[key] };
      }
      return acc;
    }, {}),
  };

  const initialValues = Object.keys(mergedConfig).reduce((acc, key) => {
    acc[key] = "";
    return acc;
  }, {});

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={getValidationSchema(customConfig)}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          let fileUrls = [];

          if (values.files && values.files.length > 0) {
            fileUrls = await uploadFilesToS3(values.files);
          }

          const payload = {
            ...values,
            files: fileUrls,
          };

          await sendContactForm(payload);

          showMessage(
            setSuccessMessage,
            successTimeoutRef,
            "The form has been successfully submitted!",
          );
          resetForm();
        } catch (error) {
          console.error("Submission error:", error);
          showMessage(
            setErrorMessage,
            errorTimeoutRef,
            "Something went wrong. Please try again later",
          );
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ values, setFieldValue, isSubmitting, errors, touched }) =>
        /* prettier-ignore */
        <Form noValidate>
          {mergedConfig.name && (
            <NameField
              name="name"
              label={displayMode !== "placeholder" ? mergedConfig.name.label : ""}
              placeholder={displayMode !== "label" ? mergedConfig.name.placeholder : ""}
              required={mergedConfig.name.required}
              errors={errors}
              touched={touched}
            />
          )}

          {(mergedConfig.email || mergedConfig.phone) && (
            <div className="mb-input-gap flex flex-col items-start justify-between md:flex-row">
              {mergedConfig.email && (
                <EmailField
                  name="email"
                  label={displayMode !== "placeholder" ? mergedConfig.email.label : ""}
                  placeholder={displayMode !== "label" ? mergedConfig.email.placeholder : ""}
                  required={mergedConfig.email.required}
                  errors={errors}
                  touched={touched}
                />
              )}
              {mergedConfig.phone && (
                <PhoneField
                  name="phone"
                  label={displayMode !== "placeholder" ? mergedConfig.phone.label : ""}
                  placeholder={displayMode !== "label" ? mergedConfig.phone.placeholder: ""}
                  required={mergedConfig.phone.required}
                  country={mergedConfig.phone.country}
                  value={values.phone}
                  onChange={(phone) => setFieldValue("phone", phone)}
                  errors={errors}
                  touched={touched}
                />
              )}
            </div>
          )}

          {mergedConfig.subject && (
            <SubjectField
              name="subject"
              label={displayMode !== "placeholder" ? mergedConfig.subject.label : ""}
              placeholder={displayMode !== "label" ? mergedConfig.subject.placeholder : ""}
              required={mergedConfig.subject.required}
              errors={errors}
              touched={touched}
            />
          )}
          {mergedConfig.message && (
            <MessageField
              name="message"
              label={displayMode !== "placeholder" ? mergedConfig.message.label : ""} 
              placeholder={displayMode !== "label" ? mergedConfig.message.placeholder : ""}
              required={mergedConfig.message.required}
              rows={mergedConfig.message.rows}
              errors={errors}
              touched={touched}
            />
          )}
          {mergedConfig.files && (
            <FileUploadField
              name="files"
              label={mergedConfig.files.label}
              files={values.files || []}
              maxFilesCount={mergedConfig.files.maxFilesCount}
              maxFileSize={mergedConfig.files.maxFileSize}
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
              submitLabel
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
