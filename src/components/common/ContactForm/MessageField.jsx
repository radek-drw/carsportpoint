import React from "react";
import { Field, ErrorMessage } from "formik";

const MessageField = ({ label, name, ...props }) => {
  return (
    <div className="mb-input-gap">
      <label htmlFor={name} className="mb-1 block text-sm font-medium">
        {label}
      </label>
      <Field
        as="textarea"
        id={name}
        name={name}
        {...props}
        className="input-bordered w-full"
      />
      <ErrorMessage
        name={name}
        component="div"
        className="mt-0.5 text-sm font-bold text-red-500"
      />
    </div>
  );
};

export default MessageField;
