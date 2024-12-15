import React from "react";

import Divider from "../Divider";

const Catalogue = () => {
  return (
    <section className="pt-16">
      <article>
        <div className="xl:px-24 lg:px-20 md:px-14 mx-auto xl:max-w-[1224px] lg:max-w-[968px] md:max-w-[692px]">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-9 text-customRed">
            Tuning Catalogue
          </h3>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-articleHead tracking-wide mb-20">
            The best tuning companies in Ireland
          </h2>
          <Divider size="194px" orientation="horizontal" />
          <div className=" flex mt-20">
            <div className="basis-1/2 pl-4 pr-2">
              <h4 className="text-sm sm:text-base md:text-lg lg:text-xl pb-4 font-medium text-articleHead leading-5 sm:leading-5 md:leading-5 lg:leading-6">
                Nam ac diam ipsum. pretium scelerisque eleifend justo vel
                bibendum sapien massa ac turpis faucibus orci luctus non,
                consectetuer lobortis quis eleifend justo vel bibendum.
              </h4>
              <p className="text-sm lg:text-lg text-customGrey pb-4 leading-6">
                Integer tristique tortor ut diam cursus, non ornare nisi
                commodo! Ut gravida, ante in rhoncus ullamcorper, quam arcu.
              </p>
              <p className="text-sm lg:text-lg text-customGrey pb-4 leading-6">
                Vestibulum dapibus, mauris nec malesuada fames ac turpis velit,
                rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac
                ipsum. Integer aliquam purus. Quisque lorem tortor fringilla.
              </p>
            </div>
            <div className="basis-1/2 pl-2 pt-7">
              <p className="text-sm lg:text-lg text-customGrey pb-4 leading-6">
                Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse
                a pellentesque dui, non felis. Maecenas malesuada elit lectus
                felis, malesuada ultricies. Curabitur et ligula. Ut molestie a,
                ultricies porta urna. Vestibulum commodo volutpat a, convallis
                ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque
                facilisis. Nulla imperdiet sit amet.
              </p>
              <p className="text-sm lg:text-lg text-customGrey pb-4 leading-6">
                Mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus
                et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer
                aliquam purus. Quisque lorem tortor fringilla sed, vestibulum
                id.
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
export default Catalogue;
