import React from "react";
import { Field, ErrorMessage } from "formik";

const SubjectField = ({ label, name }) => {
  return (
    <div className="mb-input-gap">
      <label htmlFor={name} className="mb-1 block text-sm font-medium">
        {label}
      </label>
      <Field id={name} name={name} className="input-bordered w-full" />
      <ErrorMessage
        name={name}
        component="div"
        className="mt-1 text-sm text-red-500"
      />
    </div>
  );
};

export default SubjectField;
