import React, { useState } from "react";
import ImageModal from "./ImageModal";

 
import img1 from "../assets/gallery/img1.jpg";
import img2 from "../assets/gallery/img2.jpg";
import img3 from "../assets/gallery/img3.jpg";
import img4 from "../assets/gallery/img4.jpg";
import img5 from "../assets/gallery/img5.jpg";
import img6 from "../assets/gallery/img6.jpg";
import img7 from "../assets/gallery/img7.jpg";
import img8 from "../assets/gallery/img8.jpg";
import img9 from "../assets/gallery/img9.jpg";
import img10 from "../assets/gallery/img10.jpg";
import img11 from "../assets/gallery/img11.jpg";
import img12 from "../assets/gallery/img12.jpg";
import img13 from "../assets/gallery/img13.jpg";
import img14 from "../assets/gallery/img14.jpg";
import img15 from "../assets/gallery/img15.jpg";
import img16 from "../assets/gallery/img16.jpg";
import img17 from "../assets/gallery/img17.jpg";




const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);



    const images = [ img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17
    ];


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
