import React from "react";

import AboutArticle from "./articles/AboutArticle";
import TuningArticle from "./articles/TuningArticle";
import ContactArticle from "./articles/ContactArticle";

const ArticlesSection = () => {
  return (
    <section>
      <AboutArticle />
      <TuningArticle />
      <ContactArticle />
    </section>
  );
};

export default ArticlesSection;
