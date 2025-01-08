import React from "react";

import Divider from "../../common/Divider";

const CatalogueHeader = () => {
  return (
    <article>
      <div className="mx-auto md:max-w-[692px] md:px-14 lg:max-w-[968px] lg:px-20 xl:max-w-[1224px] xl:px-24">
        <h1
          className="mb-9 text-2xl font-bold text-customRed sm:text-3xl md:text-4xl"
          id="catalogue-section"
        >
          Tuning Catalogue
        </h1>
        <h2
          className="mb-20 text-4xl font-black tracking-wide text-articleHead sm:text-5xl lg:text-6xl"
          aria-describedby="catalogue-desc"
        >
          The best tuning companies in Ireland
        </h2>
        <Divider size="194px" orientation="horizontal" />
        <div className="mt-20 flex">
          <div className="basis-1/2 pl-4 pr-2">
            <h4
              className="pb-4 text-sm font-medium leading-5 text-articleHead sm:text-base sm:leading-5 md:text-lg md:leading-5 lg:text-xl lg:leading-6"
              id="catalogue-desc"
            >
              Nam ac diam ipsum. pretium scelerisque eleifend justo vel bibendum
              sapien massa ac turpis faucibus orci luctus non, consectetuer
              lobortis quis eleifend justo vel bibendum.
            </h4>
            <p className="pb-4 text-sm leading-6 text-customGrey lg:text-lg">
              Integer tristique tortor ut diam cursus, non ornare nisi commodo!
              Ut gravida, ante in rhoncus ullamcorper, quam arcu.
            </p>
            <p className="pb-4 text-sm leading-6 text-customGrey lg:text-lg">
              Vestibulum dapibus, mauris nec malesuada fames ac turpis velit,
              rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac
              ipsum. Integer aliquam purus. Quisque lorem tortor fringilla.
            </p>
          </div>
          <div className="basis-1/2 pl-2 pt-7">
            <p className="pb-4 text-sm leading-6 text-customGrey lg:text-lg">
              Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a
              pellentesque dui, non felis. Maecenas malesuada elit lectus felis,
              malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies
              porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet
              enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla
              imperdiet sit amet.
            </p>
            <p className="pb-4 text-sm leading-6 text-customGrey lg:text-lg">
              Mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et
              interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam
              purus. Quisque lorem tortor fringilla sed, vestibulum id.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CatalogueHeader;
