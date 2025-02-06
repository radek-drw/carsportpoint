import React from "react";

import CatalogueHeader from "./CatalogueHeader";
import ContactForm from "@common/ContactForm/ContactForm";

const CataloguePage = () => {
  return (
    <section className="px-mobile-padding pt-16 md:px-0">
      <CatalogueHeader />
      <ContactForm
        title={
          <>
            Do you want to add your company?
            <span className="mt-2 block">Please fill the form</span>
          </>
        }
        titleStyle={
          "mb-8 text-2xl font-bold text-customRed sm:text-3xl md:text-4xl"
        }
        messageFieldRows={9}
        includeFileInput={true}
        submitButtonTxt={"SEND NOW"}
        nameLabel={"Company name"}
        messageLabel={"Company Information *"}
        messagePlaceholder={
          "Please provide some information about your company: opening hours, address, contact details, and any other important info"
        }
      />
    </section>
  );
};
export default CataloguePage;
