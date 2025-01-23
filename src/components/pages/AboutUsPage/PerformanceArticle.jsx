import React from "react";

import Divider from "../../common/Divider";
import ResponsiveImage from "../../common/ResponsiveImage";

import powerBoostDashboard480w from "../../../assets/images/power-boost-dashboard-480w.webp";
import powerBoostDashboard640w from "../../../assets/images/power-boost-dashboard-640w.webp";
import powerBoostDashboard768w from "../../../assets/images/power-boost-dashboard-768w.webp";
import powerBoostDashboard1000w from "../../../assets/images/power-boost-dashboard-1000w.webp";
import powerBoostDashboard1000wFallback from "../../../assets/images/power-boost-dashboard-1000w-fallback.jpg";

const PerformanceArticle = () => {
  return (
    <article className="mt-28 flex px-[2vw]">
      <div className="basis-[35%]">
        <h2 className="mb-20 text-4xl font-black tracking-wide text-articleHead sm:text-5xl lg:text-6xl">
          Better <br />
          <span className="text-customRed">performance</span>
        </h2>
        <Divider size="194px" orientation="horizontal" />
      </div>
      <div className="basis-[25%] px-[2vw]">
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
        {/* prettier-ignore */}
        <ResponsiveImage
          sources={[
            { srcSet: powerBoostDashboard480w, media: "(max-width: 480px)" },
            { srcSet: powerBoostDashboard640w, media: "(max-width: 640px)" },
            { srcSet: powerBoostDashboard768w, media: "(max-width: 768px)" },
            { srcSet: powerBoostDashboard640w, media: "(max-width: 1280px)" },
            { srcSet: powerBoostDashboard1000w, media: "(min-width: 1280px)"},
          ]}
          fallback={powerBoostDashboard1000wFallback}
          alt="Modified cars in workshop garage"
          lazy={true}
        />
      </div>
    </article>
  );
};

export default PerformanceArticle;
