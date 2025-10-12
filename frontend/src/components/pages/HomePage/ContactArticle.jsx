import ResponsiveImage from '@common/ResponsiveImage';
import Divider from '@common/Divider';
import carPartsWorkshop_480w from '@images/car-parts-workshop-480w.webp';
import carPartsWorkshop_768w from '@images/car-parts-workshop-768w.webp';
import carPartsWorkshop_960w from '@images/car-parts-workshop-960w.webp';
import carPartsWorkshop_960w_fallback from '@images/car-parts-workshop-960w-fallback.jpg';
import decorativeC from '@images/section_bg2.png';

const ContactArticle = () => {
  return (
    <article className="mt-28">
      <div
        className="flex flex-col bg-no-repeat md:flex-row"
        style={{ backgroundImage: `url(${decorativeC})` }}
      >
        <div className="px-mobile-padding w-full md:basis-1/2 md:pl-[20vw] md:pr-16">
          <h2 className="text-customRed mb-10 text-2xl font-bold sm:text-3xl md:text-4xl">
            Contact us
          </h2>
          <h3 className="text-articleHead text-4xl font-black sm:text-5xl lg:text-6xl">
            Want to be a part of something big?
          </h3>
          <p className="text-customRed mb-20 mt-4 text-[44px] uppercase lg:text-5xl">
            get in touch
          </p>
          <Divider size="194px" orientation="horizontal" />
          <p className="text-articleHead mb-10 mt-14 text-sm font-medium sm:text-base md:mb-0 lg:text-xl">
            If you want to be featured on this website submit your request today and our team will
            be in touch with you as soon as possible
          </p>
        </div>
        <div className="basis-6/12">
          <ResponsiveImage
            sources={[
              { srcSet: carPartsWorkshop_480w, media: '(max-width: 480px)' },
              { srcSet: carPartsWorkshop_768w, media: '(max-width: 1280px)' },
              { srcSet: carPartsWorkshop_960w, media: '(min-width: 1281px)' },
            ]}
            fallback={carPartsWorkshop_960w_fallback}
            alt="Car parts on a workshop bench"
            lazy={true}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <Divider size="194px" orientation="vertical" rotate={180} />
      </div>
    </article>
  );
};

export default ContactArticle;
