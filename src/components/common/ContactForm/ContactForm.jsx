import React, { useState } from "react";
import { Formik, Form } from "formik";
import CompanyInfoSection from "./CompanyInfoSection";
import MessageSection from "./MessageSection";
import FileUploadSection from "./FileUploadSection";
import { validationSchema } from "./validationSchema";

const ContactForm = ({
  title,
  titleStyle,
  subtitle,
  subtitleStyle,
  nameLabel,
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
        companyName: "",
        email: "",
        phone: "",
        description: "",
        files: [],
        country: "IE",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
        // Send data to the server here
      }}
    >
      {({ values, setFieldValue, isSubmitting }) => (
        <Form
          className="mx-auto mt-20 md:max-w-[524px] lg:max-w-[630px] xl:max-w-[732px]"
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
          />
          <MessageSection
            messageFieldRows={messageFieldRows}
            messageLabel={messageLabel}
            messagePlaceholder={messagePlaceholder}
          />
          {includeFileInput && (
            <FileUploadSection values={values} setFieldValue={setFieldValue} />
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="block w-full rounded-md bg-red-500 px-5 py-4 text-white duration-default hover:bg-red-700"
          >
            {submitButtonTxt}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
