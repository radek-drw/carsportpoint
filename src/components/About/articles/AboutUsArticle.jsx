import React from "react";

import Divider from "../../Divider";

import aboutMain1 from "../../../assets/images/aboutmain1.jpg";
import sectionBg1 from "../../../assets/images/section_bg1.png";
import homeTuningAbout1 from "../../../assets/images/home_tuning_about1.png";

const AboutUs = () => {
  return (
    <article>
      <div className="flex">
        <div className="basis-6/12 flex justify-center self-start">
          <img src={aboutMain1} alt="Modified cars in garage" />
        </div>
        <div className="pt-[70px] px-[4vw] basis-6/12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-9 text-customRed">
            About us
          </h3>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-articleHead tracking-wide mb-20">
            We are CarSportPoint <br />
            We provide{" "}
            <span className="text-customRed">engine tuning & remaps</span>
          </h2>
          <Divider size="194px" orientation="horizontal" />
          <h4 className="text-sm sm:text-base md:text-lg lg:text-xl mt-14 pr-[39%] font-medium text-articleHead">
            Vivamus nec leo enim. Aliquam erat volutpat. Sed et auctor felis,
            quis consectetur justo. Sed et interdum turpis? Ut gravida ut purus
            vel luctus? Duis volutpat.
          </h4>
        </div>
      </div>
      <div>
        <div>
          <img src={sectionBg1} alt="Logo A" className="absolute" />
        </div>
        <div>
          <img
            src={homeTuningAbout1}
            alt="Wheel"
            className="absolute right-0"
          />
        </div>
      </div>
    </article>
  );
};

export default AboutUs;
