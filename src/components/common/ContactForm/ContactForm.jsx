import React from "react";
import { Formik, Form } from "formik";
import NameField from "./NameField";
import SubjectField from "./SubjectField";
import MessageField from "./MessageField";
import FileUploadField from "./FileUploadField";
import { validationSchema } from "./validationSchema";
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

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
        // Send data to the API
      }}
    >
      {({ values, setFieldValue, isSubmitting, errors, touched }) => (
        <Form noValidate>
          {fieldsConfig.map((field, index) => {
            if (field.type === "group") {
              // Renderuj grupę pól
              return (
                <div key={`group-${index}`} className={field.className}>
                  {field.fields.map((subField) => {
                    switch (subField.type) {
                      case "email":
                        return (
                          <EmailField
                            key={subField.name}
                            errors={errors}
                            touched={touched}
                          />
                        );
                      case "phone":
                        return (
                          <PhoneField
                            key={subField.name}
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

            // Renderuj pojedyncze pole
            switch (field.type) {
              case "name":
                return (
                  <NameField
                    key="name"
                    label={field.label}
                    placeholder={field.placeholder}
                    errors={errors}
                    touched={touched}
                  />
                );
              case "subject":
                return (
                  <SubjectField
                    key="subject"
                    errors={errors}
                    touched={touched}
                    placeholder={field.placeholder}
                  />
                );
              case "message":
                return (
                  <MessageField
                    key="message"
                    errors={errors}
                    touched={touched}
                    messageFieldRows={field.rows}
                    messagePlaceholder={field.placeholder}
                  />
                );
              case "file":
                return (
                  <FileUploadField
                    key="files"
                    files={values.files || []}
                    setFieldValue={setFieldValue}
                    maxFilesCount={field.maxFilesCount}
                    maxFileSize={field.maxFileSize}
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
