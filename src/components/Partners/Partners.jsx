import React from "react";

import Divider from "../Divider";

import engineImg from "../../../src/assets/images/home_tuning_offer1.jpg";
import aCunningham from "../../../src/assets/images/A-Cunningham-1024x768-1.png";
import abWight from "../../../src/assets/images/AB-wight-1024x768-1.png";
import elliotHenderson from "../../../src/assets/images/Elliot-Henderson-1024x768-1.png";
import galaHarriers from "../../../src/assets/images/Gala-Harriers-1024x768-1.png";
import marshallTractors from "../../../src/assets/images/Marshall-Tractors-1024x768-1.png";
import motoCarSales from "../../../src/assets/images/moto-car-sales-1024x768-1.png";
import peterHogg from "../../../src/assets/images/Peter-Hogg-1024x768-1.png";
import spg from "../../../src/assets/images/spg-fire-and-security-1024x768-1.png";
import starvin from "../../../src/assets/images/starvin-1024x768-1.png";
import monteCassino from "../../../src/assets/images/monte-cassino-1024x768-1.png";

const Partners = () => {
  const images = [
    aCunningham,
    abWight,
    elliotHenderson,
    galaHarriers,
    marshallTractors,
    motoCarSales,
    peterHogg,
    spg,
    starvin,
    monteCassino,
  ];
  return (
    <section>
      <article>
        <div className="flex pl-[4vw]">
          <div className="basis-1/2 pt-36 pr-[3vw]">
            <h3 className="text-2xl sm:text-3xl md:text-4xl uppercase font-bold mb-9 text-customRed">
              our partners
            </h3>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-articleHead tracking-wide mb-20">
              We cooperate with the best in the industry
            </h2>
            <Divider size="194px" orientation="horizontal" />
            <h4 className="text-sm sm:text-base md:text-lg lg:text-xl mt-14 mb-4 pr-[46%] font-medium text-articleHead">
              Mauris vel tellus in urna volutpat tempus? Proin viverra varius
              massa nec commodo. Cras aliquet leo ut tellus.
            </h4>
            <p className="text-sm pr-[46%] text-customGrey">
              Proin ac leo eu nisi congue ornare eget lobortis ante. Nunc
              fermentum elementum felis quis dignissim. Aliquam vitae elit
              tellus. Nunc ac est ut lorem cras amet.
            </p>
          </div>
          <Divider size="128px" orientation="vertical" />
          <div className="basis-1/2 pl-[2vw] pt-12">
            <img src={engineImg} alt="Car engine" className="ml-auto" />
          </div>
        </div>
        <div className="grid grid-cols-5 gap-4 mx-auto xl:max-w-[1260px] lg:max-w-[1004px] md:max-w-[748px] pt-5 pb-10">
          {images.map((src, index) => (
            <div key={index} className="flex justify-center items-center">
              <img src={src} alt="Our partners" />
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};
export default Partners;
