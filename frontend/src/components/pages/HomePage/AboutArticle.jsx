import Divider from '@common/Divider';
import CarEngineCloseup from '@images/car-engine-closeup.webp';
import decorativeA from '@images/section_bg1.png';

import CircularProgress from './ProgressCircle';

const AboutArticle = () => {
  return (
    <article
      className="px-mobile-padding bg-no-repeat md:px-[5vw] lg:px-[9vw] xl:px-[14vw] 2xl:px-[20vw]"
      style={{ backgroundImage: `url(${decorativeA})` }}
    >
      <div className="mb-32 flex flex-col md:flex-row">
        <div className="basis-[66%] pr-6 pt-40">
          <h3 className="text-customRed mb-9 text-2xl font-bold sm:text-3xl md:text-4xl">
            About time you have found us.
          </h3>
          <h1 className="text-articleHead mb-4 text-4xl font-black tracking-wide sm:text-5xl lg:text-6xl">
            Welcome to Carsportpoint.ie
          </h1>
          <p className="text-customGrey mb-16 text-sm md:ml-10">
            <strong>
              A place where you can get in touch with all of the best car services in Ireland
            </strong>
          </p>
          <Divider size="194px" orientation="horizontal" />
        </div>
        <div className="flex-1">
          <div className="hidden md:block">
            <Divider size="270px" orientation="vertical" />
          </div>
          <h2 className="text-customRed mb-4 mt-28 text-2xl font-bold sm:text-3xl md:mt-10 lg:text-4xl">
            website for all
          </h2>
          <h3 className="text-articleTxt text-sm font-medium sm:text-base xl:text-xl">
            There is no Need to look around and read opinions on car services we do it all here for
            you. here you will only find the best of the best. we make it as easy as it can be for
            people that are new or petrol heads as we like to call them.
          </h3>
        </div>
      </div>
      {/* ECU CUSTOM REMAPS */}
      <div className="grid md:grid-cols-3">
        <div className="bg-customRed h-[215px] p-10 md:h-[274px]">
          <h3 className="text-center text-3xl font-bold uppercase text-white md:text-left lg:text-4xl">
            ecu custom remaps
          </h3>
        </div>
        <div className="mt-40 bg-[#e7ecef] px-10 py-20 text-center">
          <CircularProgress />
          <p className="text-articleHead pb-6 text-xl font-medium sm:text-2xl">
            better performance
          </p>
          <p className="text-customGrey text-sm">
            We dont only show you where to find all your car needs we aslo supply custom ECU
            programs for garages all over Ireland, if this is something that interests you, contact
            us
          </p>
        </div>
        <div className="mt-20">
          <picture>
            <source srcSet={CarEngineCloseup} type="image/webp" />
            <img
              src={CarEngineCloseup.replace('.webp', '.jpg')}
              alt="Car engine prepared for chip tuning"
              className="w-full"
              loading="lazy"
            />
          </picture>
        </div>
      </div>
    </article>
  );
};

export default AboutArticle;
