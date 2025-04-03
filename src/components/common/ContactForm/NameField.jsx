import React from "react";
import { Field, ErrorMessage } from "formik";

const NameField = ({ name, label, placeholder, errors, touched }) => {
  const errorId = `${name}-error`;

  return (
    <div className="mb-input-gap">
      {label && (
        <label htmlFor={name} className="mb-1 block text-sm font-medium">
          {label}
        </label>
      )}
      <Field
        id={name}
        name={name}
        placeholder={placeholder || undefined}
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

export default NameField;
