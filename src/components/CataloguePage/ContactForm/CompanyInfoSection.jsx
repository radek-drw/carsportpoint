import React from "react";
import NameField from "./NameField";
import EmailField from "./EmailField";
import PhoneField from "./PhoneField";

const CompanyInfoSection = ({ values, setFieldValue, country, setCountry }) => {
  return (
    <>
      <NameField label="Company Name" name="companyName" />
      <div className="flex justify-between">
        <EmailField label="Email Address *" name="email" />
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
