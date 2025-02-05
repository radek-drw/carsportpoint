import React from "react";

import ResponsiveImage from "@common/ResponsiveImage";
import Divider from "@common/Divider";

import carEngine_480w from "@images/car-engine-480w.webp";
import carEngine_640w from "@images/car-engine-640w.webp";
import carEngine_768w from "@images/car-engine-768w.webp";
import carEngine_960w from "@images/car-engine-960w.webp";
import carEngine_960w_fallback from "@images/car-engine-960w-fallback.jpg";

import aCunningham_240w from "@images/a-cunningham-240w.webp";
import aCunningham_484w from "@images/a-cunningham-484w.webp";
import aCunningham_484w_fallback from "@images/a-cunningham-484w-fallback.jpg";
import abWight_240w from "@images/ab-wight-240w.webp";
import abWight_484w from "@images/ab-wight-484w.webp";
import abWight_484w_fallback from "@images/ab-wight-484w-fallback.jpg";
import elliotHenderson_240w from "@images/elliot-henderson-240w.webp";
import elliotHenderson_484w from "@images/elliot-henderson-484w.webp";
import elliotHenderson_484w_fallback from "@images/elliot-henderson-484w-fallback.jpg";
import galaHarriers_240w from "@images/gala-harriers-240w.webp";
import galaHarriers_484w from "@images/gala-harriers-484w.webp";
import galaHarriers_484w_fallback from "@images/gala-harriers-484w-fallback.jpg";
import marshallTractors_240w from "@images/marshall-tractors-240w.webp";
import marshallTractors_484w from "@images/marshall-tractors-484w.webp";
import marshallTractors_484w_fallback from "@images/marshall-tractors-484w-fallback.jpg";
import motoCarSales_240w from "@images/moto-car-sales-240w.webp";
import motoCarSales_484w from "@images/moto-car-sales-484w.webp";
import motoCarSales_484w_fallback from "@images/moto-car-sales-484w-fallback.jpg";
import peterHogg_240w from "@images/peter-hogg-240w.webp";
import peterHogg_484w from "@images/peter-hogg-484w.webp";
import peterHogg_484w_fallback from "@images/peter-hogg-484w-fallback.jpg";
import spg_240w from "@images/spg-fire-and-security-240w.webp";
import spg_484w from "@images/spg-fire-and-security-484w.webp";
import spg_484w_fallback from "@images/spg-fire-and-security-484w-fallback.jpg";
import starvin_240w from "@images/starvin-240w.webp";
import starvin_484w from "@images/starvin-484w.webp";
import starvin_484w_fallback from "@images/starvin-484w-fallback.jpg";
import monteCassino_240w from "@images/monte-cassino-240w.webp";
import monteCassino_484w from "@images/monte-cassino-484w.webp";
import monteCassino_484w_fallback from "@images/monte-cassino-484w-fallback.jpg";

const PartnersPage = () => {
  const partners = [
    {
      src240w: aCunningham_240w,
      src484w: aCunningham_484w,
      fallback: aCunningham_484w_fallback,
      name: "A. Cunningham",
    },
    {
      src240w: abWight_240w,
      src484w: abWight_484w,
      fallback: abWight_484w_fallback,
      name: "AB Wight",
    },
    {
      src240w: elliotHenderson_240w,
      src484w: elliotHenderson_484w,
      fallback: elliotHenderson_484w_fallback,
      name: "Elliot Henderson",
    },
    {
      src240w: galaHarriers_240w,
      src484w: galaHarriers_484w,
      fallback: galaHarriers_484w_fallback,
      name: "Gala Harriers",
    },
    {
      src240w: marshallTractors_240w,
      src484w: marshallTractors_484w,
      fallback: marshallTractors_484w_fallback,
      name: "Marshall Tractors",
    },
    {
      src240w: motoCarSales_240w,
      src484w: motoCarSales_484w,
      fallback: motoCarSales_484w_fallback,
      name: "Moto Car Sales",
    },
    {
      src240w: peterHogg_240w,
      src484w: peterHogg_484w,
      fallback: peterHogg_484w_fallback,
      name: "Peter Hogg",
    },
    {
      src240w: spg_240w,
      src484w: spg_484w,
      fallback: spg_484w_fallback,
      name: "SPG Fire and Security",
    },
    {
      src240w: starvin_240w,
      src484w: starvin_484w,
      fallback: starvin_484w_fallback,
      name: "Starvin",
    },
    {
      src240w: monteCassino_240w,
      src484w: monteCassino_484w,
      fallback: monteCassino_484w_fallback,
      name: "Monte Cassino",
    },
  ];

  return (
    <section>
      <article>
        <div className="absolute left-1/2 -translate-x-1/2">
          <Divider size="128px" orientation="vertical" />
        </div>
        <div className="flex flex-col md:flex-row md:pl-[4vw]">
          <div className="px-mobile-padding basis-1/2 pt-32 md:pl-0 md:pr-[3vw] md:pt-36">
            <h1 className="mb-9 text-2xl font-bold uppercase text-customRed sm:text-3xl md:text-4xl">
              our partners
            </h1>
            <h2 className="mb-20 text-4xl font-black tracking-wide text-articleHead sm:text-5xl lg:text-6xl">
              We cooperate with the best in the industry
            </h2>
            <Divider size="194px" orientation="horizontal" />
            <h3 className="mb-4 mt-14 pr-[40%] text-sm font-medium text-articleHead sm:text-base md:pr-[46%] md:text-lg lg:text-xl">
              Mauris vel tellus in urna volutpat tempus? Proin viverra varius
              massa nec commodo. Cras aliquet leo ut tellus.
            </h3>
            <p className="pr-[40%] text-sm text-customGrey md:pr-[46%]">
              Proin ac leo eu nisi congue ornare eget lobortis ante. Nunc
              fermentum elementum felis quis dignissim. Aliquam vitae elit
              tellus. Nunc ac est ut lorem cras amet.
            </p>
          </div>
          <div className="basis-1/2 pl-[2vw] pt-6 md:pt-12">
            <ResponsiveImage
              sources={[
                { srcSet: carEngine_480w, media: "(max-width: 480px)" },
                { srcSet: carEngine_640w, media: "(max-width: 640px)" },
                { srcSet: carEngine_768w, media: "(max-width: 768px)" },
                { srcSet: carEngine_640w, media: "(max-width: 1280px)" },
                { srcSet: carEngine_960w, media: "(min-width: 1281px)" },
              ]}
              fallback={carEngine_960w_fallback}
              alt="Car engine"
            />
          </div>
        </div>

        {/* PARTNERS  */}
        <div className="mx-auto grid grid-cols-1 gap-4 pb-10 pt-5 md:max-w-[748px] md:grid-cols-5 lg:max-w-[1004px] xl:max-w-[1260px]">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="mx-auto flex w-[90%] items-center justify-center md:w-auto"
            >
              <ResponsiveImage
                sources={[
                  { srcSet: partner.src484w, media: "(max-width: 768px)" },
                  { srcSet: partner.src240w, media: "(min-width: 769px)" },
                ]}
                fallback={partner.fallback}
                alt={`Logo of ${partner.name}`}
              />
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};
export default PartnersPage;
