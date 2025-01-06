import { useState } from "react";
import ProgressBar from "./ProgressBar";
import SlideContent from "./SlideContent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import slidesData from "./slidesData";
import { useSlideAnimations } from "./textAnimations";
import { SLIDER_TIMES } from "./config";
import "./animations.css";

const Slider = () => {
  const [resetAnimation, setResetAnimation] = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  const { textAnimationsSlide1, textAnimationsSlide2 } =
    useSlideAnimations(resetAnimation);

  // Function to reset the text animation and progress bar on each slide change
  const handleSlideChange = () => {
    setResetAnimation(true);
    setProgressKey((prevKey) => prevKey + 1);
    setTimeout(() => setResetAnimation(false), 0);
  };

  const slidesWithAnimations = slidesData.map((slide, index) => ({
    ...slide,
    animations: index === 0 ? textAnimationsSlide1 : textAnimationsSlide2,
  }));

  return (
    <div className="relative w-full">
      <ProgressBar progressKey={progressKey} />
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: SLIDER_TIMES.slideDuration,
          disableOnInteraction: false,
          waitForTransition: false,
        }}
        speed={SLIDER_TIMES.fadeTransitionDuration}
        loop={true}
        className="mySwiper font-primary h-[600px] w-full"
        onSlideChange={handleSlideChange}
      >
        {slidesWithAnimations.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative flex h-full items-center justify-center bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                borderRadius: "15px",
                animation: `zoomIn ${SLIDER_TIMES.slideDuration + SLIDER_TIMES.fadeTransitionDuration}ms linear infinite`,
              }}
            >
              <SlideContent
                textAnimations={slide.animations}
                text={slide.text}
                layout={slide.layout}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
