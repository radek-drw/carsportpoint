import React, { useState, useEffect, useRef } from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import CompanyInfoWindow from "./CompanyInfoWindow";
import companyData from "./companyData.json";
import { useCompany } from "@context/CompanyContext";

const mapContainerStyle = {
  width: "100%",
  height: "650px",
};

const center = {
  lat: 53.41291,
  lng: -8.01389,
};

const ZOOM_LARGE_SCREEN = 7;
const ZOOM_SMALL_SCREEN = 6.6;

// API key only in dev, but set to an empty string in production ""
// This prevents the key from being exposed on GitHub Pages.
const googleMapsApiKey =
  import.meta.env.DEV ? import.meta.env.VITE_GOOGLE_MAPS_API_KEY : "";

if (googleMapsApiKey) {
    console.log("Google Maps API Key is available only in dev mode.");
 } else {
    console.warn("Google Maps is running without an API key (for testing).");
  }

const CompanyMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey
  });

  const {
    activeCompany,
    hoveredCompany,
    setHoveredCompany,
    setSelectedCompany,
    mapRef,
  } = useCompany();

  const [map, setMap] = useState(null);
  const [defaultZoom, setDefaultZoom] = useState(ZOOM_LARGE_SCREEN);

  // Updates map zoom when the screen width changes
  useEffect(() => {
    const handleResize = () => {
      setDefaultZoom(
        window.innerWidth <= 640 ? ZOOM_SMALL_SCREEN : ZOOM_LARGE_SCREEN,
      );
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Adjusts map position and zoom when the user selects a different company
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
    <div ref={mapRef} className="flex-grow">
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
            onMouseOver={() => setHoveredCompany(company)}
            onMouseOut={() => setHoveredCompany(null)}
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

        <CompanyInfoWindow />
      </GoogleMap>
    </div>
  );
};

export default CompanyMap;
