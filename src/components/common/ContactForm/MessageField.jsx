import React from "react";
import { Field, ErrorMessage } from "formik";

const MessageField = ({ label, name, errors, touched }) => {
  return (
    <div className="mb-input-gap">
      <label htmlFor={name} className="mb-1 block text-sm font-medium">
        {label}
      </label>
      <Field
        as="textarea"
        id={name}
        name={name}
        className={`input-bordered w-full ${
          errors.description && touched.description ? "border-red-500" : ""
        }`}
      />
      <ErrorMessage
        name={name}
        component="div"
        className="mt-0.5 text-sm text-red-500"
      />
    </div>
  );
};

export default MessageField;
