import React, { useEffect } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

import MarkerList from "./MarkerList";
import CompanyInfoWindow from "./CompanyInfoWindow";
import ImageGalleryModal from "./ImageGalleryModal";

import { useCompany } from "@context/CompanyMapContext";

const center = {
  lat: 53.41291,
  lng: -8.01389,
};

const ZOOM_LARGE_SCREEN = 7;
const ZOOM_SMALL_SCREEN = 6.6;

const mapContainerStyle = {
  width: "100%",
  height: "650px",
};
// test
const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "";

const MapContainer = () => {
  const { isLoaded } = useLoadScript({ googleMapsApiKey });
  const {
    selectedCompany,
    map,
    setMap,
    setSelectedCompany,
    defaultZoom,
    setDefaultZoom,
    mapRef,
  } = useCompany();

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

  // Adjusts map position and zoom when the user selects a different company from list
  useEffect(() => {
    if (map) {
      if (selectedCompany) {
        map.panTo({ lat: selectedCompany.lat, lng: selectedCompany.lng });
        map.setZoom(12);
        setSelectedCompany(selectedCompany);
      } else {
        map.panTo(center);
        map.setZoom(defaultZoom);
        setSelectedCompany(null);
      }
    }
  }, [selectedCompany, map]);

  if (!isLoaded) {
    return (
      <div
        className="flex flex-grow flex-col items-center justify-center"
        style={{ height: mapContainerStyle.height }}
      >
        <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-blue-500"></div>
        <p className="mt-4 text-gray-600">Loading Google Maps...</p>
      </div>
    );
  }

  return (
    <div ref={mapRef} className="flex-grow">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={defaultZoom}
        center={
          selectedCompany
            ? { lat: selectedCompany.lat, lng: selectedCompany.lng }
            : center
        }
        onLoad={(mapInstance) => setMap(mapInstance)}
      >
        <MarkerList />
        <CompanyInfoWindow />
        <ImageGalleryModal />
      </GoogleMap>
    </div>
  );
};

export default MapContainer;
