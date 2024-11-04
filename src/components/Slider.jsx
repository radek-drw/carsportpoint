import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { useSpring, animated } from "@react-spring/web";

import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";

const Slider = () => {
  // Define the animation for the text
  const textAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(30px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { duration: 800 },
    reset: true,
  });

  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      loop={true}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      speed={2000}
      className="mySwiper h-[600px] w-full font-primary text-7xl"
    >
      {[slide1, slide2].map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="relative h-full bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: `url(${slide})`,
              borderRadius: "20px",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
            }}
          >
            <animated.div
              style={textAnimation}
              className="absolute text-white font-bold bg-black bg-opacity-50 rounded-lg text-center w-auto"
            >
              {index === 0 ? (
                <span className="capitalize block w-[51.5%] mx-auto text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  a product that can change your life
                </span>
              ) : (
                <span>tuning and remaps — We unite the best in Ireland</span>
              )}
            </animated.div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
