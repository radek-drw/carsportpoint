import React from "react";

import sectionBg1 from "../../assets/images/section_bg2.png";
import about1 from "../../assets/images/carsportpoint-contact.jpg";

import Divider from "../Divider";

const ContactArticle = () => {
  return (
    <article className="mt-36">
      <div>
        <img
          src={sectionBg1}
          alt="Home contact background"
          className="absolute"
        />
      </div>
      <div className="flex">
        <div className="basis-6/12 pl-[20vw] pr-16">
          <h2 className="text-xl sm:text-3xl md:text-4xl text-customRed font-bold mb-10">
            Contact us
          </h2>
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-articleHead">
            Want to be a part of something big?
          </h3>
          <p className="text-[44px] lg:text-5xl mb-20 mt-4 text-customRed uppercase">
            get in touch
          </p>
          <Divider size="194px" orientation="horizontal" />
          <p className="mt-14 text-sm sm:text-base lg:text-xl font-medium text-articleHead">
            If you want to be featured on this website submit your request today
            and our team will be in touch with you as soon as possible
          </p>
        </div>
        <div className="basis-6/12">
          <img src={about1} alt="about1" />
        </div>
      </div>
      <div className="flex justify-center">
        <Divider size="194px" orientation="vertical" rotate={180} />
      </div>
    </article>
  );
};

export default ContactArticle;
