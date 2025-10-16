import slide1_480w from '@images/slide1-480w.webp';
import slide1_768w from '@images/slide1-768w.webp';
import slide1_1280w from '@images/slide1-1280w.webp';
import slide1_1920w from '@images/slide1-1920w.webp';
import slide1_1920w_fallback from '@images/slide1-1920w-fallback.jpg';
import slide2_480w from '@images/slide2-480w.webp';
import slide2_768w from '@images/slide2-768w.webp';
import slide2_1280w from '@images/slide2-1280w.webp';
import slide2_1920w from '@images/slide2-1920w.webp';
import slide2_1920w_fallback from '@images/slide2-1920w-fallback.jpg';

const slidesData = [
  {
    images: {
      small: slide1_480w,
      medium: slide1_768w,
      large: slide1_1280w,
      extraLarge: slide1_1920w,
      fallback: slide1_1920w_fallback,
    },
    text: [
      {
        content: 'a product that can',
        className: 'capitalize text-white font-extrabold text-5xl xl:text-7xl',
      },
      {
        content: 'change your life',
        className: 'capitalize text-white font-extrabold text-5xl xl:text-7xl',
      },
    ],
    layout: 'left',
  },
  {
    images: {
      small: slide2_480w,
      medium: slide2_768w,
      large: slide2_1280w,
      extraLarge: slide2_1920w,
      fallback: slide2_1920w_fallback,
    },
    text: [
      {
        content: 'tuning and remaps',
        className: 'uppercase text-white font-extrabold text-5xl xl:text-7xl',
      },
      {
        content: 'We unite the best in Ireland',
        className: 'tracking-[4px] text-sm text-white xl:text-lg',
      },
    ],
    layout: 'center',
  },
];

export default slidesData;
