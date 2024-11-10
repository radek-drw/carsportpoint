import slide1 from "../../../assets/images/slide1.jpg";
import slide2 from "../../../assets/images/slide2.jpg";

const slidesData = [
  {
    image: slide1,
    text: [
      {
        content: "a product that can",
        className:
          "capitalize text-white font-extrabold sm:text-6xl xl:text-7xl",
      },
      {
        content: "change your life",
        className:
          "capitalize text-white font-extrabold sm:text-6xl xl:text-7xl",
      },
    ],
    layout: "left",
  },
  {
    image: slide2,
    text: [
      {
        content: "tuning and remaps",
        className:
          "uppercase text-white font-extrabold sm:text-6xl xl:text-7xl",
      },
      {
        content: "We unite the best in Ireland",
        className: "tracking-4 text-sm text-white",
      },
    ],
    layout: "center",
  },
];

export default slidesData;
