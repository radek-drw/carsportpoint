import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaUser } from "react-icons/fa";
import Divider from "@common/Divider";
import WorkshopImage1 from "@images/workshop-image-1.webp";
import WorkshopImage2 from "@images/workshop-image-2.webp";
import WorkshopImage3 from "@images/workshop-image-3.webp";
import WorkshopImage4 from "@images/workshop-image-4.webp";
import decorativeCarAndParts from "@images/decorative-car-and-parts.png";

const workshopImages = [
  {
    src: WorkshopImage1,
    alt: "Car on a dynamometer during performance testing",
  },
  {
    src: WorkshopImage2,
    alt: "Performance car on a dyno testing horsepower",
  },
  {
    src: WorkshopImage3,
    alt: "Equipment in a car tuning workshop",
  },
  {
    src: WorkshopImage4,
    alt: "Vehicle on a dyno for performance analysis",
  },
];

const TuningArticle = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <article className="mt-36">
      <div className="flex flex-col md:flex-row">
        <div className="px-mobile-padding mb-10 w-full md:mb-0 md:basis-1/2 md:pl-[20vw] md:pr-16">
          <h2 className="mb-10 text-2xl font-bold text-customRed sm:text-3xl md:text-4xl">
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
        <div className="grid basis-1/2 grid-cols-2 self-start">
          {workshopImages.map((image, index) => (
            <div key={index} className="overflow-hidden">
              <picture>
                <source srcSet={image.src} type="image/webp" />
                <img
                  src={image.src.replace(".webp", ".jpg")}
                  alt={image.alt}
                  className="w-full grayscale transition duration-300 hover:scale-[1.2] hover:grayscale-0"
                  loading="lazy"
                />
              </picture>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 flex md:mt-0">
        <div className="basis-1/2">
          <img src={decorativeCarAndParts} alt="" className="ml-auto" />
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
