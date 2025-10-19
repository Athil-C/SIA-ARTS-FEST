import React from "react";
import { X, Download, ChevronLeft, ChevronRight } from "lucide-react";

const ImageModal = ({ src, onClose, onNext, onPrev }) => {
  // Extract filename from src (for download name)
  const fileName = src.split("/").pop() || "image.jpg";

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      {/* Top buttons */}
      <div className="absolute top-6 right-8 flex items-center gap-3 z-[60]">
        {/* Download button */}
        <a
          href={src}
          download={fileName}
          className="text-white hover:text-gray-300 bg-black/40 rounded-full p-2 backdrop-blur-sm"
          title="Download Image"
        >
          <Download size={24} />
        </a>

        {/* Close button */}
        <button
          onClick={onClose}
          className="text-white hover:text-gray-300 bg-black/40 rounded-full p-2 backdrop-blur-sm"
          title="Close"
        >
          <X size={26} />
        </button>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={onPrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 rounded-full p-3 backdrop-blur-sm z-[60]"
        title="Previous"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={onNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 rounded-full p-3 backdrop-blur-sm z-[60]"
        title="Next"
      >
        <ChevronRight size={32} />
      </button>

      {/* Image container */}
      <div className="relative max-w-4xl w-full p-4 flex justify-center">
        <img
          src={src}
          alt="Preview"
          className="rounded-lg w-auto max-h-[90vh] object-contain"
        />
      </div>
    </div>
  );
};

export default ImageModal;
