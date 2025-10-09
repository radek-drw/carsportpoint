import React, { useEffect } from "react";
import { InfoWindowF } from "@react-google-maps/api";

import { useCompany } from "@context/CompanyMapContext";

const CompanyInfoWindow = () => {
  const {
    setIsGalleryOpen,
    selectedCompany,
    setSelectedCompany,
    setCurrentImageIndex,
    setGalleryImages,
  } = useCompany();

  // Updates `galleryImages` by converting the company's images into the format required by ImageGallery
  // (an array of objects with "original" and an optional "thumbnail" property).
  // This effect runs whenever `selectedCompany` changes, as long as it has images
  useEffect(() => {
    if (selectedCompany?.images) {
      setGalleryImages(
        selectedCompany.images.map((image) => ({
          original: image,
          thumbnail: image,
        })),
      );
    }
  }, [selectedCompany]);

  if (!selectedCompany) return null;

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${selectedCompany.lat},${selectedCompany.lng}`;

  return (
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

        {/* Thumbnail images  */}
        {selectedCompany?.images?.length > 0 && (
          <div className="mt-2 flex gap-2 overflow-x-auto">
            {selectedCompany.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${selectedCompany.name} - image ${index + 1}`}
                className="max-h-20 shrink-0 cursor-pointer rounded-lg object-contain transition hover:opacity-75"
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
  );
};

export default CompanyInfoWindow;
