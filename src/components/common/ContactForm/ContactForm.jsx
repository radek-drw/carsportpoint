import React from "react";
import { Formik, Form } from "formik";
import NameField from "./NameField";
import SubjectField from "./SubjectField";
import MessageField from "./MessageField";
import FileUploadField from "./FileUploadField";
import { validationSchema } from "./validationSchema";
import EmailField from "./EmailField";
import PhoneField from "./PhoneField";

const ContactForm = ({
  includeSubjectInput = false,
  messagePlaceholder,
  messageFieldRows,
  includeFileInput = false,
  submitButtonTxt,
}) => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        description: "",
        subject: "",
        files: [],
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
        // Send data to the API
      }}
    >
      {({ values, setFieldValue, isSubmitting, errors, touched }) => (
        <Form noValidate>
          <NameField errors={errors} touched={touched} />
          <div className="mb-input-gap flex flex-col items-center justify-between md:flex-row">
            <EmailField errors={errors} touched={touched} />
            <PhoneField
              value={values.phone}
              onChange={(phone) => setFieldValue("phone", phone)}
              errors={errors}
              touched={touched}
            />
          </div>
          {includeSubjectInput && (
            <SubjectField errors={errors} touched={touched} />
          )}
          <MessageField
            errors={errors}
            touched={touched}
            messageFieldRows={messageFieldRows}
            messagePlaceholder={messagePlaceholder}
          />
          {includeFileInput && (
            <FileUploadField
              files={values.files}
              setFieldValue={setFieldValue}
            />
          )}
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
