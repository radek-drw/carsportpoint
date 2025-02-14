import { createContext, useContext, useState } from "react";

const CompanyContext = createContext();

export const useCompany = () => useContext(CompanyContext);

export const CompanyProvider = ({ children }) => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [hoveredCompany, setHoveredCompany] = useState(null);
  const [activeCompany, setActiveCompany] = useState(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(null);

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
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};
