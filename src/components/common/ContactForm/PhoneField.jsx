import React, { useState } from "react";
import { ErrorMessage } from "formik";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const PhoneField = ({
  label = "Phone Number",
  name = "phone",
  value,
  onChange,
  errors,
  touched,
}) => {
  const [country, setCountry] = useState("IE");
  const errorId = `${name}-error`;

  return (
    <div className="w-full md:basis-[47%]">
      <label htmlFor={name} className="mb-1 block text-sm font-medium">
        {label}
      </label>
      <PhoneInput
        defaultCountry={country}
        value={value}
        onChange={onChange}
        onCountryChange={setCountry}
        className="input-bordered w-full transition focus-within:border-inputBorder focus-within:shadow-inputShadow"
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

export default PhoneField;
