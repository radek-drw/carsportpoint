import React, { useState } from "react";
import { Formik, Form } from "formik";
import axios from "axios";

import NameField from "./NameField";
import EmailField from "./EmailField";
import PhoneField from "./PhoneField";
import SubjectField from "./SubjectField";
import MessageField from "./MessageField";
import FileUploadField from "./FileUploadField";

import { motion, AnimatePresence } from "framer-motion";

import ClipLoader from "react-spinners/ClipLoader";

import { defaultConfig } from "./utils/defaultConfig";

import validateProps from "./utils/validateProps";

import { getValidationSchema } from "./validationSchema";

const ContactForm = ({
  visibleFields = {},
  displayMode = "label",
  customConfig = {},
  submitLabel = "Send a Message",
}) => {
  const [successMessage, setSuccessMessage] = useState("");

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

  const API_URL =
    "https://qxzl1w9qrh.execute-api.eu-west-1.amazonaws.com/sendContactForm";

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={getValidationSchema(customConfig)}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          await axios.post(API_URL, values);
          setSuccessMessage("The form has been successfully submitted!");
          setTimeout(() => setSuccessMessage(""), 5000);
          resetForm();
        } catch (error) {
          console.error("Submission error:", error);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ values, setFieldValue, isSubmitting, errors, touched }) => (
        <Form noValidate>
          {mergedConfig.name && (
            <NameField
              name="name"
              label={
                displayMode !== "placeholder" ? mergedConfig.name.label : ""
              }
              placeholder={
                displayMode !== "label" ? mergedConfig.name.placeholder : ""
              }
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
                  label={
                    displayMode !== "placeholder"
                      ? mergedConfig.email.label
                      : ""
                  }
                  placeholder={
                    displayMode !== "label"
                      ? mergedConfig.email.placeholder
                      : ""
                  }
                  required={mergedConfig.email.required}
                  errors={errors}
                  touched={touched}
                />
              )}
              {mergedConfig.phone && (
                <PhoneField
                  name="phone"
                  label={
                    displayMode !== "placeholder"
                      ? mergedConfig.phone.label
                      : ""
                  }
                  placeholder={
                    displayMode !== "label"
                      ? mergedConfig.phone.placeholder
                      : ""
                  }
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
              label={
                displayMode !== "placeholder" ? mergedConfig.subject.label : ""
              }
              placeholder={
                displayMode !== "label" ? mergedConfig.subject.placeholder : ""
              }
              required={mergedConfig.subject.required}
              errors={errors}
              touched={touched}
            />
          )}
          {mergedConfig.message && (
            <MessageField
              name="message"
              label={
                displayMode !== "placeholder" ? mergedConfig.message.label : ""
              }
              placeholder={
                displayMode !== "label" ? mergedConfig.message.placeholder : ""
              }
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
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute mt-4 rounded-md bg-green-100 px-4 py-3 text-sm text-green-800 shadow"
              >
                {successMessage}
              </motion.div>
            )}
          </AnimatePresence>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
