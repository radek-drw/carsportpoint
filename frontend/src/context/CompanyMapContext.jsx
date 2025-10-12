import { createContext, useContext, useState, useRef, useEffect } from 'react';
import axios from 'axios';

const CompanyMapContext = createContext();

export const useCompany = () => useContext(CompanyMapContext);

const API_URL = 'https://cr6hha4le3.execute-api.eu-west-1.amazonaws.com/getCompanies';

export const CompanyProvider = ({ children }) => {
  const [map, setMap] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [hoveredCompany, setHoveredCompany] = useState(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [defaultZoom, setDefaultZoom] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleryImages, setGalleryImages] = useState([]);
  const [companies, setCompanies] = useState([]);
  const mapRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setCompanies(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

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
        companies,
        setCompanies,
        mapRef,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </CompanyMapContext.Provider>
  );
};
