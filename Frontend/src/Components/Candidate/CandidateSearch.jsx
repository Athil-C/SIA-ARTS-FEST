import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../FrameMotion/variants";

const CandidateSearch = () => {
  const [chestNumber, setChestNumber] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!chestNumber.trim()) return;
    navigate(`/candidate/${chestNumber}`);
  };

  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-all duration-300"
    >
      <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white tracking-wide">
        Candidate Search
      </h1>

      <form
        onSubmit={handleSearch}
        className="flex flex-col md:flex-row items-center gap-4 bg-white dark:bg-gray-800 shadow-xl rounded-2xl px-6 py-8 border border-gray-200 dark:border-gray-700"
      >
        <input
          type="text"
          placeholder="Enter Chest Number"
          value={chestNumber}
          onChange={(e) => setChestNumber(e.target.value)}
          className="border-2 border-gray-300 dark:border-gray-600 rounded-xl px-5 py-3 text-lg w-72 text-center focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white dark:bg-gray-900 dark:text-white transition"
        />
        <button
          type="submit"
          className="bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-700 active:scale-95 transition-all duration-150"
        >
          Search
        </button>
      </form>
    </motion.div>
  );
};

export default CandidateSearch;
