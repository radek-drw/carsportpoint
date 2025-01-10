import React from "react";

import Divider from "../../common/Divider";

import aboutMain1 from "../../../assets/images/aboutmain1.jpg";
import decorativeA from "../../../assets/images/section_bg1.png";
import wheelBackground from "../../../assets/images/home_tuning_about1.png";

const AboutUsArticle = () => {
  return (
    <article>
      <div className="flex">
        <div className="flex basis-6/12 justify-center self-start">
          <img src={aboutMain1} alt="Modified cars in garage" />
        </div>
        <div className="basis-6/12 px-[4vw] pt-[70px]">
          <h1 className="mb-9 text-2xl font-bold text-customRed sm:text-3xl md:text-4xl">
            About us
          </h1>
          <h2 className="mb-20 text-4xl font-black tracking-wide text-articleHead sm:text-5xl lg:text-6xl">
            We are CarSportPoint <br />
            We provide
            <span className="text-customRed"> engine tuning & remaps</span>
          </h2>
          <Divider size="194px" orientation="horizontal" />
          <h3 className="mt-14 pr-[39%] text-sm font-medium text-articleHead sm:text-base md:text-lg lg:text-xl">
            Vivamus nec leo enim. Aliquam erat volutpat. Sed et auctor felis,
            quis consectetur justo. Sed et interdum turpis? Ut gravida ut purus
            vel luctus? Duis volutpat.
          </h3>
        </div>
      </div>
      <div
        className="bg-no-repeat"
        style={{
          backgroundImage: `url(${decorativeA}), url(${wheelBackground})`,
          backgroundPosition: "left, right",
        }}
      >
        <div className="mx-auto mt-20 flex w-6/12">
          <div className="basis-6/12 px-[2vw]">
            <h3 className="pb-4 text-sm font-medium text-articleHead sm:text-base md:text-lg lg:text-xl">
              Aenean aliquet facilisis arcu, at tristique arcu vestibulum nec.
              Fusce tincidunt ante et nunc posuere posuere. Donec venenatis mi
              eleifend, laoreet nulla metus.
            </h3>
            <p className="text-sm text-customGrey lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>
          <div className="basis-6/12 px-[2vw] pt-36">
            <p className="pb-4 text-sm text-customGrey lg:text-lg">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem ape.
            </p>
            <p className="text-sm text-customGrey lg:text-lg">
              Riam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
              quia consequuntur magni dolores eos qui ratione voluptatem sequi
              nesciunt. Neque empora incidunt ut labore et dolore magnam aliquam
              quaerat voluptatem.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default AboutUsArticle;
