import React from "react";
import { Field, ErrorMessage } from "formik";

const TextField = ({ label, name, ...props }) => {
  return (
    <div className="mb-8">
      <label htmlFor={name} className="mb-1 block text-sm font-medium">
        {label}
      </label>
      <Field
        id={name}
        name={name}
        {...props}
        className="input-bordered w-full"
      />
      <ErrorMessage
        name={name}
        component="div"
        className="mt-1 text-sm text-red-500"
      />
    </div>
  );
};

export default TextField;
