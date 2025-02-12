import React from "react";
import { Field, ErrorMessage } from "formik";

const SubjectField = ({ label, name, errors, touched }) => {
  const errorId = `${name}-error`;

  return (
    <div className="mb-input-gap">
      <label
        htmlFor={name}
        className="mb-1 block text-sm font-medium"
        aria-invalid={!!errors[name] && touched[name]}
        aria-describedby={!!errors[name] && touched[name] ? errorId : undefined}
      >
        {label}
      </label>
      <Field
        id={name}
        name={name}
        className="input-bordered w-full transition"
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

export default SubjectField;
