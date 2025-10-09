// src/Components/LiveTicker.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';

const updates = [
  "📢 Registration is now open for all teams.",
  "💃 Dance competition results are now available. Check the Results page.",
  "🎵 Music competition will start soon. Be prepared!",
  "🏆 Final leaderboard will be announced tonight."
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
          initial={{ x: '100%' }} // Start at the right
          animate={{ x: '-100%' }} // Move to the left
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 20, // Speed of the scroll
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
