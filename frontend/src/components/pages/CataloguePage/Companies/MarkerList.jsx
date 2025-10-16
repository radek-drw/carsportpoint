import { MarkerF } from '@react-google-maps/api';
import { useCompany } from '@context/CompanyMapContext';

const MarkerList = () => {
  const { hoveredCompany, setHoveredCompany, setSelectedCompany, selectedCompany, companies } =
    useCompany();

  return companies.map((company) => (
    <MarkerF
      key={company.id}
      position={{ lat: company.lat, lng: company.lng }}
      onClick={() => setSelectedCompany(company)}
      onMouseOver={() => setHoveredCompany(company)}
      onMouseOut={() => setHoveredCompany(null)}
      icon={{
        url:
          hoveredCompany?.id === company.id || selectedCompany?.id === company.id
            ? 'https://maps.google.com/mapfiles/ms/icons/red-dot.png'
            : 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
        scaledSize:
          hoveredCompany?.id === company.id || selectedCompany?.id === company.id
            ? new window.google.maps.Size(50, 50)
            : new window.google.maps.Size(30, 30),
      }}
    />
  ));
};

export default MarkerList;
