import React from "react";

import Divider from "./Divider";

import engineImg from "../../src/assets/images/home_tuning_offer1.jpg";

const Partners = () => {
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
        <div></div>
      </article>
    </section>
  );
};
export default Partners;
