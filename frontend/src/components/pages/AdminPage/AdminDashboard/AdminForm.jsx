import React from "react";
import axios from "axios";
import { useAdmin } from "@context/AdminContext";

import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";


const API_URL =
  "https://vkaymzas8j.execute-api.eu-west-1.amazonaws.com/saveCompanyDetails";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(API_URL, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      alert(response.data.message);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        error.response?.data?.message ||
          "Something went wrong. Please try again later",
      );
    }
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
