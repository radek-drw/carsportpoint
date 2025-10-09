import React from "react";
import { IoCloseOutline } from "react-icons/io5";

import { useAdmin } from "@context/AdminContext";

const ImagePreview = () => {
  const { setFormData, imagePreviews, setImagePreviews } = useAdmin();

  const handleImageRemove = (index) => {
    // prettier-ignore
    setFormData((prev) => ({...prev, images: prev.images.filter((_, i) => i !== index)}));
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  if (imagePreviews.length === 0) return null;

  return (
    <div className="mt-4 flex justify-center gap-4">
      {imagePreviews.map((src, index) => (
        <div key={index} className="relative">
          <img
            src={src}
            alt={`Preview ${index}`}
            className="size-16 rounded-md object-cover shadow shadow-slate-400"
          />

          {/* Button to remove the image */}
          <button
            type="button"
            onClick={() => handleImageRemove(index)}
            className="absolute -right-2 -top-2 flex size-5 items-center justify-center rounded-full bg-red-500 text-xs text-white transition hover:bg-red-600"
          >
            <IoCloseOutline size={30} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ImagePreview;
