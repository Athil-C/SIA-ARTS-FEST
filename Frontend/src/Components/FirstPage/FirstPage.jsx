import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeImg from '../../assets/img/HomeImg/festlogo.webp';
import HomeTxt from '../../assets/img/HomeImg/TextRed.webp';
import HomePattern from '../../assets/img/pattern-01.png';

import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '../FrameMotion/variants';
import confetti from 'canvas-confetti';

const FirstPage = () => {
  const navigate = useNavigate();
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 5000); // Show for 5 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleResultRedirect = () => {
    navigate('/result');
  };

  const handleCelebrateClick = () => {
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 },
    });
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col bg-[#f3eae3] dark:bg-[#191919] text-white">
      <div className="flex-grow flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between px-4">

          {/* Left Side Text Content */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="hidden md:block w-full text-start mb-8"
          >
            <div className="max-w-6xl mx-auto md:mx-0">
              <h1 className="text-3xl md:text-6xl font-semibold mb-4 text-yellow-400">
                Welcome to Withr
              </h1>
              <p className="mb-6 text-base md:text-lg text-black dark:text-gray-300">
                Withr is a premier platform for students to showcase their talents. It highlights the rich art forms of Islamic culture, presenting them to a wider audience. The event fosters creativity, cultural appreciation, and artistic expression.
              </p>
              <button
                type="button"
                onClick={handleResultRedirect}
                className="w-2/3 md:w-auto px-6 py-3 text-white bg-yellow-500 rounded-md hover:bg-yellow-600 transition-colors"
              >
                Check your Results
              </button>
            </div>
          </motion.div>

          {/* Right Side Logo & Hint */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="md:flex w-3/4 flex-col justify-center items-center"
          >
            <img
              src={HomeImg}
              alt="Funoon Fiesta Logo"
              className="max-w-[300px] w-full h-auto object-contain cursor-pointer"
              onClick={handleCelebrateClick}
              title="Click the logo to celebrate!"
            />

            <AnimatePresence>
              {showHint && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 1 }}
                  className="font-bold text-lg mt-4 text-center bg-gradient-to-r from-yellow-500 via-pink-500 to-blue-500 bg-clip-text text-transparent"
                >
                  Tap the logo to celebrate
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Mobile View */}
          <motion.div
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="flex flex-col gap-5 md:hidden w-3/4 justify-center items-center mt-5"
          >
            <img
              src={HomeTxt}
              alt="Funoon Fiesta Text"
              className="max-w-[500px] w-full h-auto object-contain"
            />
            <motion.button
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              type="button"
              onClick={handleResultRedirect}
              className="w-2/3 text-center md:w-auto px-6 py-3 text-white bg-yellow-500 rounded-md hover:bg-yellow-600 transition-colors"
            >
              View Results
            </motion.button>
          </motion.div>

        </div>
      </div>

      {/* Bottom Decorative Pattern */}
      <motion.div
        variants={fadeIn('down', 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
        className="w-full h-[100px] bg-repeat overflow-hidden"
        style={{
          backgroundImage: `url(${HomePattern})`,
          backgroundSize: '3164px 34px',
          backgroundPosition: 'center',
        }}
      />
    </section>
  );
};

export default FirstPage;
