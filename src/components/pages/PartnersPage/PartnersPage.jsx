import React from "react";

import Divider from "../../common/Divider";

import carEngine from "../../../../src/assets/images/home_tuning_offer1.jpg";

import aCunningham from "../../../../src/assets/images/A-Cunningham-1024x768-1.png";
import abWight from "../../../../src/assets/images/AB-wight-1024x768-1.png";
import elliotHenderson from "../../../../src/assets/images/Elliot-Henderson-1024x768-1.png";
import galaHarriers from "../../../../src/assets/images/Gala-Harriers-1024x768-1.png";
import marshallTractors from "../../../../src/assets/images/Marshall-Tractors-1024x768-1.png";
import motoCarSales from "../../../../src/assets/images/moto-car-sales-1024x768-1.png";
import peterHogg from "../../../../src/assets/images/Peter-Hogg-1024x768-1.png";
import spg from "../../../../src/assets/images/spg-fire-and-security-1024x768-1.png";
import starvin from "../../../../src/assets/images/starvin-1024x768-1.png";
import monteCassino from "../../../../src/assets/images/monte-cassino-1024x768-1.png";

const PartnersPage = () => {
  const partners = [
    { src: aCunningham, name: "A. Cunningham" },
    { src: abWight, name: "AB Wight" },
    { src: elliotHenderson, name: "Elliot Henderson" },
    { src: galaHarriers, name: "Gala Harriers" },
    { src: marshallTractors, name: "Marshall Tractors" },
    { src: motoCarSales, name: "Moto Car Sales" },
    { src: peterHogg, name: "Peter Hogg" },
    { src: spg, name: "SPG Fire and Security" },
    { src: starvin, name: "Starvin" },
    { src: monteCassino, name: "Monte Cassino" },
  ];
  return (
    <section>
      <article>
        <div className="flex pl-[4vw]">
          <div className="basis-1/2 pr-[3vw] pt-36">
            <h1 className="mb-9 text-2xl font-bold uppercase text-customRed sm:text-3xl md:text-4xl">
              our partners
            </h1>
            <h2 className="mb-20 text-4xl font-black tracking-wide text-articleHead sm:text-5xl lg:text-6xl">
              We cooperate with the best in the industry
            </h2>
            <Divider size="194px" orientation="horizontal" />
            <h3 className="mb-4 mt-14 pr-[46%] text-sm font-medium text-articleHead sm:text-base md:text-lg lg:text-xl">
              Mauris vel tellus in urna volutpat tempus? Proin viverra varius
              massa nec commodo. Cras aliquet leo ut tellus.
            </h3>
            <p className="pr-[46%] text-sm text-customGrey">
              Proin ac leo eu nisi congue ornare eget lobortis ante. Nunc
              fermentum elementum felis quis dignissim. Aliquam vitae elit
              tellus. Nunc ac est ut lorem cras amet.
            </p>
          </div>
          <Divider size="128px" orientation="vertical" />
          <figure className="basis-1/2 pl-[2vw] pt-12">
            <img src={carEngine} alt="Car engine" className="ml-auto" />
          </figure>
        </div>
        <div className="mx-auto grid grid-cols-5 gap-4 pb-10 pt-5 md:max-w-[748px] lg:max-w-[1004px] xl:max-w-[1260px]">
          {partners.map((partner, index) => (
            <figure key={index} className="flex items-center justify-center">
              <img src={partner.src} alt={`Logo of ${partner.name}`} />
            </figure>
          ))}
        </div>
      </article>
    </section>
  );
};
export default PartnersPage;
