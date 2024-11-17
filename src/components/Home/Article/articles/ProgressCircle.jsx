import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgress = () => {
  const [progress, setProgress] = useState(0);
  const targetProgress = 86;
  const duration = 2;

  useEffect(() => {
    // Create an IntersectionObserver to trigger progress animation when the element is visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProgress(targetProgress);
        }
      },
      { threshold: 1 } // Trigger when the element is fully visible
    );

    const element = document.getElementById("circular-progress");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div id="circular-progress" className="mb-5 w-36 h-36 mx-auto">
      <CircularProgressbar
        value={progress}
        text={`${progress}%`}
        strokeWidth={3}
        styles={buildStyles({
          textColor: "#444",
          pathColor: "#000",
          trailColor: "#f9f9f9",
          pathTransitionDuration: duration,
        })}
      />
    </div>
  );
};

export default CircularProgress;
