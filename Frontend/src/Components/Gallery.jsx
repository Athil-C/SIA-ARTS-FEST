import React, { useState } from "react";
import ImageModal from "./ImageModal";
import img1 from "../assets/gallery/adhil.jpg";
import img2 from "../assets/gallery/alishan.jpg";
import img3 from "../assets/gallery/alishan1.jpg";
import img4 from "../assets/gallery/azmil.jpg";
import img5 from "../assets/gallery/faheem.jpg";
import img6 from "../assets/gallery/img.1.jpg";
import img7 from "../assets/gallery/muhammed a.jpg";
import img8 from "../assets/gallery/muhammed1.jpg";
import img9 from "../assets/gallery/najad.jpg";
import img10 from "../assets/gallery/muhammed2.jpg";
import img11 from "../assets/gallery/rayyan.jpg";
import img12 from "../assets/gallery/riswan.jpg";
import img13 from "../assets/gallery/salman.jpg";
import img14 from "../assets/gallery/salman1.jpg";
import img15 from "../assets/gallery/shamil.jpg";
import img16 from "../assets/gallery/waseem.jpg";
import img17 from "../assets/gallery/waseem1.jpg";
import img18 from "../assets/gallery/zibiyan.jpg";
import img19 from "../assets/gallery/adhil1.jpg";
import img20 from "../assets/gallery/faheem1.jpg";
import img21 from "../assets/gallery/hafeem.jpg";
import img22 from "../assets/gallery/hathim.jpg";
import img23 from "../assets/gallery/ibrahim.jpg";
import img24 from "../assets/gallery/mashhoor.jpg";
import img25 from "../assets/gallery/rayyan1.jpg";
import img26 from "../assets/gallery/salman2.jpg";
import img27 from "../assets/gallery/shamil1.jpg";
import img28 from "../assets/gallery/thangal.jpg";
import img29 from "../assets/gallery/thangal1.jpg";
import img30 from "../assets/gallery/zibiyan.jpg";


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
