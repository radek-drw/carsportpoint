import React from "react";

import AboutArticle from "./articles/AboutArticle";
import TuningArticle from "./articles/TuningArticle";
import ContactArticle from "./articles/ContactArticle";

import home_tuning_section from "../../../assets/images/home_tuning_section.png";

const ArticlesSection = () => {
  return (
    <>
      <div>
        <img
          src={home_tuning_section}
          alt="home_tuning_section"
          className="absolute"
        />
      </div>
      <section>
        <AboutArticle />
        <TuningArticle />
        <ContactArticle />
      </section>
    </>
  );
};

export default ArticlesSection;
