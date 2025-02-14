import React from "react";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { IoCloseOutline } from "react-icons/io5";

import { useCompany } from "@context/CompanyContext";

const ImageGalleryModal = ({ images, startIndex }) => {
  if (!images?.length) return null;

  const { setIsGalleryOpen } = useCompany();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-55"
      onClick={() => setIsGalleryOpen(false)}
    >
      <div
        className="relative w-full max-w-4xl rounded-lg bg-white px-4 pb-4 pt-14"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-0 top-0 z-50 p-2"
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
