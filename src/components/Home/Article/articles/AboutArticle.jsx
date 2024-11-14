import React from "react";

const AboutArticle = () => {
  return (
    <article>
      <div className="flex">
        <div className="basis-[66%] pt-40">
          <h3 className="text-customRed sm:text-3xl lg:text-4xl font-bold mb-4">
            About time you have found us.
          </h3>
          <h2 className="font-black text-articleHead sm:text-5xl xl:text-6xl tracking-wide mb-4">
            Welcome to Carsportpoint.ie
          </h2>
          <p>
            <strong className="text-customGrey text-sm">
              A place where you can get in touch with all of the best car
              services in Ireland
            </strong>
          </p>
        </div>
        <div className="flex-1">
          <h3 className="text-customRed sm:text-3xl lg:text-4xl font-bold mb-4">
            website for all
          </h3>
          <h4 className="text-articleTxt sm:text-base xl:text-xl">
            There is no Need to look around and read opinions on car services we
            do it all here for you. here you will only find the best of the
            best. we make it as easy as it can be for people that are new or
            petrol heads as we like to call them.
          </h4>
        </div>
      </div>
    </article>
  );
};

export default AboutArticle;
