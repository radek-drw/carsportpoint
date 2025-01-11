import React from "react";

import Divider from "../../common/Divider";

import powerBoostDashboard from "../../../assets/images/dashboard_counter.png";

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
        <img
          src={powerBoostDashboard}
          alt="Dashboard counter showing power boost"
        />
      </div>
    </article>
  );
};

export default PerformanceArticle;
