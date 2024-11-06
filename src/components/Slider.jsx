import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import { useTrail, animated, easings } from "@react-spring/web";

import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";

const Slider = () => {
  const [resetAnimation, setResetAnimation] = useState(false);

  // Function to reset the text animation on each slide change
  const handleSlideChange = () => {
    setResetAnimation(true);
    setTimeout(() => setResetAnimation(false), 0);
  };

  const textAnimationsSlide1 = useTrail(2, {
    from: {
      opacity: 0,
      transform: "translateX(-150%) scale(1.4)",
      filter: "blur(10px)",
    },
    to: {
      opacity: 1,
      transform: "translateX(0) scale(1)",
      filter: "blur(0px)",
    },
    config: { duration: 2000, easing: easings.easeInOutCirc },
    reset: resetAnimation,
  });

  const textAnimationsSlide2 = useTrail(2, {
    from: {
      opacity: 0,
      transform: "scale(0.4)",
    },
    to: {
      opacity: 1,
      transform: "scale(1)",
    },
    config: { duration: 2000, easing: easings.easeInBack },
    reset: resetAnimation,
  });

  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect={"fade"}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      speed={1000} // Fade transition speed
      loop={true}
      className="mySwiper h-600 w-full font-primary text-7xl"
      onSlideChange={handleSlideChange} // Setting the function to reset the animation
    >
      {[slide1, slide2].map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="relative h-full bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: `url(${slide})`,
              borderRadius: "20px",
            }}
          >
            {index === 0 ? (
              <div className="text-left capitalize">
                <animated.div
                  style={textAnimationsSlide1[0]}
                  className="block text-white font-extrabold sm:text-6xl xl:text-7xl"
                >
                  a product that can
                </animated.div>
                <animated.div
                  style={textAnimationsSlide1[1]}
                  className="block text-white font-extrabold sm:text-6xl xl:text-7xl"
                >
                  change your life
                </animated.div>
              </div>
            ) : (
              <div className="text-center">
                <animated.div
                  style={textAnimationsSlide2[0]}
                  className="block uppercase text-white font-extrabold sm:text-6xl xl:text-7xl"
                >
                  tuning and remaps
                </animated.div>
                <animated.div
                  style={textAnimationsSlide2[1]}
                  className="block tracking-4 text-sm text-white"
                >
                  We unite the best in Ireland
                </animated.div>
              </div>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
