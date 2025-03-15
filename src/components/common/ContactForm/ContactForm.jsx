import React from "react";
import { Formik, Form } from "formik";

import EmailField from "./EmailField";
import FileUploadField from "./FileUploadField";
import MessageField from "./MessageField";
import NameField from "./NameField";
import SubjectField from "./SubjectField";
import PhoneField from "./PhoneField";
import { createValidationSchema } from "./validationSchema";

import { validateConfig } from "./utils/validateConfig";

const ContactForm = ({ config, submitButtonTxt }) => {
  const validatedConfig = validateConfig(config);
  // Pobranie konfiguracji pola plików, jeśli istnieje
  const fileFieldConfig = validatedConfig.find(
    (field) => field.type === "file",
  );

  const initialValues = validatedConfig.reduce((acc, field) => {
    if (field.type === "group") {
      field.fields.forEach((subField) => {
        acc[subField.name] = subField.initialValue || "";
      });
    } else {
      acc[field.name] = field.initialValue || "";
    }
    return acc;
  }, {});

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={createValidationSchema(fileFieldConfig?.maxFileSize)}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, setFieldValue, isSubmitting, errors, touched }) => (
        <Form noValidate>
          {validatedConfig.map((field, index) => {
            if (field.type === "group") {
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
                    maxFilesCount={field.maxFilesCount} // Bezpośrednie przekazanie
                    maxFileSize={field.maxFileSize} // Bezpośrednie przekazanie
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
