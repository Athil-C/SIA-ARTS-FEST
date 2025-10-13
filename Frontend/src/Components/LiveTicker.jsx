// src/Components/LiveTicker.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';

const updates = [
  "📢 The venue for the 'Academic Talk ENG' (A8) has been moved from Stage 2 to **Auditorium A**. Please check the updated schedule.",
  "⏳ **Day 2 (Oct 17)** is officially underway! Don't miss the 'Word Fight' (C31) starting at 7:30 AM at Stage 3.",
  "💡 **Pro-tip:** Don't forget to submit any necessary digital files for 'Theme Presentation' (G6) by 6:00 PM today.",
  "📣 Calling all volunteers! Report to the control desk for instructions regarding the evening events.",
  "⚠️ **Correction:** The start time for 'TADRIS' (A22) on Oct 16 has been adjusted to **7:20 PM**."
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
          initial={{ x: '50%' }} // Start at the right
          animate={{ x: '-100%' }} // Move to the left
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 40, // Speed of the scroll
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
