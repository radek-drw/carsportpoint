import React from "react";

import sectionBg1 from "../../../assets/images/section_bg2.png";
import about1 from "../../../assets/images/carsportpoint-contact.jpg";

import Divider from "../../common/Divider";

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
          <h2 className="mb-10 text-xl font-bold text-customRed sm:text-3xl md:text-4xl">
            Contact us
          </h2>
          <h3 className="text-4xl font-black text-articleHead sm:text-5xl lg:text-6xl">
            Want to be a part of something big?
          </h3>
          <p className="mb-20 mt-4 text-[44px] uppercase text-customRed lg:text-5xl">
            get in touch
          </p>
          <Divider size="194px" orientation="horizontal" />
          <p className="mt-14 text-sm font-medium text-articleHead sm:text-base lg:text-xl">
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
