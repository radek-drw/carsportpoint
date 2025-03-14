import React from "react";
import { Formik, Form } from "formik";
import NameField from "./NameField";
import SubjectField from "./SubjectField";
import MessageField from "./MessageField";
import FileUploadField from "./FileUploadField";
import { createValidationSchema } from "./validationSchema";
import EmailField from "./EmailField";
import PhoneField from "./PhoneField";

const ContactForm = ({ fieldsConfig, submitButtonTxt }) => {
  const initialValues = fieldsConfig.reduce((acc, field) => {
    if (field.type === "group") {
      field.fields.forEach((subField) => {
        acc[subField.name] = subField.initialValue || "";
      });
    } else {
      acc[field.name] = field.initialValue || "";
    }
    return acc;
  }, {});

  // Finds the file field configuration in fieldsConfig
  const fileFieldConfig = fieldsConfig.find((field) => field.type === "file");

  // Sets the maximum file size in bytes (converts MB to bytes)
  // Ensures the value is a valid number, non-negative, and not too large (e.g., max 100MB)
  const maxFileSize =
    Number.isFinite(fileFieldConfig?.maxFileSize) &&
    fileFieldConfig.maxFileSize > 0 &&
    fileFieldConfig.maxFileSize <= 100
      ? fileFieldConfig.maxFileSize * 1024 * 1024
      : 5 * 1024 * 1024; // Default to 5MB if not specified or invalid

  // Sets the maximum number of files, ensuring it's a valid, non-negative number and not too large (e.g., max 20 files)
  const maxFilesCount =
    Number.isFinite(fileFieldConfig?.maxFilesCount) &&
    fileFieldConfig.maxFilesCount > 0 &&
    fileFieldConfig.maxFilesCount <= 20
      ? fileFieldConfig.maxFilesCount
      : 5; // Default to 5 if not specified or invalid

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={createValidationSchema(maxFileSize)}
      onSubmit={(values) => {
        console.log(values);
        // Send data to the API
      }}
    >
      {({ values, setFieldValue, isSubmitting, errors, touched }) => (
        <Form noValidate>
          {fieldsConfig.map((field, index) => {
            if (field.type === "group") {
              // Render a group of fields
              return (
                <div key={`group-${index}`} className={field.className}>
                  {field.fields.map((subField) => {
                    switch (subField.type) {
                      case "email":
                        return (
                          <EmailField
                            key={subField.name}
                            name={subField.name}
                            label={subField.label}
                            placeholder={subField.placeholder}
                            errors={errors}
                            touched={touched}
                          />
                        );
                      case "phone":
                        return (
                          <PhoneField
                            key={subField.name}
                            name={subField.name}
                            label={subField.label}
                            placeholder={subField.placeholder}
                            value={values[subField.name]}
                            onChange={(value) =>
                              setFieldValue(subField.name, value)
                            }
                            errors={errors}
                            touched={touched}
                          />
                        );
                      default:
                        return null;
                    }
                  })}
                </div>
              );
            }

            // Render a single field
            switch (field.type) {
              case "name":
                return (
                  <NameField
                    key={field.name}
                    name={field.name}
                    label={field.label}
                    placeholder={field.placeholder}
                    errors={errors}
                    touched={touched}
                  />
                );
              case "subject":
                return (
                  <SubjectField
                    key={field.name}
                    name={field.name}
                    label={field.label}
                    placeholder={field.placeholder}
                    errors={errors}
                    touched={touched}
                  />
                );
              case "message":
                return (
                  <MessageField
                    key={field.name}
                    name={field.name}
                    label={field.label}
                    placeholder={field.placeholder}
                    errors={errors}
                    touched={touched}
                    messageFieldRows={field.rows}
                  />
                );
              case "file":
                return (
                  <FileUploadField
                    key={field.name}
                    name={field.name}
                    label={field.label}
                    files={values.files || []}
                    setFieldValue={setFieldValue}
                    maxFilesCount={maxFilesCount}
                    maxFileSize={maxFileSize}
                  />
                );
              default:
                return null;
            }
          })}
          <button
            type="submit"
            disabled={isSubmitting}
            className="duration-default mt-12 block w-full rounded-md bg-red-500 px-5 py-4 text-white hover:bg-red-700"
          >
            {submitButtonTxt}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
