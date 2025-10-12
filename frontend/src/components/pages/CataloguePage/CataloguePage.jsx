import ContactForm from '@common/ContactForm/ContactForm';

import CatalogueHeader from './CatalogueHeader';
import Companies from './Companies/Companies';

const CataloguePage = () => {
  return (
    <section className="px-mobile-padding pt-16 md:px-0">
      <CatalogueHeader />
      <Companies />

      {/* Contact form */}
      <div className="mx-auto md:max-w-[524px] lg:max-w-[630px] xl:max-w-[732px]">
        <h2 className="text-customRed mt-16 text-2xl font-bold sm:text-3xl md:text-4xl">
          Add your company
        </h2>
        <p className="text-articleHead mb-14 mt-4 text-lg">
          Are you a company owner? Add your company to our catalogue to reach more customers
        </p>
        <ContactForm displayMode="both" />
      </div>
    </section>
  );
};
export default CataloguePage;
