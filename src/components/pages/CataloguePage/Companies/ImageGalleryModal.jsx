import React from "react";
import ImageGallery from "react-image-gallery";

import { useCompany } from "../../../../context/CompanyContext";

import "react-image-gallery/styles/css/image-gallery.css";
import { IoCloseOutline } from "react-icons/io5";

const ImageGalleryModal = ({ images, startIndex }) => {
  if (!images?.length) return null;

  const { setIsGalleryOpen } = useCompany();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-55"
      onClick={() => setIsGalleryOpen(false)}
    >
      <div
        className="relative w-full max-w-3xl rounded-lg bg-white px-4 pb-4 pt-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-2 top-1 z-50"
          onClick={() => setIsGalleryOpen(false)}
        >
          <IoCloseOutline
            size={38}
            className="text-customGrey hover:text-gray-900"
          />
        </button>

        <ImageGallery
          items={images}
          showThumbnails={true}
          showPlayButton={false}
          startIndex={startIndex}
        />
      </div>
    </div>
  );
};

export default ImageGalleryModal;
