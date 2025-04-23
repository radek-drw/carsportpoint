import { createContext, useContext, useState } from "react";

const AdminContext = createContext();

export const useAdmin = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    opening_hours: "",
    images: [],
  });
  const [imagePreviews, setImagePreviews] = useState([]);

  return (
    <AdminContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        formData,
        setFormData,
        imagePreviews,
        setImagePreviews,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
