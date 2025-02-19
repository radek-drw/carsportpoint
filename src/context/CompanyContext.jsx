import { createContext, useContext, useState, useRef } from "react";

const CompanyContext = createContext();

export const useCompany = () => useContext(CompanyContext);

export const CompanyProvider = ({ children }) => {
  const [map, setMap] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [hoveredCompany, setHoveredCompany] = useState(null);
  const [activeCompany, setActiveCompany] = useState(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(null);
  const [defaultZoom, setDefaultZoom] = useState(null);
  const mapRef = useRef(null);

  return (
    <CompanyContext.Provider
      value={{
        map,
        setMap,
        selectedCompany,
        setSelectedCompany,
        hoveredCompany,
        setHoveredCompany,
        activeCompany,
        setActiveCompany,
        isGalleryOpen,
        setIsGalleryOpen,
        defaultZoom,
        setDefaultZoom,
        mapRef,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};
