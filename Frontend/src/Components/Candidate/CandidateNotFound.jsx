import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../FrameMotion/variants";

const CandidateNotFound = ({ chestNumber }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-red-50 to-red-100 dark:from-gray-900 dark:to-red-950 transition-all duration-300"
    >
      <h1 className="text-3xl font-bold text-red-700 dark:text-red-400 mb-4">
        No Result Found
      </h1>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Chest No <span className="font-semibold">{chestNumber}</span> not found.
      </p>
      <Link
        to="/candidate-search"
        className="bg-orange-600 text-white px-6 py-3 rounded-xl hover:bg-orange-700 transition-all duration-200"
      >
        Try Again
      </Link>
    </motion.div>
  );
};

export default CandidateNotFound;
