import React from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "600px",
};

const defaultCenter = {
  lat: 53.41291,
  lng: -8.24389,
};

const markerPosition = { lat: 53.44427112616309, lng: -6.209359075248016 };

const defaultZoom = 7;

const CompanyMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading Maps...</div>;

  const onLoad = (marker) => {
    console.log("marker: ", marker);
  };

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={defaultZoom}
      center={defaultCenter}
    >
      <MarkerF
        position={markerPosition}
        onLoad={onLoad}
        icon={{
          url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
          scaledSize: new window.google.maps.Size(40, 40),
        }}
      />
    </GoogleMap>
  );
};

export default CompanyMap;
