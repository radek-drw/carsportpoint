import React from "react";

import CatalogueHeader from "./CatalogueHeader";
import ContactForm from "../../common/ContactForm/ContactForm";

const CataloguePage = () => {
  return (
    <section className="pt-16">
      <CatalogueHeader />
      <ContactForm />
    </section>
  );
};
export default CataloguePage;
