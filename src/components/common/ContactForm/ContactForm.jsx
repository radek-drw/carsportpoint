import React, { useState } from "react";
import { Formik, Form } from "formik";
import CompanyInfoSection from "./CompanyInfoSection";
import SubjectSection from "./SubjectSection";
import MessageSection from "./MessageSection";
import FileUploadSection from "./FileUploadSection";
import { validationSchema } from "./validationSchema";

const ContactForm = ({
  title,
  titleStyle,
  subtitle,
  subtitleStyle,
  nameLabel,
  includeSubjectInput = false,
  messageLabel,
  messagePlaceholder,
  messageFieldRows,
  includeFileInput = false,
  submitButtonTxt,
}) => {
  const [country, setCountry] = useState("IE");

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        description: "",
        subject: "",
        files: [],
        country: "IE",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
        // Send data to the server here
      }}
    >
      {({ values, setFieldValue, isSubmitting, errors, touched }) => (
        <Form
          className="mx-auto md:max-w-[524px] lg:max-w-[630px] xl:max-w-[732px]"
          noValidate
        >
          {title && <h3 className={`${titleStyle}`}>{title}</h3>}
          {subtitle && <h4 className={`${subtitleStyle}`}>{subtitle}</h4>}
          <CompanyInfoSection
            values={values}
            setFieldValue={setFieldValue}
            country={country}
            setCountry={setCountry}
            nameLabel={nameLabel}
            errors={errors}
            touched={touched}
          />
          {includeSubjectInput && (
            <SubjectSection errors={errors} touched={touched} />
          )}
          <MessageSection
            messageFieldRows={messageFieldRows}
            messageLabel={messageLabel}
            messagePlaceholder={messagePlaceholder}
            errors={errors}
            touched={touched}
          />
          {includeFileInput && (
            <FileUploadSection values={values} setFieldValue={setFieldValue} />
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-12 block w-full rounded-md bg-red-500 px-5 py-4 text-white duration-default hover:bg-red-700"
          >
            {submitButtonTxt}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
