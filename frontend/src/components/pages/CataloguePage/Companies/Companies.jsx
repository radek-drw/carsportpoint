import { CompanyProvider } from '@context/CompanyMapContext';

import CompanyList from './CompanyList';
import MapContainer from './MapContainer';

const Companies = () => {
  return (
    <CompanyProvider>
      <article className="mx-auto mb-24 flex max-w-screen-xl flex-col md:px-10 lg:flex-row">
        <CompanyList />
        <MapContainer />
      </article>
    </CompanyProvider>
  );
};

export default Companies;
