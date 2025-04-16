import React from "react";

import CatalogueHeader from "./CatalogueHeader";
import Companies from "./Companies/Companies";
import ContactForm from "@common/ContactForm/ContactForm";

const CataloguePage = () => {
  return (
    <section className="px-mobile-padding pt-16 md:px-0">
      <CatalogueHeader />
      <Companies />

      {/* Contact form */}
      <div className="mx-auto md:max-w-[524px] lg:max-w-[630px] xl:max-w-[732px]">
        <h2 className="mt-16 text-2xl font-bold text-customRed sm:text-3xl md:text-4xl">
          Add your company
        </h2>
        <p className="mb-14 mt-4 text-lg text-articleHead">
          Are you a company owner? Add your company to our catalogue to reach
          more customers
        </p>
        <ContactForm
          displayMode="label"
          customConfig={{
            name: { required: false },
            email: { required: false },
            phone: { required: false },
            subject: { required: false },
          }}
        />
      </div>
    </section>
  );
};
export default CataloguePage;
