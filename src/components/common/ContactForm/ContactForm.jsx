import React from "react";
import { Formik, Form } from "formik";

import NameField from "./NameField";
import EmailField from "./EmailField";
import PhoneField from "./PhoneField";
import SubjectField from "./SubjectField";
import MessageField from "./MessageField";
import FileUploadField from "./FileUploadField";

import { defaultConfig } from "./utils/defaultConfig";

import { getValidationSchema } from "./validationSchema";

const ContactForm = ({
  fieldsVisibility = {},
  displayMode = "label",
  overrides = {},
}) => {
  const mergedConfig = Object.keys(defaultConfig).reduce((acc, key) => {
    if (fieldsVisibility[key] !== false) {
      acc[key] = { ...defaultConfig[key], ...overrides[key] };
    }
    return acc;
  }, {});

  const initialValues = Object.keys(mergedConfig).reduce((acc, key) => {
    acc[key] = "";
    return acc;
  }, {});

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={getValidationSchema(overrides)}
      onSubmit={(values) => console.log(values)}
    >
      {({ values, setFieldValue, errors, touched }) => (
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
            className="mt-4 rounded bg-blue-500 px-6 py-2 text-white"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
