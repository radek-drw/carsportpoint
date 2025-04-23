import React from "react";

import ResponsiveImage from "@common/ResponsiveImage";
import Divider from "@common/Divider";
import ContactForm from "@common/ContactForm/ContactForm";

import DynoCarTest1_480w from "@images/dyno-car-test-1-480w.webp";
import DynoCarTest1_960w from "@images/dyno-car-test-1-960w.webp";
import DynoCarTest1_960w_fallback from "@images/dyno-car-test-1-960w-fallback.jpg";
import DynoCarTest2_480w from "@images/dyno-car-test-2-480w.webp";
import DynoCarTest2_960w from "@images/dyno-car-test-2-960w.webp";
import DynoCarTest2_960w_fallback from "@images/dyno-car-test-2-960w-fallback.jpg";

import { CgPhone } from "react-icons/cg";

const ContactPage = () => {
  return (
    <section>
      {/* Image section */}
      <div className="grid items-center justify-items-center md:grid-cols-2">
        <div>
          <ResponsiveImage
            sources={[
              { srcSet: DynoCarTest1_480w, media: "(max-width: 480px)" },
              { srcSet: DynoCarTest1_960w, media: "(min-width: 481px)" },
            ]}
            fallback={DynoCarTest1_960w_fallback}
            alt="Car on a dyno test"
          />
        </div>
        <div>
          <ResponsiveImage
            sources={[
              { srcSet: DynoCarTest2_480w, media: "(max-width: 480px)" },
              { srcSet: DynoCarTest2_960w, media: "(min-width: 481px)" },
            ]}
            fallback={DynoCarTest2_960w_fallback}
            alt="Sports car on a dynamometer"
          />
        </div>
      </div>

      {/* Main contact section */}
      <div className="mx-auto mt-16 grid px-mobile-padding md:max-w-[752px] md:grid-cols-2 md:px-0 lg:max-w-[968px] xl:max-w-[1224px]">
        {/* Contact details */}
        <section>
          <div className="mb-16 md:mb-20 md:pr-10 lg:pr-14 xl:pr-20">
            <h1 className="mb-9 text-2xl font-bold text-customRed sm:text-3xl md:text-4xl">
              Contact Us
            </h1>
            <h2 className="mb-4 text-4xl font-black tracking-wide text-articleHead sm:text-5xl lg:text-6xl">
              Call us for more details
            </h2>
            <a
              href="tel:0851234567"
              className="hover:text-customRed-dark mb-14 inline-block font-form text-[39px] text-customRed lg:text-5xl"
              aria-label="Call us at 085 123 4567"
            >
              <div className="flex items-center hover:underline">
                <CgPhone className="mr-2" />
                085 123 4567
              </div>
            </a>
            <Divider size="194px" orientation="horizontal" />
            <h3 className="mt-14 pb-4 text-sm font-medium leading-5 text-articleHead sm:pr-28 sm:text-base sm:leading-5 md:text-lg md:leading-5 lg:pr-40 lg:text-xl lg:leading-6 xl:pr-52">
              Maecenas aliquam tristique lectus eget dapibus? Etiam vel sapien
              eu leo auctor efficitur! Aliquam sit amet eros cursus, consectetur
              erat vitae, facilisis metus.
            </h3>
          </div>
        </section>

        <section aria-labelledby="write-us-heading">
          <h3
            id="write-us-heading"
            className="mb-4 text-4xl font-black tracking-wide text-articleHead sm:text-5xl lg:text-6xl"
          >
            Write Us
          </h3>
          <h4 className="mb-9 mt-6 pb-4 text-sm font-medium leading-5 text-articleHead sm:pr-28 sm:text-base sm:leading-5 md:text-lg md:leading-5 lg:pr-40 lg:text-xl lg:leading-6 xl:pr-52">
            Suspendisse mollis, massa at pellentesque congue, libero lacus
            dignissim tortor, at fermentum lacus dolor id dui. Sed scelerisque
            tortor.
          </h4>

          <ContactForm
            // visibleFields={{ files: false }}
            // OBSŁUGA PLIKÓW DO DODANIA
            customConfig={{
              name: {
                required: false,
              },
              phone: {
                required: false,
              },
            }}
          />
        </section>
      </div>

      {/* Decorative divider */}
      <div className="mt-24 flex justify-center">
        <Divider size="194px" orientation="vertical" rotate="180" />
      </div>
    </section>
  );
};
export default ContactPage;
