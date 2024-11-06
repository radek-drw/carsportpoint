import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import { useTrail, animated } from "@react-spring/web";

import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";

const Slider = () => {
  const [resetAnimation, setResetAnimation] = useState(false);

  // Funkcja resetująca animację przy każdej zmianie slajdu
  const handleSlideChange = () => {
    setResetAnimation(true);
    setTimeout(() => setResetAnimation(false), 0); // natychmiastowy reset animacji
  };

  const textAnimationsSlide1 = useTrail(2, {
    from: {
      opacity: 0,
      transform: "translateY(50px) scale(1.2)",
      filter: "blur(10px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0px) scale(1)",
      filter: "blur(0px)",
    },
    config: { duration: 1500 },
    reset: resetAnimation,
    trail: 200, // kontrolowane opóźnienie między animacjami
  });

  const textAnimationsSlide2 = useTrail(2, {
    from: {
      opacity: 0,
      transform: "translateY(50px) scale(1.2)",
      filter: "blur(10px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0px) scale(1)",
      filter: "blur(0px)",
    },
    config: { duration: 1500 },
    reset: resetAnimation,
    trail: 200, // kontrolowane opóźnienie między animacjami
  });

  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect={"fade"}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      speed={1000} // Prędkość przejścia fade
      loop={true}
      className="mySwiper h-600 w-full font-primary text-7xl"
      onSlideChange={handleSlideChange} // Ustawienie funkcji resetującej animację
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
