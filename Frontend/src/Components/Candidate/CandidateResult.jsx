import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../FrameMotion/variants";

const candidateData = [
  {
    id: "101",
    name: "Muhammed Ameen",
    chestNo: "101",
    programs: [
      { event: "QIRATH" },
      { event: "ELOCUTION" },
      { event: "ESSAY WRITING" },
    ],
  },
  {
    id: "102",
    name: "Ali Hassan",
    chestNo: "102",
    programs: [
      { event: "NAATH" },
      { event: "DEBATE" },
    ],
  },
  {
    id: "103",
    name: "Athil",
    chestNo: "103",
    programs: [
      { event: "ELOCUTION" },
      { event: "POEM RECITATION" },
    ],
  },
];

const ProgramDetails = () => {
  const { id } = useParams();
  const candidate = candidateData.find((c) => c.id === id);

  if (!candidate) {
    return (
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        animate="show"
        className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-orange-50 to-orange-100 dark:from-gray-900 dark:to-gray-800"
      >
        <h1 className="text-3xl font-bold text-red-600 dark:text-red-400 mb-3">
          Candidate Not Found
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">
          No record found for ID: <span className="font-semibold">{id}</span>
        </p>
        <Link
          to="/candidate-search"
          className="px-6 py-3 rounded-xl bg-orange-600 text-white hover:bg-orange-700 transition-all duration-300 shadow-md"
        >
          Back to Search
        </Link>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-start bg-gradient-to-br from-orange-50 to-yellow-100 dark:from-gray-900 dark:to-gray-800 px-4 py-10">
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        animate="show"
        className="relative w-full max-w-2xl bg-white/60 dark:bg-gray-900/70 backdrop-blur-md rounded-3xl shadow-2xl border border-orange-200 dark:border-gray-700 overflow-hidden"
      >
        {/* Candidate Name */}
        <div className="bg-gradient-to-r from-orange-500 to-yellow-400 text-center py-6">
          <h1 className="text-3xl font-extrabold text-white tracking-wide">
            {candidate.name}
          </h1>
        </div>

        {/* Programs Heading */}
        <div className="text-center mt-6 mb-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Programs
          </h2>
        </div>

        {/* Program List */}
        <div className="p-6">
          <motion.ul
            variants={fadeIn("up", 0.2)}
            className="bg-white/30 dark:bg-gray-800/40 rounded-xl py-4 px-6 shadow-inner list-disc list-inside space-y-2"
          >
            {candidate.programs.map((program, index) => (
              <li
                key={index}
                className="text-gray-900 dark:text-gray-100 font-medium"
              >
                {program.event}
              </li>
            ))}
          </motion.ul>

          {/* Back Button */}
          <div className="text-center mt-6">
            <Link
              to="/candidate-search"
              className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all font-semibold"
            >
              Back to Search
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProgramDetails;
