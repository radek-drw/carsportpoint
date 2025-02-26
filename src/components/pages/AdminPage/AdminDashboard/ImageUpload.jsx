import React from "react";

import { useAdmin } from "@context/AdminContext";

const MAX_FILES = 5;

const ImageUpload = () => {
  const { formData, setFormData, setImagePreviews } = useAdmin();

  const handleImageUpload = (e) => {
    // prettier-ignore
    const newFiles = Array.from(e.target.files).slice(0, MAX_FILES - formData.images.length);

    setFormData((prev) => ({ ...prev, images: [...prev.images, ...newFiles] }));
    setImagePreviews((prev) => [...prev, ...newFiles.map(URL.createObjectURL)]);
  };

  return (
    <>
      <label
        className={`btn mb-20 block w-full bg-gray-100 text-center text-gray-700 ${
          formData.images.length >= MAX_FILES
            ? "cursor-not-allowed"
            : "blue-btn cursor-pointer hover:bg-gray-200"
        }`}
      >
        {formData.images.length >= MAX_FILES
          ? "File Limit Reached"
          : "Upload Images"}
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
          className="hidden"
          disabled={formData.images.length >= MAX_FILES}
        />
      </label>
    </>
  );
};

export default ImageUpload;
