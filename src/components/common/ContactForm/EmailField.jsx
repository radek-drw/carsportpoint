import React from "react";
import { Field, ErrorMessage } from "formik";

const EmailField = ({ label, name, ...props }) => {
  return (
    <div className="basis-[47%]">
      <label htmlFor={name} className="mb-1 block text-sm font-medium">
        {label}
      </label>
      <Field
        id={name}
        name={name}
        type="email"
        {...props}
        className="input-bordered w-full"
      />
      <ErrorMessage
        name={name}
        component="div"
        className="mt-1 text-sm font-bold text-red-500"
      />
    </div>
  );
};

export default EmailField;
