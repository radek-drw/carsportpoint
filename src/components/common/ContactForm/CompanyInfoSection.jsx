import React from "react";
import NameField from "./NameField";
import EmailField from "./EmailField";
import PhoneField from "./PhoneField";

const CompanyInfoSection = ({
  values,
  setFieldValue,
  country,
  setCountry,
  nameLabel,
  errors,
  touched,
}) => {
  return (
    <>
      <NameField label={nameLabel} name="companyName" />
      <div className="mb-input-gap flex justify-between">
        <EmailField
          label="Email Address *"
          name="email"
          errors={errors}
          touched={touched}
        />
        <PhoneField
          label="Phone Number"
          name="phone"
          value={values.phone}
          onChange={(phone) => setFieldValue("phone", phone)}
          onCountryChange={(newCountry) => setCountry(newCountry)}
          country={country}
        />
      </div>
    </>
  );
};

export default CompanyInfoSection;
