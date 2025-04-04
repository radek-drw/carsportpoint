import React from "react";

import ResponsiveImage from "@common/ResponsiveImage";
import Divider from "@common/Divider";

import modifiedCarsInGarage_480w from "@images/modified-cars-garage-480w.webp";
import modifiedCarsInGarage_640w from "@images/modified-cars-garage-640w.webp";
import modifiedCarsInGarage_768w from "@images/modified-cars-garage-768w.webp";
import modifiedCarsInGarage_960w from "@images/modified-cars-garage-960w.webp";
import modifiedCarsInGarage_960w_fallback from "@images/modified-cars-garage-960w-fallback.jpg";
import decorativeA from "@images/section_bg1.png";
import decorativeWheel from "@images/home_tuning_about1.png";

const AboutUsArticle = () => {
  return (
    <article>
      <div className="flex w-full flex-col md:flex-row">
        <div className="flex w-full justify-center md:basis-1/2">
          {/* prettier-ignore */}
          <ResponsiveImage
            sources={[
              { srcSet: modifiedCarsInGarage_480w, media: "(max-width: 480px)"},
              { srcSet: modifiedCarsInGarage_640w, media: "(max-width: 640px)"},
              { srcSet: modifiedCarsInGarage_768w, media: "(max-width: 768px)"},
              { srcSet: modifiedCarsInGarage_640w, media: "(max-width: 1280px)"},
              { srcSet: modifiedCarsInGarage_960w, media: "(min-width: 1281px)"},
            ]}
            fallback={modifiedCarsInGarage_960w_fallback}
            alt="Modified cars in workshop garage"
          />
        </div>
        <div className="w-full px-mobile-padding pt-[70px] md:basis-1/2 md:px-[4vw]">
          <h1 className="mb-9 text-2xl font-bold text-customRed sm:text-3xl md:text-4xl">
            About us
          </h1>
          <h2 className="mb-20 text-4xl font-black tracking-wide text-articleHead sm:text-5xl lg:text-6xl">
            We are CarSportPoint <br />
            We provide
            <span className="text-customRed"> engine tuning & remaps</span>
          </h2>
          <Divider size="194px" orientation="horizontal" />
          <h3 className="mt-14 text-sm font-medium text-articleHead sm:text-base md:pr-[39%] md:text-lg lg:text-xl">
            Vivamus nec leo enim. Aliquam erat volutpat. Sed et auctor felis,
            quis consectetur justo. Sed et interdum turpis? Ut gravida ut purus
            vel luctus? Duis volutpat.
          </h3>
        </div>
      </div>

      <div className="relative mt-14 flex flex-col md:mt-20 md:flex-row">
        <div
          className="absolute top-1/2 h-72 w-full -translate-y-1/2 bg-no-repeat opacity-70 md:static md:h-auto md:basis-1/5 md:translate-y-0 md:opacity-100"
          style={{
            backgroundImage: `url(${decorativeA})`,
            backgroundPosition: "left",
            backgroundSize: "contain",
          }}
        ></div>

        <div className="flex flex-1 flex-col px-mobile-padding md:flex-row md:px-[2vw]">
          <div className="md:basis-1/2 md:px-[2vw]">
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
          <div className="pt-10 md:basis-1/2 md:px-[2vw] md:pt-36">
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

        <div
          className="absolute -bottom-24 h-40 w-full bg-no-repeat opacity-40 md:static md:h-auto md:basis-1/5 md:opacity-100"
          style={{
            backgroundImage: `url(${decorativeWheel})`,
            backgroundPosition: "right",
            backgroundSize: "contain",
          }}
        ></div>
      </div>
    </article>
  );
};

export default AboutUsArticle;
