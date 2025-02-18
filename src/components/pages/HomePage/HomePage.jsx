import React from "react";

import Slider from "./Slider/Slider";
import AboutArticle from "./AboutArticle";
import TuningArticle from "./TuningArticle";
import ContactArticle from "./ContactArticle";

const HomePage = () => {
  return (
    <>
      <Slider />
      <section>
        <AboutArticle />
        <TuningArticle />
        <ContactArticle />
      </section>
    </>
  );
};

export default HomePage;
