import React, { useState } from "react";
import ImageModal from "./ImageModal";
  


const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);



    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30];


    return (
        <div className="p-6">
            <h2 className="text-3xl font-semibold text-center mb-6">Photo Gallery</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className="relative cursor-pointer overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                        onClick={() => setSelectedImage(src)}
                    >
                        <img src={src} alt={`Gallery ${index}`} className="w-full h-48 object-cover" />
                    </div>
                ))}

            </div>

            {selectedImage && (
                <ImageModal
                    src={selectedImage}
                    onClose={() => setSelectedImage(null)}
                />
            )}
        </div>
    );
};

export default Gallery;
