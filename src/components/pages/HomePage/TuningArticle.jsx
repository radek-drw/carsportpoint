import React from "react";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaUser } from "react-icons/fa";

import Divider from "../../common/Divider";

import tuning1 from "../../../assets/images/carsportpoint-tuning-1.jpg";
import tuning2 from "../../../assets/images/carsportpoint-tuning-2.png";
import tuning3 from "../../../assets/images/carsportpoint-tuning-3.jpg";
import tuning4 from "../../../assets/images/carsportpoint-tuning-4.jpg";
import tuning5 from "../../../assets/images/home-tuning-counterbg.png";

const TuningArticle = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <article className="mt-36">
      <div className="flex">
        <div className="basis-6/12 pl-[20vw] pr-16">
          <h2 className="mb-10 text-xl font-bold text-customRed sm:text-3xl md:text-4xl">
            Tuning
          </h2>
          <h3 className="mb-20 text-4xl font-black text-articleHead sm:text-5xl lg:text-6xl">
            See how we make our cars perfect
          </h3>
          <Divider size="194px" orientation="horizontal" />
          <p className="mt-14 text-sm font-medium text-articleHead sm:text-base md:text-lg lg:text-xl">
            We only deal with the best so you dont need to worry if your car
            will be in good hands, we make sure any car service on this website
            is the best of the best
          </p>
        </div>
        <div className="grid basis-6/12 grid-cols-2 self-start">
          <div className="overflow-hidden">
            <img
              src={tuning1}
              alt="tuning1"
              className="w-full grayscale transition duration-300 hover:scale-[1.2] hover:grayscale-0"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src={tuning2}
              alt="tuning2"
              className="w-full grayscale transition duration-300 hover:scale-[1.2] hover:grayscale-0"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src={tuning3}
              alt="tuning3"
              className="w-full grayscale transition duration-300 hover:scale-[1.2] hover:grayscale-0"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src={tuning4}
              alt="tuning4"
              className="w-full grayscale transition duration-300 hover:scale-[1.2] hover:grayscale-0"
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="basis-2/4">
          <img src={tuning5} alt="tuning5" className="ml-auto" />
        </div>
        <Divider size="330px" orientation="vertical" />
        <div className="flex flex-1 items-center">
          <div className="ml-[12vw] text-center">
            <FaUser size={56} className="mx-auto text-customRed" />
            <div ref={ref}>
              {inView && (
                <CountUp
                  start={0}
                  end={55}
                  duration={3}
                  className="mb-3 mt-5 block text-[#444] sm:text-4xl lg:text-5xl"
                />
              )}
            </div>
            <p className="text-lg font-medium text-articleHead md:text-xl">
              Services
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default TuningArticle;
