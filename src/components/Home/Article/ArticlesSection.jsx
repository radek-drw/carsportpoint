import React from "react";

import AboutArticle from "./articles/AboutArticle";
import TuningArticle from "./articles/TuningArticle";
import ContactArticle from "./articles/ContactArticle";

const ArticlesSection = () => {
  return (
    <section className="max-w-[1220px] mx-auto">
      <AboutArticle />
      <TuningArticle />
      <ContactArticle />
    </section>
  );
};

export default ArticlesSection;
