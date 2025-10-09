import { useEffect } from "react";
import ImageGallery from "react-image-gallery";
import { IoCloseOutline } from "react-icons/io5";
import "react-image-gallery/styles/css/image-gallery.css";
import { useCompany } from "@context/CompanyMapContext";

const ImageGalleryModal = () => {
  const { isGalleryOpen, setIsGalleryOpen, galleryImages, currentImageIndex } =
    useCompany();

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsGalleryOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [setIsGalleryOpen]);

  // Render nothing if the gallery is closed or there are no images
  if (!galleryImages?.length || !isGalleryOpen) return null;

  return (
    <div
      role="button"
      tabIndex={0}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black opacity-50"
      onClick={() => setIsGalleryOpen(false)}
      onKeyDown={(e) =>
        (e.key === "Enter" || e.key === " ") && setIsGalleryOpen(false)
      }
    >
      {/* Disabling jsx-a11y rules here because this div is just the modal content container
          It's not meant to be interactive itself—clicks inside should not close the overlay */}

      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
      <div
        className="relative w-full max-w-3xl rounded-lg bg-red-500 px-4 pb-4 pt-10"
        // stopPropagation stops the click event from bubbling up to the overlay
        // so clicking inside the modal doesn't close it
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
          items={galleryImages}
          showThumbnails={true}
          showPlayButton={false}
          startIndex={currentImageIndex}
        />
      </div>
    </div>
  );
};

export default ImageGalleryModal;
