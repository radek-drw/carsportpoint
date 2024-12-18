import React from "react";

import Divider from "../Divider";
import CircularProgress from "./ProgressCircle";

import sectionBg1 from "../../assets/images/section_bg1.png";
import homeMain1 from "../../assets/images/homemain1.jpg";

const AboutArticle = () => {
  return (
    <>
      <div>
        <img src={sectionBg1} alt="Logo A" className="absolute" />
      </div>
      <article className="2xl:px-[20vw] xl:px-[14vw] lg:px-[9vw] md:px-[5vw] sm:px-[3vw] px-[2vw]">
        <div className="flex mb-32">
          <div className="basis-[66%] pt-40 pr-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-9 text-customRed">
              About time you have found us.
            </h3>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-articleHead tracking-wide mb-4">
              Welcome to Carsportpoint.ie
            </h2>
            <p className="text-customGrey text-sm mb-20 ml-10">
              <strong>
                A place where you can get in touch with all of the best car
                services in Ireland
              </strong>
            </p>
            <Divider size="194px" orientation="horizontal" />
          </div>
          <div className="flex-1">
            <Divider size="270px" orientation="vertical" />
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 mt-10 text-customRed">
              website for all
            </h3>
            <h4 className="text-sm sm:text-base xl:text-xl font-medium text-articleTxt">
              There is no Need to look around and read opinions on car services
              we do it all here for you. here you will only find the best of the
              best. we make it as easy as it can be for people that are new or
              petrol heads as we like to call them.
            </h4>
          </div>
        </div>
        {/* ECU CUSTOM REMAPS */}
        <div className="grid grid-cols-3">
          <div className="bg-customRed p-10 h-[274px]">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-white">
              ecu custom remaps
            </h3>
          </div>
          <div className="mt-40 text-center px-10 py-20 bg-[#e7ecef]">
            <CircularProgress />
            <p className="text-xl sm:text-2xl font-medium text-articleHead pb-6">
              better performance
            </p>
            <p className="text-sm text-customGrey">
              We dont only show you where to find all your car needs we aslo
              supply custom ECU programs for garages all over Ireland, if this
              is something that interests you, contact us
            </p>
          </div>
          <div className="mt-20">
            <img src={homeMain1} alt="Car engine" className="w-full" />
          </div>
        </div>
      </article>
    </>
  );
};

export default AboutArticle;
