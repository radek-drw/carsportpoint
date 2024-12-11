import React from "react";

import Divider from "./Divider";

import engineImg from "../../src/assets/images/home_tuning_offer1.jpg";

const Partners = () => {
  return (
    <section>
      <article>
        <div>
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl uppercase font-bold mb-9 text-customRed">
              our partners
            </h3>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-articleHead tracking-wide mb-20">
              We cooperate with the best in the industry
            </h2>
            <Divider size="194px" orientation="horizontal" />
            <h4 className="text-sm sm:text-base md:text-lg lg:text-xl mt-14 pr-[39%] font-medium text-articleHead">
              Mauris vel tellus in urna volutpat tempus? Proin viverra varius
              massa nec commodo. Cras aliquet leo ut tellus.
            </h4>
            <p className="text-sm text-customGrey">
              Proin ac leo eu nisi congue ornare eget lobortis ante. Nunc
              fermentum elementum felis quis dignissim. Aliquam vitae elit
              tellus. Nunc ac est ut lorem cras amet.
            </p>
          </div>
          <Divider size="100px" orientation="vertical" />
          <div>
            <img src={engineImg} alt="Car engine" />
          </div>
        </div>
        <div></div>
      </article>
    </section>
  );
};
export default Partners;
