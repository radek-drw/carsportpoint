import React from "react";
import { Field, ErrorMessage } from "formik";

const MessageField = ({
  label,
  name,
  placeholder,
  required,
  errors,
  touched,
  rows,
}) => {
  const errorId = `${name}-error`;

  return (
    <div className="mb-input-gap">
      {label && (
        <label htmlFor={name} className="mb-1 block text-sm font-medium">
          {label}
        </label>
      )}
      <Field
        as="textarea"
        id={name}
        name={name}
        placeholder={placeholder || undefined}
        rows={rows}
        className={`input-bordered w-full transition ${
          errors[name] && touched[name] ? "border-red-500" : ""
        }`}
        aria-required={required}
        aria-invalid={!!errors[name] && touched[name]}
        aria-describedby={!!errors[name] && touched[name] ? errorId : undefined}
      />
      <ErrorMessage
        name={name}
        component="div"
        id={errorId}
        className="mt-0.5 text-sm text-red-500"
      />
    </div>
  );
};

export default MessageField;
