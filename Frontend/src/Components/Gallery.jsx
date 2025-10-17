import React, { useState } from "react";
import ImageModal from "./ImageModal";
import ScrollToTop from '../Components/ScrollToTop/ScrollToTop'
 
 
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
import img18 from "../assets/gallery/img18.jpg";
import img19 from "../assets/gallery/img19.jpg";
import img20 from "../assets/gallery/img20.jpg";
import img21 from "../assets/gallery/img21.jpg";
import img22 from "../assets/gallery/img22.jpg";
import img23 from "../assets/gallery/img23.jpg";
import img24 from "../assets/gallery/img24.jpg";
import img25 from "../assets/gallery/img25.jpg";
import img26 from "../assets/gallery/img26.jpg";
import img27 from "../assets/gallery/img27.jpg";
import img28 from "../assets/gallery/img28.jpg";
import img29 from "../assets/gallery/img29.jpg";
import img30 from "../assets/gallery/img30.jpg";
import img31 from "../assets/gallery/img31.jpg";
import img32 from "../assets/gallery/img32.png";
import img33 from "../assets/gallery/img33.png";
import img34 from "../assets/gallery/img34.png";
import img35 from "../assets/gallery/img35.png";
import img36 from "../assets/gallery/img36.png";
import img37 from "../assets/gallery/img37.png";
import img38 from "../assets/gallery/img38.png";
import img39 from "../assets/gallery/img39.png";
import img40 from "../assets/gallery/img40.png";
import img41 from "../assets/gallery/img41.png";
import img42 from "../assets/gallery/img42.png";
import img43 from "../assets/gallery/img43.png";
import img44 from "../assets/gallery/img44.png";
import img45 from "../assets/gallery/img45.png";
import img46 from "../assets/gallery/img46.png";
import img47 from "../assets/gallery/img47.png";
import img48 from "../assets/gallery/img48.png";
import img49 from "../assets/gallery/img49.png";
import img50 from "../assets/gallery/img50.png";
import img51 from "../assets/gallery/img51.png";
import img52 from "../assets/gallery/img52.png";
import img53 from "../assets/gallery/img53.png";
import img54 from "../assets/gallery/img54.png";
import img55 from "../assets/gallery/img55.png";
import img56 from "../assets/gallery/img56.png";
import img57 from "../assets/gallery/img57.png";
import img58 from "../assets/gallery/img58.png";
import img59 from "../assets/gallery/img59.png";
import img60 from "../assets/gallery/img60.png";
import img61 from "../assets/gallery/img61.png";
import img62 from "../assets/gallery/img62.png";
import img63 from "../assets/gallery/img63.png";
import img64 from "../assets/gallery/img64.png";
import img65 from "../assets/gallery/img65.png";
import img66 from "../assets/gallery/img66.png";






const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);



    const images = [ , img32, img33, img34, img35, img36, img37, img38, img39, img40, img41, img42, img43, img44, img45, img46, img47, img48, img49, img50, img51, img52, img53, img54, img55, img56, img57, img58, img59, img60, img61, img62, img63, img64, img65, img66,img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31,
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
   <ScrollToTop />
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
