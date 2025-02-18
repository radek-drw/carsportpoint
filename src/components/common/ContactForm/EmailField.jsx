import React from "react";
import { Field, ErrorMessage } from "formik";

const EmailField = ({ label, name, errors, touched }) => {
  const errorId = `${name}-error`;

  return (
    <div className="mb-input-gap w-full md:mb-0 md:basis-[47%]">
      <label htmlFor={name} className="mb-1 block text-sm font-medium">
        {label}
      </label>
      <Field
        id={name}
        name={name}
        type="email"
        className={`input-bordered w-full transition ${
          errors[name] && touched[name] ? "border-red-500" : ""
        }`}
        aria-required="true"
        aria-invalid={!!errors[name] && touched[name]}
        aria-describedby={!!errors[name] && touched[name] ? errorId : undefined}
      />
      <ErrorMessage
        name={name}
        component="div"
        id={errorId}
        className="mt-1 text-sm text-red-500"
      />
    </div>
  );
};

export default EmailField;
