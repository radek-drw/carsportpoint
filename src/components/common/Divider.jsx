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
    <div style={styles} className="relative bg-[#b3b5b7]">
      <span
        className={
          isHorizontal
            ? "absolute -mt-0.5 h-1 w-16 bg-[#20292c]" // Decoration for horizontal
            : "absolute -ml-0.5 h-16 w-1 bg-[#20292c]" // Decoration for vertical
        }
      ></span>
    </div>
  );
};

export default Divider;
