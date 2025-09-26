import React from "react";
import { X } from "lucide-react";

const ImageModal = ({ src, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="relative max-w-3xl w-full p-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300"
        >
          <X size={30} />
        </button>
        <img src={src} alt="Preview" className="rounded-lg w-full h-auto" />
      </div>
    </div>
  );
};

export default ImageModal;
