import React, { useState } from "react";
import { Formik, Form } from "formik";
import CompanyInfoSection from "./CompanyInfoSection";
import MessageSection from "./MessageSection";
import FileUploadSection from "./FileUploadSection";
import { validationSchema } from "./validationSchema";

const ContactForm = () => {
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
          <h3 className="mb-8 text-2xl font-bold text-customRed sm:text-3xl md:text-4xl">
            Do you want to add your company? <br /> Please fill the form
          </h3>
          <CompanyInfoSection
            values={values}
            setFieldValue={setFieldValue}
            country={country}
            setCountry={setCountry}
          />
          <MessageSection />
          <FileUploadSection values={values} setFieldValue={setFieldValue} />
          <button
            type="submit"
            disabled={isSubmitting}
            className="duration-default block w-full rounded-md bg-red-500 px-5 py-4 text-white hover:bg-red-700"
          >
            SEND NOW
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
