import React from "react";

import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";

import { useAdmin } from "@context/AdminContext";

const inputsConfig = [
  { name: "name", type: "text", placeholder: "Company Name" },
  { name: "address", type: "text", placeholder: "Address" },
  { name: "phone", type: "tel", placeholder: "Phone Number" },
  { name: "opening_hours", type: "text", placeholder: "Opening Hours" },
];

const AdminForm = () => {
  const { formData, setFormData } = useAdmin();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Company details submitted!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {inputsConfig.map(({ name, type, placeholder }) => (
        <input
          key={name}
          type={type}
          name={name}
          placeholder={placeholder}
          value={formData[name]}
          onChange={handleChange}
          className="w-full rounded-md border p-2 hover:border-inputBorder focus:border-inputBorder focus:shadow-inputShadow"
          required
        />
      ))}
      <ImageUpload />
      <ImagePreview />
      <button type="submit" className="btn blue-btn w-full py-2 font-semibold">
        Submit
      </button>
    </form>
  );
};

export default AdminForm;
