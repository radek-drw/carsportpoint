import React from "react";

import Divider from "../../Divider";

import aboutMain1 from "../../../assets/images/aboutmain1.jpg";
import sectionBg1 from "../../../assets/images/section_bg1.png";
import homeTuningAbout1 from "../../../assets/images/home_tuning_about1.png";

const AboutUs = () => {
  return (
    <article>
      <div className="flex">
        <div className="basis-6/12 flex justify-center self-start">
          <img src={aboutMain1} alt="Modified cars in garage" />
        </div>
        <div className="pt-[70px] px-[4vw] basis-6/12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-9 text-customRed">
            About us
          </h3>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-articleHead tracking-wide mb-20">
            We are CarSportPoint <br />
            We provide
            <span className="text-customRed">engine tuning & remaps</span>
          </h2>
          <Divider size="194px" orientation="horizontal" />
          <h4 className="text-sm sm:text-base md:text-lg lg:text-xl mt-14 pr-[39%] font-medium text-articleHead">
            Vivamus nec leo enim. Aliquam erat volutpat. Sed et auctor felis,
            quis consectetur justo. Sed et interdum turpis? Ut gravida ut purus
            vel luctus? Duis volutpat.
          </h4>
        </div>
      </div>
      <div>
        <div>
          <img src={sectionBg1} alt="Logo A" className="absolute" />
        </div>
        <div>
          <img
            src={homeTuningAbout1}
            alt="Wheel"
            className="absolute right-0"
          />
        </div>
        <div className="flex w-6/12 mx-auto mt-20">
          <div className="basis-6/12 px-[2vw]">
            <h4 className="text-sm sm:text-base md:text-lg lg:text-xl pb-4 font-medium text-articleHead">
              Aenean aliquet facilisis arcu, at tristique arcu vestibulum nec.
              Fusce tincidunt ante et nunc posuere posuere. Donec venenatis mi
              eleifend, laoreet nulla metus.
            </h4>
            <p className="text-sm lg:text-lg text-customGrey">
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
          <div className="basis-6/12 pt-36 px-[2vw]">
            <p className="text-sm lg:text-lg pb-4 text-customGrey">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem ape.
            </p>
            <p className="text-sm lg:text-lg text-customGrey">
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

export default AboutUs;
