import React, { useState } from "react";
import { InfoWindowF } from "@react-google-maps/api";

import ImageGalleryModal from "./ImageGalleryModal";

import { useCompany } from "@context/CompanyContext";

const CompanyInfoWindow = () => {
  const {
    isGalleryOpen,
    setIsGalleryOpen,
    selectedCompany,
    setSelectedCompany,
  } = useCompany();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!selectedCompany) return null;

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${selectedCompany.lat},${selectedCompany.lng}`;

  const images = selectedCompany.images?.map((image) => ({
    original: image,
    thumbnail: image,
  }));

  return (
    <>
      <InfoWindowF
        position={{ lat: selectedCompany.lat, lng: selectedCompany.lng }}
        onCloseClick={() => setSelectedCompany(null)}
      >
        <div className="p-2">
          <h2 className="text-lg font-bold">{selectedCompany.name}</h2>
          <p>{selectedCompany.address}</p>
          <p>
            <strong>Phone:</strong> {selectedCompany.phone}
          </p>
          <p>
            <strong>Hours:</strong> {selectedCompany.opening_hours}
          </p>

          {/* Thumbnail images */}
          {images?.length > 0 && (
            <div className="mt-2 flex gap-2">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.thumbnail}
                  alt={`${selectedCompany.name} - image ${index + 1}`}
                  className="h-24 w-40 transform cursor-pointer rounded-lg transition hover:scale-105 hover:shadow-xl"
                  onClick={() => {
                    setCurrentImageIndex(index);
                    setIsGalleryOpen(true);
                  }}
                />
              ))}
            </div>
          )}

          {/* Button with 'Get Directions' */}
          <div className="mt-3">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn blue-btn inline-block text-sm font-semibold"
            >
              Get Directions
            </a>
          </div>
        </div>
      </InfoWindowF>

      {/* GALLERY MODAL */}
      {isGalleryOpen && (
        <ImageGalleryModal images={images} startIndex={currentImageIndex} />
      )}
    </>
  );
};

export default CompanyInfoWindow;
