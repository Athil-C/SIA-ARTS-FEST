import React, { useState } from "react";

const MediaUploader = () => {
  const [mediaFiles, setMediaFiles] = useState([]);

  // Handle file selection
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setMediaFiles((prev) => [...prev, ...files]);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Upload Photos & Videos</h2>

      {/* File input */}
      <input
        type="file"
        accept="image/*,video/*"
        multiple
        onChange={handleFileChange}
        className="mb-4"
      />

      {/* Preview section */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {mediaFiles.map((file, index) => {
          const url = URL.createObjectURL(file);
          if (file.type.startsWith("image/")) {
            return (
              <img
                key={index}
                src={url}
                alt="uploaded preview"
                className="w-full h-40 object-cover rounded-lg shadow"
              />
            );
          } else if (file.type.startsWith("video/")) {
            return (
              <video
                key={index}
                controls
                src={url}
                className="w-full h-40 rounded-lg shadow"
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default MediaUploader;
