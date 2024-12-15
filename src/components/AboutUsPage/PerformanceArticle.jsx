import React from "react";

import Divider from "../Divider";

import dashboardCounter from "../../assets/images/dashboard_counter.png";

const PerformanceArticle = () => {
  return (
    <article className="mt-28">
      <div className="flex px-[2vw]">
        <div className="basis-[35%]">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-articleHead tracking-wide mb-20">
            Better <br />
            <span className="text-customRed">performance</span>
          </h2>
          <Divider size="194px" orientation="horizontal" />
        </div>
        <div className="basis-[25%] px-[2vw]">
          <h4 className="text-sm sm:text-base md:text-lg lg:text-xl pb-4 font-medium text-articleHead">
            Curabitur ullamcorper vehicula metus quis laoreet! Maecenas non
            metus enim. Aliquam eu hendrerit ligula, sed malesuada nisl! Nam sed
            lacus auctor viverra fusce.
          </h4>
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
          <img src={dashboardCounter} alt="Dashboard counter" />
        </div>
      </div>
    </article>
  );
};

export default PerformanceArticle;
