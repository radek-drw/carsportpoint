import React, { useState, useEffect } from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import CompanyInfoWindow from "./CompanyInfoWindow";

const mapContainerStyle = {
  width: "100%",
  height: "650px",
};

const center = {
  lat: 53.41291,
  lng: -8.24389,
};

const defaultZoom = 7;

const CompanyMap = ({ companyData, hoveredCompany, activeCompany }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const [map, setMap] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);

  useEffect(() => {
    if (map) {
      if (activeCompany) {
        map.panTo({ lat: activeCompany.lat, lng: activeCompany.lng });
        map.setZoom(12);
        setSelectedCompany(activeCompany);
      } else {
        map.panTo(center);
        map.setZoom(defaultZoom);
        setSelectedCompany(null);
      }
    }
  }, [activeCompany, map]);

  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={defaultZoom}
      center={
        activeCompany
          ? { lat: activeCompany.lat, lng: activeCompany.lng }
          : center
      }
      onLoad={(mapInstance) => setMap(mapInstance)}
    >
      {companyData.map((company) => (
        <MarkerF
          key={company.id}
          position={{ lat: company.lat, lng: company.lng }}
          onClick={() => setSelectedCompany(company)}
          icon={{
            url:
              hoveredCompany?.id === company.id ||
              activeCompany?.id === company.id
                ? "https://maps.google.com/mapfiles/ms/icons/red-dot.png"
                : "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
            scaledSize:
              hoveredCompany?.id === company.id ||
              activeCompany?.id === company.id
                ? new window.google.maps.Size(50, 50)
                : new window.google.maps.Size(30, 30),
          }}
        />
      ))}

      <CompanyInfoWindow
        selectedCompany={selectedCompany}
        onClose={() => setSelectedCompany(null)}
      />
    </GoogleMap>
  );
};

export default CompanyMap;
