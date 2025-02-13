import React from "react";
import { InfoWindowF } from "@react-google-maps/api";

const CompanyInfoWindow = ({ selectedCompany, onClose }) => {
  if (!selectedCompany) return null;

  // Link to Google Maps - get directions
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${selectedCompany.lat},${selectedCompany.lng}`;

  return (
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
        {selectedCompany.images?.length > 0 && (
          <div className="mt-2 flex gap-2">
            {selectedCompany.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${selectedCompany.name} - image ${index + 1}`}
                className="h-24 w-40 rounded-lg"
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
  );
};

export default CompanyInfoWindow;
