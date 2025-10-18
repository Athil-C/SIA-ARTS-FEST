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
import img40 from "../assets/gallery/img40.jpg";
import img41 from "../assets/gallery/img41.jpg";
import img42 from "../assets/gallery/img42.jpg";
import img43 from "../assets/gallery/img43.jpg";
import img47 from "../assets/gallery/img47.jpg";
import img51 from "../assets/gallery/img51.jpg";
import img53 from "../assets/gallery/img53.jpg";
import img55 from "../assets/gallery/img55.jpg";
import img56 from "../assets/gallery/img56.jpg";
import img64 from "../assets/gallery/img64.jpg";
import img44 from "../assets/gallery/img44.png";
import img46 from "../assets/gallery/img46.png";
import img50 from "../assets/gallery/img50.png";
import img52 from "../assets/gallery/img52.png";
import img57 from "../assets/gallery/img57.png";
import img58 from "../assets/gallery/img58.png";
import img60 from "../assets/gallery/img60.png";
import img61 from "../assets/gallery/img61.png";
import img62 from "../assets/gallery/img62.png";
import img63 from "../assets/gallery/img63.png";
import img65 from "../assets/gallery/img65.png";
import img66 from "../assets/gallery/img66.png";
import img67 from "../assets/gallery/img67.jpg";
import img68 from "../assets/gallery/img68.jpg";
import img69 from "../assets/gallery/img69.jpg";
import img70 from "../assets/gallery/img70.jpg";
import img71 from "../assets/gallery/img71.jpg";
import img72 from "../assets/gallery/img72.jpg";
import img73 from "../assets/gallery/img73.jpg";
import img74 from "../assets/gallery/img74.jpg";
import img75 from "../assets/gallery/img75.jpg";
import img76 from "../assets/gallery/img76.jpg";
import img77 from "../assets/gallery/img77.jpg";
import img78 from "../assets/gallery/img78.jpg";
import img79 from "../assets/gallery/img79.jpg";
import img80 from "../assets/gallery/img80.jpg";
import img81 from "../assets/gallery/img81.jpg";
import img82 from "../assets/gallery/img82.jpg";
import img83 from "../assets/gallery/img83.jpg";
import img84 from "../assets/gallery/img84.jpg";
import img85 from "../assets/gallery/img85.jpg";
import img86 from "../assets/gallery/img86.jpg";
import img87 from "../assets/gallery/img87.jpg";
import img88 from "../assets/gallery/img88.jpg";
import img89 from "../assets/gallery/img89.jpg";
import img90 from "../assets/gallery/img90.jpg";
import img91 from "../assets/gallery/img91.jpg";
import img92 from "../assets/gallery/img92.jpg";
import img93 from "../assets/gallery/img93.jpg";
import img94 from "../assets/gallery/img94.jpg";
import img95 from "../assets/gallery/img95.jpg";
import img96 from "../assets/gallery/img96.jpg";
import img97 from "../assets/gallery/img97.jpg";
import img98 from "../assets/gallery/img98.jpg";
import img99 from "../assets/gallery/img99.jpg";
import img100 from "../assets/gallery/img100.jpg";
import img101 from "../assets/gallery/img101.jpg";
import img102 from "../assets/gallery/img102.jpg";
import img103 from "../assets/gallery/img103.jpg";
import img104 from "../assets/gallery/img104.jpg";
import img105 from "../assets/gallery/img105.jpg";
import img106 from "../assets/gallery/img106.jpg";
import img107 from "../assets/gallery/img107.jpg";
import img108 from "../assets/gallery/img108.jpg";
import img109 from "../assets/gallery/img109.jpg";
import img110 from "../assets/gallery/img110.jpg";
import img111 from "../assets/gallery/img111.jpg";
import img112 from "../assets/gallery/img112.jpg";
import img113 from "../assets/gallery/img113.jpg";
import img114 from "../assets/gallery/img114.jpg";
import img115 from "../assets/gallery/img115.jpg";
import img116 from "../assets/gallery/img116.jpg";
import img117 from "../assets/gallery/img117.jpg";
import img118 from "../assets/gallery/img118.jpg";
import img119 from "../assets/gallery/img119.jpg";
import img120 from "../assets/gallery/img120.jpg";
import img121 from "../assets/gallery/img121.jpg";
import img122 from "../assets/gallery/img122.jpg";
import img123 from "../assets/gallery/img123.jpg";
import img124 from "../assets/gallery/img124.jpg";







const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);



    const images = [
  img124, img123, img122, img121, img120, img119, img118, img117, img116, img115, img114, img113, img112, img111, img110, img109, img108, img107, img106, img105, img104, img103, img102, img101, img100, img99, img98, img97,
   img96, img95, img94, img93, img92, img91, img90, img89, img88, img87, img86, img85, img84, img83,img82, img81, img80, img79, img78, img77, img76, img75, img74, img73, img72, img71, img70, img69, img68, img67,
  img66, img65, img64, img63, img62, img61, img60, img58, img57, img56, img55, img53, img52, img51, img50, img47, img46, img44, img43, img42, img41, img40, img39, img38, img37, img36, img35, img34, img33, img32,
  img31, img30, img29, img28, img27, img26, img25, img24, img23, img22, img21, img20, img19, img18, img17, img16, img15, img14, img13, img12, img11, img10, img9, img8, img7, img6, img5, img4, img3, img2, img1,
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
