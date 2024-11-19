import React from "react";

import Divider from "../../../Divider";

import tuning1 from "../../../../assets/images/carsportpoint-tuning-1.jpg";
import tuning2 from "../../../../assets/images/carsportpoint-tuning-2.png";
import tuning3 from "../../../../assets/images/carsportpoint-tuning-3.jpg";
import tuning4 from "../../../../assets/images/carsportpoint-tuning-4.jpg";

const TuningArticle = () => {
  return (
    <article className="flex mx-auto">
      <div>
        <h2 className="sm:text-3xl lg:text-4xl text-customRed font-bold mb-10">
          Tuning
        </h2>
        <h3 className="sm:text-5xl xl:text-6xl font-black text-articleHead">
          See how we make our cars perfect
        </h3>
        <Divider size="194px" orientation="horizontal" />
        <p>
          We only deal with the best so you dont need to worry if your car will
          be in good hands, we make sure any car service on this website is the
          best of the best
        </p>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <img src={tuning1} alt="tuning1" />
        </div>
        <div>
          <img src={tuning2} alt="tuning2" />
        </div>
        <div>
          <img src={tuning3} alt="tuning3" />
        </div>
        <div>
          <img src={tuning4} alt="tuning4" />
        </div>
      </div>
    </article>
  );
};

export default TuningArticle;
