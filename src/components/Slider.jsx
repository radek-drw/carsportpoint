import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";

const Slider = () => {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="h-[600px]"
    >
      <SwiperSlide>
        <div
          className="h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${slide1})` }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${slide2})` }}
        />
      </SwiperSlide>
    </Swiper>
  );
};
export default Slider;
