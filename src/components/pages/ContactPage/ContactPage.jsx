import React from "react";

import TunedCar1 from "../../../assets/images/tuned-car-contact-1.jpg";
import TunedCar2 from "../../../assets/images/tuned-car-contact-2.jpg";

import ContactForm from "../../common/ContactForm/ContactForm";

import { CgPhone } from "react-icons/cg";

import Divider from "../../common/Divider";

const Contact = () => {
  return (
    <section>
      <div className="grid grid-cols-2 items-center">
        <div>
          <img src={TunedCar1} alt="Tuned performance car" />
        </div>
        <div>
          <img src={TunedCar2} alt="Tuned performance car" />
        </div>
      </div>
      <article className="mx-auto mt-16 grid grid-cols-2 md:max-w-[692px] lg:max-w-[968px] xl:max-w-[1224px]">
        <div className="md:pr-10 lg:pr-14 xl:pr-20">
          <h3 className="mb-9 text-2xl font-bold text-customRed sm:text-3xl md:text-4xl">
            Contact Us
          </h3>
          <h2 className="mb-4 text-4xl font-black tracking-wide text-articleHead sm:text-5xl lg:text-6xl">
            Call us for more details
          </h2>
          <a
            href="tel:0851234567"
            className="hover:text-customRed-dark mb-16 inline-block font-form text-[40px] text-customRed lg:text-5xl"
          >
            <div className="flex items-center hover:underline">
              <CgPhone className="mr-2" />
              085 123 4567
            </div>
          </a>
          <Divider size="194px" orientation="horizontal" />
          <h4 className="mt-16 pb-4 pr-28 text-sm font-medium leading-5 text-articleHead sm:text-base sm:leading-5 md:text-lg md:leading-5 lg:pr-40 lg:text-xl lg:leading-6 xl:pr-52">
            Maecenas aliquam tristique lectus eget dapibus? Etiam vel sapien eu
            leo auctor efficitur! Aliquam sit amet eros cursus, consectetur erat
            vitae, facilisis metus.
          </h4>
        </div>
        <div>
          <ContactForm
            title={"Write Us"}
            titleStyle={
              "mb-4 text-4xl font-black tracking-wide text-articleHead sm:text-5xl lg:text-6xl"
            }
            subtitle={
              "Suspendisse mollis, massa at pellentesque congue, libero lacus dignissim tortor, at fermentum lacus dolor id dui. Sed scelerisque tortor."
            }
            subtitleStyle={
              "mb-9 mt-6 pb-4 pr-28 text-sm font-medium leading-5 text-articleHead sm:text-base sm:leading-5 md:text-lg md:leading-5 lg:pr-40 lg:text-xl lg:leading-6 xl:pr-52"
            }
            messageFieldRows={6}
            includeFileInput={false}
            submitButtonTxt={"SEND A MESSAGE"}
            nameLabel={"Your name"}
            messageLabel={"Message *"}
            includeSubjectInput={true}
          />
        </div>
      </article>
    </section>
  );
};
export default Contact;
