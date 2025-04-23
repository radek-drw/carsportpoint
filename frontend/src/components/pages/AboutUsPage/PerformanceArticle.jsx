import React from "react";

import ResponsiveImage from "@common/ResponsiveImage";
import Divider from "@common/Divider";

import powerBoostDashboard_480w from "@images/power-boost-dashboard-480w.webp";
import powerBoostDashboard_1000w from "@images/power-boost-dashboard-1000w.webp";
import powerBoostDashboard_1000w_fallback from "@images/power-boost-dashboard-1000w-fallback.jpg";

const PerformanceArticle = () => {
  return (
    <article className="mt-28 flex flex-col md:flex-row md:px-[2vw]">
      <div className="mb-14 basis-[35%] pl-5 md:mb-0 md:pl-0">
        <h2 className="mb-20 text-4xl font-black tracking-wide text-articleHead sm:text-5xl lg:text-6xl">
          Better <br />
          <span className="text-customRed">performance</span>
        </h2>
        <Divider size="194px" orientation="horizontal" />
      </div>
      <div className="mb-14 basis-[25%] px-mobile-padding md:mb-0 md:px-[2vw]">
        <h3 className="pb-4 text-sm font-medium text-articleHead sm:text-base md:text-lg lg:text-xl">
          Curabitur ullamcorper vehicula metus quis laoreet! Maecenas non metus
          enim. Aliquam eu hendrerit ligula, sed malesuada nisl! Nam sed lacus
          auctor viverra fusce.
        </h3>
        <p className="text-sm text-customGrey">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia.
        </p>
      </div>
      <div className="basis-[40%]">
        <ResponsiveImage
          sources={[
            { srcSet: powerBoostDashboard_480w, media: "(max-width: 480px)" },
            { srcSet: powerBoostDashboard_1000w, media: "(min-width: 481px)" },
          ]}
          fallback={powerBoostDashboard_1000w_fallback}
          alt="Dashboard counter showing power boost"
          lazy={true}
        />
      </div>
    </article>
  );
};

export default PerformanceArticle;
