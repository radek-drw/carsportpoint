import { createContext, useContext, useState, useRef } from "react";

const CompanyContext = createContext();

export const useCompany = () => useContext(CompanyContext);

export const CompanyProvider = ({ children }) => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [hoveredCompany, setHoveredCompany] = useState(null);
  const [activeCompany, setActiveCompany] = useState(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(null);
  const mapRef = useRef(null);

  return (
    <CompanyContext.Provider
      value={{
        selectedCompany,
        setSelectedCompany,
        hoveredCompany,
        setHoveredCompany,
        activeCompany,
        setActiveCompany,
        isGalleryOpen,
        setIsGalleryOpen,
        mapRef,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};
