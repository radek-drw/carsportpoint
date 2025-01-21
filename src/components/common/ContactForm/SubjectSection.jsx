import React from "react";
import SubjectField from "./SubjectField";

const SubjectSection = (errors, touched) => {
  return (
    <SubjectField
      label="Subject"
      name="subject"
      errors={errors}
      touched={touched}
    />
  );
};

export default SubjectSection;
