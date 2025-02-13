import React, { useState } from "react";
import { InfoWindowF } from "@react-google-maps/api";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { IoCloseOutline } from "react-icons/io5";

const CompanyInfoWindow = ({ selectedCompany, onClose }) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

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
        onCloseClick={onClose}
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

          {/* Images */}
          {images?.length > 0 && (
            <div className="mt-2 flex gap-2">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.thumbnail}
                  alt={`${selectedCompany.name} - image ${index + 1}`}
                  className="h-24 w-40 transform cursor-pointer rounded-lg transition hover:scale-105 hover:shadow-xl"
                  onClick={() => setIsGalleryOpen(true)}
                />
              ))}
            </div>
          )}

          {/* Button 'Get Directions' */}
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

      {/* Modal z Galerią na pełnym ekranie */}
      {isGalleryOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-55"
          onClick={() => setIsGalleryOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl rounded-lg bg-white px-4 pb-4 pt-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute right-2 top-1 z-50"
              onClick={() => setIsGalleryOpen(false)}
            >
              <IoCloseOutline
                size={38}
                className="text-customGrey hover:text-gray-900"
              />
            </button>

            <ImageGallery
              items={images}
              showThumbnails={true}
              showPlayButton={false}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CompanyInfoWindow;
