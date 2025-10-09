import React from "react";

import { Flat } from "@alptugidin/react-circular-progress-bar";

const CircularProgress = () => {
  return (
    <div className="mx-auto mb-5 size-36">
      <Flat
        progress={86}
        sx={{
          strokeColor: "#000",
          barWidth: 3,
          bgStrokeColor: "#f9f9f9",
          bgColor: { value: "#000000", transparency: "00" },
          valueSize: 24,
          valueWeight: "normal",
          valueColor: "#444",
          loadingTime: 2000,
          miniCircleColor: "#000",
          valueFamily: "Raleway",
          miniCircleSize: 3,
          intersectionEnabled: true,
        }}
      />
    </div>
  );
};

export default CircularProgress;
