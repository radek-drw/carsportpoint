// SLIDER TIMINGS
export const SLIDER_TIMES = {
  slideDuration: 9000,
  fadeTransitionDuration: 1000,
};

// Ratios for calculating text animation durations based on slideDuration
const FIRST_SLIDE_DURATION_RATIO = 0.28; // 28% of slideDuration
const SECOND_SLIDE_DURATION_RATIO = 0.17; // 17% of slideDuration

// TEXT ANIMATION
export const TEXT_ANIMATION = {
  firstSlide: {
    opacity: 0,
    position: 'translateX(-150%)',
    zoom: 'scale(1.4)',
    blur: 'blur(10px)',
    animationDuration: SLIDER_TIMES.slideDuration * FIRST_SLIDE_DURATION_RATIO,
  },
  secondSlide: {
    opacity: 0,
    zoom: 'scale(0.4)',
    animationDuration: SLIDER_TIMES.slideDuration * SECOND_SLIDE_DURATION_RATIO,
  },
};

// PROGRESS BAR
export const PROGRESS_BAR = {
  color: 'rgba(255,255,255,0.3)',
  background: 'transparent',
  height: 10,
};
