import { useTrail, easings } from "@react-spring/web";

import { TEXT_ANIMATION } from "./config";

export const useSlideAnimations = (resetAnimation) => {
  const textAnimationsSlide1 = useTrail(2, {
    from: {
      opacity: TEXT_ANIMATION.firstSlide.opacity,
      transform: `${TEXT_ANIMATION.firstSlide.position} ${TEXT_ANIMATION.firstSlide.zoom}`,
      filter: TEXT_ANIMATION.firstSlide.blur,
    },
    to: {
      opacity: 1,
      transform: "translateX(0) scale(1)",
      filter: "blur(0px)",
    },
    config: {
      duration: TEXT_ANIMATION.firstSlide.animationDuration,
      easing: easings.easeInOutCirc,
    },
    reset: resetAnimation,
  });

  const textAnimationsSlide2 = useTrail(2, {
    from: {
      opacity: TEXT_ANIMATION.secondSlide.opacity,
      transform: TEXT_ANIMATION.secondSlide.position,
    },
    to: {
      opacity: 1,
      transform: "scale(1)",
    },
    config: {
      duration: TEXT_ANIMATION.secondSlide.animationDuration,
      easing: easings.easeInBack,
    },
    reset: resetAnimation,
  });

  return { textAnimationsSlide1, textAnimationsSlide2 };
};
