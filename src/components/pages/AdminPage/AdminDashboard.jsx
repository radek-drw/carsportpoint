import React, { useState } from "react";

import { useAdmin } from "@context/AdminContext";

const AdminDashboard = () => {
  const { setIsLoggedIn } = useAdmin();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    opening_hours: "",
    images: [],
  });

  const MAX_FILES = 5;

  const [imagePreviews, setImagePreviews] = useState([]);

  const inputsConfig = [
    { name: "name", type: "text", placeholder: "Company Name" },
    { name: "address", type: "text", placeholder: "Address" },
    { name: "phone", type: "tel", placeholder: "Phone Number" },
    { name: "opening_hours", type: "text", placeholder: "Opening Hours" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    const validFiles = newFiles.slice(0, MAX_FILES - formData.images.length);

    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...validFiles],
    }));

    const newPreviews = validFiles.map((file) => URL.createObjectURL(file));
    setImagePreviews((prev) => [...prev, ...newPreviews]);
  };

  const handleRemoveImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));

    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Company details submitted!");
  };

  return (
    <div className="absolute left-0 top-0 flex min-h-screen w-full items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-center text-2xl font-semibold text-gray-700">
          Admin Panel
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {inputsConfig.map((input) => (
            <input
              key={input.name}
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              value={formData[input.name]}
              onChange={handleChange}
              className="w-full rounded-md border p-2 hover:border-inputBorder focus:border-inputBorder focus:shadow-inputShadow"
              required
            />
          ))}

          {/* Pole do przesyłania zdjęć */}
          <label
            className={`btn mb-20 block w-full bg-gray-100 text-center text-gray-700 hover:bg-gray-200 ${
              formData.images.length >= MAX_FILES
                ? "cursor-not-allowed bg-gray-300"
                : "blue-btn cursor-pointer"
            }`}
          >
            {formData.images.length >= MAX_FILES
              ? "File Limit Reached"
              : "Upload Images"}
            <input
              type="file"
              name="images"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              className="hidden"
              disabled={formData.images.length >= MAX_FILES}
            />
          </label>

          {/* Podgląd przesłanych zdjęć */}
          {imagePreviews.length > 0 && (
            <div className="mt-4 flex justify-center gap-4">
              {imagePreviews.map((src, index) => (
                <div key={index} className="relative">
                  <img
                    src={src}
                    alt={`Preview ${index}`}
                    className="h-16 w-16 rounded-md object-cover shadow"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white transition hover:bg-red-600"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          <button
            type="submit"
            className="btn blue-btn w-full py-2 font-semibold"
          >
            Submit
          </button>
        </form>
        <button
          onClick={() => setIsLoggedIn(false)}
          className="btn red-btn mt-4 w-full py-2 font-semibold"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
