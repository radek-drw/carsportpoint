import React, { useState, useEffect } from "react";
import { ErrorMessage } from "formik";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const PhoneField = ({
  name,
  label,
  placeholder,
  required,
  country,
  value,
  onChange,
  errors,
  touched,
}) => {
  const [currentCountry, setCurrentCountry] = useState(country);
  const errorId = `${name}-error`;

  // Updates 'currentCountry' when 'country' prop changes to keep the state in sync
  useEffect(() => {
    if (country) {
      setCurrentCountry(country);
    }
  }, [country]);

  return (
    <div className="w-full md:basis-[47%]">
      {label && (
        <label htmlFor={name} className="mb-1 block text-sm font-medium">
          {label}
        </label>
      )}
      <PhoneInput
        id={name}
        placeholder={placeholder || undefined}
        defaultCountry={currentCountry}
        value={value}
        onChange={onChange}
        onCountryChange={setCurrentCountry}
        className={`focus-within:shadow-inputShadow" input-bordered w-full transition focus-within:border-inputBorder ${
          errors[name] && touched[name] ? "border-red-500" : ""
        }`}
        required={required}
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
