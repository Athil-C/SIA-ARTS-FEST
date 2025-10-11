import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import About1 from "../../assets/img/about/books.png";
import About2 from "../../assets/img/about/journal.png";
import About3 from "../../assets/img/about/pen.png";
import { fadeIn } from "../FrameMotion/variants";

// Controllers data
const controllers = [
  { name: "Muhsin Hudawi", role: "Controller", image: "/images/muhsin.png" },
  { name: "Ziyad Hudawi", role: "Controller", image: "/images/ziyad.png" },
  { name: "Ramees TR", role: "Controller", image: "/images/ramees.jpg" },
  { name: "Rabah Ali", role: "Controller", image: "/images/rabah.jpg" },
  { name: "Faris k", role: "Media Controller", image: "/images/faris.webp" },
];

const About = () => {
  const images = [About1, About2, About3, About1, About2, About3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentImageIndex === 3) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentImageIndex(0);
        setTimeout(() => {
          setIsTransitioning(true);
        }, 50);
      }, 500);
    }
  }, [currentImageIndex]);

  return (
    <div className="flex flex-col items-center justify-center">
      {/* ---------- About Section ---------- */}
      <section className="h-screen py-12 flex justify-center" style={{ backgroundColor: "#f3eae3ff" }}>
        <div className="w-full flex justify-center items-center h-full">
          <div className="flex flex-col md:flex-row w-full md:w-3/4 gap-12">
            {/* Text Section */}
            <motion.section
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="w-full md:w-3/5 flex justify-center items-center"
            >
              <div className="w-3/4 text-center md:text-left mt-12 md:mt-0 text-white">
                <h1 className="text-[4rem] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600">
                  Witr Sia Arts
                </h1>
                <p className="mt-6 text-lg lg:text-xl leading-relaxed text-black">
                  The full logo combines the Malayalam letter 'ഋ' and the Arabic word وَتر (witr). The 'ഋ' is a largely unused, solitary vowel in Malayalam, and وَتر literally means 'alone' or 'single' in Arabic. This artistic fusion symbolizes singularity and uniqueness, celebrating the power and beauty found in being distinct or standing apart.
                </p>
              </div>
            </motion.section>

            {/* Carousel Section */}
            <motion.section
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="w-full md:w-2/5 flex justify-center items-center relative"
            >
              <div className="w-64 lg:w-80 overflow-hidden rounded-xl shadow-lg transform transition-all">
                <div
                  ref={carouselRef}
                  className={`flex ${isTransitioning ? "transition-transform duration-700 ease-in-out" : "transition-none"}`}
                  style={{
                    transform: `translateX(-${currentImageIndex * 100}%)`,
                  }}
                >
                  {images.map((img, index) => (
                    <motion.img
                      key={index}
                      src={img}
                      alt={`Slide ${(index % 3) + 1}`}
                      className="w-full h-auto flex-shrink-0 object-cover rounded-xl hover:scale-105 transition-transform duration-500"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                    />
                  ))}
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </section>

      {/* ---------- Controllers Section ---------- */}
      <section className="relative w-full py-16 px-6 md:px-16 overflow-hidden" style={{ backgroundColor: "#ee5b44ff" }}>
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Gradient Text Heading */}
<h2 className="text-5xl font-extrabold mb-12 text-center text-[#ffcc00]">
            Controllers
          </h2>

          {/* Controllers List */}
          <div className="flex flex-wrap justify-center gap-8">
            {/* Desktop View (First Two in Grid, Last Three in Row) */}
            <div className="hidden lg:grid grid-cols-2 gap-8 w-50">
              {controllers.slice(0, 2).map((person, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center  p-6 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-500"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                   style={{
                  backgroundImage: "linear-gradient(135deg, #ff6600, #b30000)",
                }}
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-20 h-20 object-cover rounded-full border-4 border-white mb-4 shadow-md transition-transform duration-500"
                  />
                  <h3 className="text-xl font-semibold text-white">{person.name}</h3>
                  <p className="text-sm text-white">{person.role}</p>
                </motion.div>
              ))}
            </div>

            {/* Last Three Controllers (Horizontal Row, Smaller Boxes) */}
            <div className="hidden lg:flex justify-center gap-8 w-full">
              {controllers.slice(2).map((person, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center  p-4 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-500 w-48"
                  whileHover={{ scale: 1.1 }}
                   style={{
                  backgroundImage: "linear-gradient(135deg, #ff6600, #b30000)",
                }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-24 h-24 object-cover rounded-full border-4 border-white mb-4 shadow-md transition-transform duration-500"
                  />
                  <h3 className="text-lg font-semibold text-white">{person.name}</h3>
                  <p className="text-sm text-white">{person.role}</p>
                </motion.div>
              ))}
            </div>

            {/* Mobile View (Vertical Layout) */}
            <div className="lg:hidden flex flex-col items-center justify-center gap-8">
              {controllers.map((person, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center  p-6 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-500 w-56"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                   style={{
                  backgroundImage: "linear-gradient(135deg, #ff6600, #b30000)",
                }}
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-32 h-32 object-cover rounded-full border-4 border-white mb-4 shadow-md transition-transform duration-500"
                  />
                  <h3 className="text-xl font-semibold text-white">{person.name}</h3>
                  <p className="text-sm text-white">{person.role}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Media Incharge */}
          <div className="mt-10 text-center">
            <p className="text-white text-lg font-medium">
           
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #ff6600, #b30000)",
                }}
              >
 
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
