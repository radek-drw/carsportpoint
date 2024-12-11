import React from "react";

const Divider = ({ size = "1px", orientation = "horizontal", rotate = 0 }) => {
  const isHorizontal = orientation === "horizontal";

  const styles = {
    ...(isHorizontal
      ? { width: size, height: "1px" } // Horizontal divider
      : { height: size, width: "1px" }), // Vertical divider
    transform: `rotate(${rotate}deg)`,
  };

  return (
    <div style={styles} className="bg-[#b3b5b7] relative">
      <span
        className={
          isHorizontal
            ? "absolute bg-[#20292c] h-1 w-16 -mt-0.5" // Decoration for horizontal
            : "absolute bg-[#20292c] w-1 h-16 -ml-0.5" // Decoration for vertical
        }
      ></span>
    </div>
  );
};

export default Divider;
