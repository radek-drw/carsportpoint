import React from "react";

import Divider from "../../../Divider";

import { UserIcon } from "@heroicons/react/24/solid";

import tuning1 from "../../../../assets/images/carsportpoint-tuning-1.jpg";
import tuning2 from "../../../../assets/images/carsportpoint-tuning-2.png";
import tuning3 from "../../../../assets/images/carsportpoint-tuning-3.jpg";
import tuning4 from "../../../../assets/images/carsportpoint-tuning-4.jpg";
import tuning5 from "../../../../assets/images/home-tuning-counterbg.png";

const TuningArticle = () => {
  return (
    <article className="mt-36">
      <div className="flex mx-auto">
        <div className="basis-6/12 pl-[20vw] pr-20">
          <h2 className="sm:text-3xl lg:text-4xl text-customRed font-bold mb-10">
            Tuning
          </h2>
          <h3 className="sm:text-5xl xl:text-6xl font-black text-articleHead mb-20">
            See how we make our cars perfect
          </h3>
          <Divider size="194px" orientation="horizontal" />
          <p className="mt-14 lg:text-xl md:text-lg sm:text-base font-medium text-articleHead">
            We only deal with the best so you dont need to worry if your car
            will be in good hands, we make sure any car service on this website
            is the best of the best
          </p>
        </div>
        <div className="grid grid-cols-2 basis-6/12 self-start">
          <div className="overflow-hidden">
            <img
              src={tuning1}
              alt="tuning1"
              className="w-full grayscale hover:grayscale-0 hover:scale-[1.2] transition duration-300"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src={tuning2}
              alt="tuning2"
              className="w-full grayscale hover:grayscale-0 hover:scale-[1.2] transition duration-300"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src={tuning3}
              alt="tuning3"
              className="w-full grayscale hover:grayscale-0 hover:scale-[1.2] transition duration-300"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src={tuning4}
              alt="tuning4"
              className="w-full grayscale hover:grayscale-0 hover:scale-[1.2] transition duration-300"
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="basis-2/4">
          <img src={tuning5} alt="tuning5" className="ml-auto" />
        </div>
        <Divider size="330px" orientation="vertical" />
        <div className="flex-1 flex items-center">
          <div className="ml-[12vw] text-center">
            <UserIcon className="h-14 w-14 text-customRed mx-auto" />
            <span className="text-[#444] lg:text-5xl sm:text-4xl block mt-5 mb-3">
              55
            </span>
            <p className="text-articleHead text-xl font-medium">Services</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default TuningArticle;
