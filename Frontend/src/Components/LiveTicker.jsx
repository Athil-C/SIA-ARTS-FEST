// src/Components/LiveTicker.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';

const updates = [
 
  "🎶 The program **'SUFI SAMA' (General)** will be held on **Oct 18, 2025**, from **7:40 PM to 8:30 PM** at **Stage 1**. Don’t miss the soulful performance!",
  "🎤 The mesmerizing **'QAWWALI URD' (General)** is scheduled for **Oct 19, 2025**, from **9:30 PM to 10:10 PM** at **Stage 1**. Be there to witness the magic!",
  "🏆 **Best of Fest!** On **Oct 20, 2025**, the most outstanding programs from the entire fest will be performed once again. Don’t miss this grand finale!",
  "☕ **Power House** — a small **tea stall & bakery** run under the **Stationery Wing of the Students’ Union (SAFWA)** — is now open! Drop by for hot tea and fresh snacks.",
  "⚠️ **Correction:** All participants are requested to update any **absent candidate changes one day before the program**."

];

const LiveTicker = () => {
  return (
    <div className="w-full overflow-hidden bg-white rounded-md border border-red-300 shadow-sm mb-6">
      {/* Header for Live Updates */}
      <div className="flex items-center px-4 py-2 bg-red-100 border-b border-red-300">
        <Bell className="w-4 h-4 text-red-500 mr-2" />
        <span className="font-semibold text-red-600">Live Updates</span>
      </div>

      {/* Scrolling text area */}
      <div className="relative w-full h-10 overflow-hidden">
        <motion.div
          className="absolute whitespace-nowrap"
          initial={{ x: '30%' }} // Start at the right
          animate={{ x: '-100%' }} // Move to the left
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 70, // Speed of the scroll
          }}
        >
          {updates.map((text, idx) => (
            <span key={idx} className="inline-block mr-16 text-gray-700 text-sm">
              {text}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LiveTicker;
