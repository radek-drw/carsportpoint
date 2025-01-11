import React from "react";

import Divider from "../../common/Divider";
import CircularProgress from "./ProgressCircle";

import decorativeA from "../../../assets/images/section_bg1.png";
import CarEngine from "../../../assets/images/homemain1.jpg";

const AboutArticle = () => {
  return (
    <article
      className="bg-no-repeat px-[2vw] sm:px-[3vw] md:px-[5vw] lg:px-[9vw] xl:px-[14vw] 2xl:px-[20vw]"
      style={{ backgroundImage: `url(${decorativeA})` }}
    >
      <div className="mb-32 flex">
        <div className="basis-[66%] pr-6 pt-40">
          <h3 className="mb-9 text-2xl font-bold text-customRed sm:text-3xl md:text-4xl">
            About time you have found us.
          </h3>
          <h1 className="mb-4 text-4xl font-black tracking-wide text-articleHead sm:text-5xl lg:text-6xl">
            Welcome to Carsportpoint.ie
          </h1>
          <p className="mb-20 ml-10 text-sm text-customGrey">
            <strong>
              A place where you can get in touch with all of the best car
              services in Ireland
            </strong>
          </p>
          <Divider size="194px" orientation="horizontal" />
        </div>
        <div className="flex-1">
          <Divider size="270px" orientation="vertical" />
          <h2 className="mb-4 mt-10 text-2xl font-bold text-customRed sm:text-3xl lg:text-4xl">
            website for all
          </h2>
          <h3 className="text-sm font-medium text-articleTxt sm:text-base xl:text-xl">
            There is no Need to look around and read opinions on car services we
            do it all here for you. here you will only find the best of the
            best. we make it as easy as it can be for people that are new or
            petrol heads as we like to call them.
          </h3>
        </div>
      </div>
      {/* ECU CUSTOM REMAPS */}
      <div className="grid grid-cols-3">
        <div className="h-[274px] bg-customRed p-10">
          <h3 className="text-2xl font-bold uppercase text-white sm:text-3xl lg:text-4xl">
            ecu custom remaps
          </h3>
        </div>
        <div className="mt-40 bg-[#e7ecef] px-10 py-20 text-center">
          <CircularProgress />
          <p className="pb-6 text-xl font-medium text-articleHead sm:text-2xl">
            better performance
          </p>
          <p className="text-sm text-customGrey">
            We dont only show you where to find all your car needs we aslo
            supply custom ECU programs for garages all over Ireland, if this is
            something that interests you, contact us
          </p>
        </div>
        <div className="mt-20">
          <img
            src={CarEngine}
            alt="Car engine prepared for chip tuning"
            className="w-full"
          />
        </div>
      </div>
    </article>
  );
};

export default AboutArticle;
