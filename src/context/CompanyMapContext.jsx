import { createContext, useContext, useState, useRef } from "react";

const CompanyMapContext = createContext();

export const useCompany = () => useContext(CompanyMapContext);

export const CompanyProvider = ({ children }) => {
  const [map, setMap] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [hoveredCompany, setHoveredCompany] = useState(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(null);
  const [defaultZoom, setDefaultZoom] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleryImages, setGalleryImages] = useState([]);
  const mapRef = useRef(null);

  return (
    <CompanyMapContext.Provider
      value={{
        map,
        setMap,
        selectedCompany,
        setSelectedCompany,
        hoveredCompany,
        setHoveredCompany,
        isGalleryOpen,
        setIsGalleryOpen,
        defaultZoom,
        setDefaultZoom,
        currentImageIndex,
        setCurrentImageIndex,
        galleryImages,
        setGalleryImages,
        mapRef,
      }}
    >
      {children}
    </CompanyMapContext.Provider>
  );
};
