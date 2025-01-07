import React from "react";
import { ErrorMessage } from "formik";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const PhoneField = ({
  label,
  name,
  value,
  onChange,
  onCountryChange,
  country,
}) => {
  return (
    <div className="basis-[47%]">
      <label htmlFor={name} className="mb-1 block text-sm font-medium">
        {label}
      </label>
      <PhoneInput
        defaultCountry={country}
        value={value}
        onChange={onChange}
        onCountryChange={onCountryChange}
        className="input-bordered w-full focus-within:border-inputBorder focus-within:shadow-inputShadow"
      />
      <ErrorMessage
        name={name}
        component="div"
        className="mt-1 text-sm text-red-500"
      />
    </div>
  );
};

export default PhoneField;
