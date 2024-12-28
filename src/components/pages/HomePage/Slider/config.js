// SLIDER TIMINGS
export const SLIDER_TIMES = {
  slideDuration: 5000,
  fadeTransitionDuration: 1000,
  get progressBarAnimationDuration() {
    return this.slideDuration + this.fadeTransitionDuration;
  },
};

// TEXT ANIMATION
export const TEXT_ANIMATION = {
  firstSlide: {
    opacity: 0,
    position: "translateX(-150%)",
    zoom: "scale(1.4)",
    blur: "blur(10px)",
    animationDuration: 3000,
  },
  secondSlide: {
    opacity: 0,
    zoom: "scale(0.4)",
    animationDuration: 2000,
  },
};

// PROGRESS BAR
export const PROGRESS_BAR = {
  color: "rgba(255,255,255,0.3)",
  background: "transparent",
  height: 10,
};
