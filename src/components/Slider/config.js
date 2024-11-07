// SLIDER TIMINGS
export const SLIDER_TIMES = {
  slideTime: 7000, // Slider time (without transition)
  transitionSpeed: 1000, // Time for transition between slides
  totalSlideTime: 8000, // Time for progress bar (slideTime + transitionSpeed)
};

// TEXT ANIMATION
export const TEXT_ANIMATION = {
  firstSlide: {
    opacity: 0, // Opacity of text
    position: "translateX(-150%)", // Start position of text
    zoom: "scale(1.4)", // Zoom of text
    blur: "blur(10px)", // Blur of text
    time: 3000, // Text transition time
  },
  secondSlide: {
    opacity: 0, // Opacity of text
    zoom: "scale(0.4)", // Zoom of text
    time: 2000, // Text transition time
  },
};

// PROGRESS BAR
export const PROGRESS_BAR = {
  color: "rgba(255,255,255,0.3)", // Progress bar color
  background: "transparent", // Background color of the progress bar
  height: 10, // Progress bar height
};
