import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import { useSpring, animated } from "@react-spring/web";

import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";

const Slider = () => {
  const textAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(100px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { duration: 2000 },
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
      className="mySwiper h-600 w-full font-primary text-7xl"
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
            <animated.div
              style={textAnimation}
              className="text-white font-extrabold sm:text-6xl xl:text-7xl"
            >
              {index === 0 ? (
                <div className="text-left capitalize">
                  <span className="block">a product that can</span>
                  <span className="block">change your life</span>
                </div>
              ) : (
                <div className="text-center">
                  <span className="block uppercase">tuning and remaps</span>
                  <span className="block tracking-4 text-sm">
                    We unite the best in Ireland
                  </span>
                </div>
              )}
            </animated.div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
