import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../FrameMotion/variants";

const candidateData = [



  {
    "id": "503",
    "name": "RAMEES AHAMMED MU",
    "chestNo": "503",
    "programs": [
      { "event": "NEWS WRITING ENG" },
      { "event": "POEM WRITING ENG" },
      { "event": "STORY WRITING ENG" },
      { "event": "PROOF READING ENG" },
      { "event": "ACADEMIC ESSAY ENG" },
      { "event": "ABSTRACT WRITING ENG" },
      { "event": "TAHLILUL IBARA" },
      { "event": "ANCHORING" },
      { "event": "Mr. TRANSLATOR" },
      { "event": "COMMENTARY ENG" },
      { "event": "ACADEMIC TALK ENG" },
      { "event": "MOCK INTERVIEW ENG" },
      { "event": "FACE TO FACE ENG" },
      { "event": "MASHUP" },
      { "event": "CAMPUS IQ" },
      { "event": "PROJECT PRESENTATION ENG" },
      { "event": "FACE KITHAB" }
    ]
  },
  {
    "id": "508",
    "name": "MUHAMMED SAHAL T",
    "chestNo": "508",
    "programs": [
      { "event": "POEM WRITING MLM" },
      { "event": "STORY WRITING MLM" },
      { "event": "WA'ZQIRATH" },
      { "event": "SPEECH AND SONG ARB" },
      { "event": "MALAPPATTU" },
      { "event": "KAVIYARANG" },
      { "event": "GAZAL" }
    ]
  },
  {
    "id": "509",
    "name": "MUHAMMED HADI",
    "chestNo": "509",
    "programs": [
      { "event": "POEM WRITING ARB" },
      { "event": "PROOF READING URD" },
      { "event": "ESSAY WRITING URD" },
      { "event": "CARTOON" },
      { "event": "SIYASI THAQREER URD" }
    ]
  },
  {
    "id": "514",
    "name": "MOHAMMED ANSIL",
    "chestNo": "514",
    "programs": [
      { "event": "NEWS WRITING ARB" },
      { "event": "ACRYLIC PAINTING" },
      { "event": "ADVANTURE PHOTOGRAPHY" },
      { "event": "KHUTHUBAT" },
      { "event": "ADRIS" },
      { "event": "ANNOUNCEMENT" }
    ]
  },
  {
    "id": "518",
    "name": "SUHAID P",
    "chestNo": "518",
    "programs": [
      { "event": "NEWS WRITING MLM" },
      { "event": "POEM WRITING MLM" },
      { "event": "STORY WRITING MLM" },
      { "event": "PROOF READING MLM" },
      { "event": "SCREEN PLAY WRITING MLM" },
      { "event": "ESSAY WRITING MLM" },
      { "event": "FEATURE WRITING MLM" },
      { "event": "INSTANT NEWS PAPER" },
      { "event": "EXTEMPORE SPEECH MLM" },
      { "event": "NEWS WRITING AND READING MLM" },
      { "event": "KAVIYARANG" }
    ]
  },
  {
    "id": "526",
    "name": "RAZI SHOUKATHALI",
    "chestNo": "526",
    "programs": [
      { "event": "STORY WRITING ARAB" },
      { "event": "PROOF READING ARB" },
      { "event": "MAQAMA ARABIC" },
      { "event": "TAHLILUL IBARA" },
      { "event": "GROUP DISCUSSION" },
      { "event": "PROUD MUSLIM" },
      { "event": "Mr. TRANSLATOR" },
      { "event": "COMMENTARY ARB" },
      { "event": "NEWS WRITING AND READING ARB" },
      { "event": "FACE TO FACE ARB" },
      { "event": "NASHEED" },
      { "event": "CAMPUS IQ" },
      { "event": "REVERSE QUIZ" }
    ]
  },
  {
    "id": "529",
    "name": "NABEEL VAJID K",
    "chestNo": "529",
    "programs": [
      { "event": "NEWS WRITING MLM" },
      { "event": "SCREEN PLAY WRITING MLM" },
      { "event": "ESSAY WRITING MLM" },
      { "event": "FEATURE WRITING MLM" },
      { "event": "CARTOON" },
      { "event": "GROUP DISCUSSION" },
      { "event": "ADVANTURE PHOTOGRAPHY" },
      { "event": "EXTEMPORE SPEECH MLM" }
    ]
  },
  {
    "id": "532",
    "name": "MUHAMMED SHADIL M",
    "chestNo": "532",
    "programs": [
      { "event": "NEWS WRITING ARB" },
      { "event": "POEM WRITING ARB" },
      { "event": "STORY WRITING ARAB" },
      { "event": "PROOF READING ARB" },
      { "event": "MAQAMA ARABIC" },
      { "event": "PROUD MUSLIM" },
      { "event": "KHUTHUBA" },
      { "event": "FACE TO FACE ARB" },
      { "event": "FACE KITHAB" }
    ]
  },
  {
    "id": "536",
    "name": "AFIN SIDHAN N",
    "chestNo": "536",
    "programs": [
      { "event": "NEWS WRITING URD" },
      { "event": "POEM WRITING URD" },
      { "event": "STORY WRITING URD" },
      { "event": "PROOF READING MLM" },
      { "event": "ESSAY WRITING URD" },
      { "event": "REACTION" },
      { "event": "SIYASI THAQREER URD" },
      { "event": "NEWS WRITING AND READING URD" },
      { "event": "MAPPILAPPATT" },
      { "event": "ADRIS" },
      { "event": "POLITICAL SATIRE MLM" },
      { "event": "ANNOUNCEMENT" },
      { "event": "REVERSE QUIZ" }
    ]
  },
  {
    "id": "647",
    "name": "MUHAMMED MUBSHIR",
    "chestNo": "647",
    "programs": [
      { "event": "NEWS WRITING URD" },
      { "event": "POEM WRITING URD" },
      { "event": "STORY WRITING URD" },
      { "event": "PROOF READING URD" }
    ]
  },
  {
    "id": "652",
    "name": "MUHAMMED ARSHIL ALI KP",
    "chestNo": "652",
    "programs": [
      { "event": "NEWS WRITING ENG" },
      { "event": "STORY WRITING ENG" },
      { "event": "PROOF READING ENG" },
      { "event": "ACADEMIC ESSAY ENG" },
      { "event": "ABSTRACT WRITING ENG" },
      { "event": "ACRYLIC PAINTING" },
      { "event": "REACTION" },
      { "event": "NEWS WRITING AND READING ENG" },
      { "event": "MOCK INTERVIEW ENG" },
      { "event": "FACE TO FACE ENG" },
      { "event": "PROJECT PRESENTATION ENG" }
    ]
  },
  {
    "id": "527",
    "name": "MUHAMMED NIJAD MS",
    "chestNo": "527",
    "programs": [
      { "event": "SONG ENG" },
      { "event": "GEO GIANT" },
      { "event": "GK QUIZ" },
      { "event": "POEM WRITING ARB" }
    ]
  },
  {
    "id": "538",
    "name": "MUHAMMED NASHEETH V",
    "chestNo": "538",
    "programs": [
      { "event": "WA'Z" },
      { "event": "PADAPPATTU" },
      { "event": "MASHUP" },
      { "event": "NASHEED" },
      { "event": "PADHYAPARAYANAM" },
      { "event": "SPEECH & SONG MLM" },
      { "event": "INSTANT NEWS PAPER" },
      { "event": "INSTANT MAGZINE" },
      { "event": "TWEETING" },
      { "event": "ESSAY MLM" },
      { "event": "POEM WRITING MLM" },
      { "event": "STORY WRITING MLM" },
      { "event": "EXTEMPORE SPEECH MLM" },
      { "event": "FEATURE WRITING MLM" }
    ]
  },
  {
    "id": "545",
    "name": "MUHAMMED ASLAM T",
    "chestNo": "545",
    "programs": [
      { "event": "SCIENCE MASTER" },
      { "event": "SPELLING BEE" },
      { "event": "POEM WRITING ENG" },
      { "event": "STORY WRING ENG" },
      { "event": "POSTER DESIGNING DIGITAL" },
      { "event": "WATER PAINTING" },
      { "event": "CELL MASTER" },
      { "event": "WEB DESIGNING" }
    ]
  },
  {
    "id": "553",
    "name": "AHAMMED NEJADHE",
    "chestNo": "553",
    "programs": [
      { "event": "MATH TALENT" },
      { "event": "HISTORY TALK ENG" },
      { "event": "FACE TO FACE ENG" },
      { "event": "ESSAY ENG" },
      { "event": "NEWS WRITING AND READING ENG" },
      { "event": "STORY WRING ENG" },
      { "event": "INSPIRING TALK ENG" },
      { "event": "COMPREHENSION ENG" },
      { "event": "PROOF READING ENG" }
    ]
  },
  {
    "id": "554",
    "name": "MUHAMMED SINAN U",
    "chestNo": "554",
    "programs": [
      { "event": "SONG URD" },
      { "event": "SPEECH & SONG ARB" },
      { "event": "ESSAY URD" },
      { "event": "NEWS READING AND READING MLM" },
      { "event": "STORY WRITING URD" },
      { "event": "EXTEMPORE SPEECH MLM" },
      { "event": "COMPREHENSION URD" },
      { "event": "PROOF READING URD" },
      { "event": "CALLIGRAPHY" }
    ]
  },
  {
    "id": "555",
    "name": "UVAIS KA",
    "chestNo": "555",
    "programs": [
      { "event": "PHOTOGRAPHY" },
      { "event": "STORY WRITING ARB" },
      { "event": "CALLIGRAPHY" }
    ]
  },
  {
    "id": "556",
    "name": "MUHAMMED NAJAD V",
    "chestNo": "556",
    "programs": [
      { "event": "HIFZ & QIRATH" },
      { "event": "WA'Z" },
      { "event": "PADAPPATTU" },
      { "event": "MASHUP" },
      { "event": "SPEECH & SONG ARB" },
      { "event": "SPEECH & SONG MLM" },
      { "event": "COMPREHENSION URD" },
      { "event": "PROOF READING URD" },
      { "event": "CAPTION MAKING ENG" }
    ]
  },
  {
    "id": "557",
    "name": "MUHAMMED ASIF M.K",
    "chestNo": "557",
    "programs": [
      { "event": "PHOTOGRAPHY" },
      { "event": "SPEECH ARB" },
      { "event": "COMPREHENSION ENG" },
      { "event": "PROOF READING MLM" },
      { "event": "NEWS WRITING MLM" }
    ]
  },
  {
    "id": "560",
    "name": "MUHAMMED NIYAZ",
    "chestNo": "560",
    "programs": [
      { "event": "WA'Z" },
      { "event": "PADAPPATTU" },
      { "event": "NASHEED" },
      { "event": "PROOF READING ARB" },
      { "event": "CELL MASTER" },
      { "event": "NEWS WRITING ARB" }
    ]
  },
  {
    "id": "562",
    "name": "MUHAMMED SINAN K V",
    "chestNo": "562",
    "programs": [
      { "event": "SWARF IQ" },
      { "event": "JUST A MINUTE" },
      { "event": "MULAFAZA" },
      { "event": "LIVE TRANSLATION ENG" },
      { "event": "FACE TO FACE ARB" },
      { "event": "ESSAY URD" },
      { "event": "POEM WRITING URD" },
      { "event": "STORY WRITING URD" },
      { "event": "SPEECH URD" },
      { "event": "COMPREHENSION URD" }
    ]
  },
  {
    "id": "567",
    "name": "ANSAF AMAAN AM",
    "chestNo": "567",
    "programs": [
      { "event": "HIFZ & QIRATH" },
      { "event": "SONG URD" },
      { "event": "RAP SONG" },
      { "event": "MULTILINGUAL QUIZ" },
      { "event": "PADHYAPARAYANAM" },
      { "event": "PROOF READING ENG" },
      { "event": "NEWS WRITING ENG" },
      { "event": "CAPTION MAKING ENG" }
    ]
  },
  {
    "id": "568",
    "name": "MUHAMMED MAFAS PF",
    "chestNo": "568",
    "programs": [
      { "event": "HIFZ & QIRATH" },
      { "event": "GEO GIANT" },
      { "event": "MULTILINGUAL QUIZ" },
      { "event": "LIVE TRANSLATION ENG" },
      { "event": "THAHLILU IBARA" },
      { "event": "ESSAY MLM" },
      { "event": "STORY WRITING MLM" },
      { "event": "JUNCTION SPEECH MLM" },
      { "event": "COMPREHENSION ARB" },
      { "event": "PROOF READING MLM" },
      { "event": "FEATURE WRITING MLM" }
    ]
  },
  {
    "id": "571",
    "name": "MUHAMMED FAYIS CH",
    "chestNo": "571",
    "programs": [
      { "event": "STORY WRITING MLM" }
    ]
  },
  {
    "id": "577",
    "name": "MUHAMMED SHINAS P",
    "chestNo": "577",
    "programs": [
      { "event": "PROGRAM ANNOUNCEMENT" },
      { "event": "MATH TALENT" },
      { "event": "ANCHORING" },
      { "event": "TEACHING MLM" },
      { "event": "POEM WRITING URD" },
      { "event": "SPEECH URD" },
      { "event": "PROOF READING URD" },
      { "event": "POSTER DESIGNING DIGITAL" },
      { "event": "WATER PAINTING" }
    ]
  },
  {
    "id": "593",
    "name": "SINSARUL HAQUE",
    "chestNo": "593",
    "programs": [
      { "event": "GK QUIZ" },
      { "event": "JUST A MINUTE" },
      { "event": "POEM WRITING ENG" },
      { "event": "NEWS READING AND READING ARB" },
      { "event": "NEWS WRITING ENG" }
    ]
  },
  {
    "id": "595",
    "name": "MUHAMMED ZIYAD PA",
    "chestNo": "595",
    "programs": [
      { "event": "RAP SONG" },
      { "event": "ANCHORING" },
      { "event": "NEWS READING AND READING MLM" },
      { "event": "NEWS WRITING MLM" }
    ]
  },
  {
    "id": "597",
    "name": "MUHAMMAD AJMAL.V P",
    "chestNo": "597",
    "programs": [
      { "event": "SCIENCE MASTER" },
      { "event": "ESSAY ARB" },
      { "event": "NEWS WRITING AND READING ENG" },
      { "event": "JUNCTION SPEECH MLM" },
      { "event": "TYPING TRILINGUAL" }
    ]
  },
  {
    "id": "609",
    "name": "NASEEM RAZAN.T",
    "chestNo": "609",
    "programs": [
      { "event": "SWARF IQ" },
      { "event": "TOUNG TWISTER" },
      { "event": "TEACHING MLM" },
      { "event": "POEM WRITING MLM" },
      { "event": "TYPING TRILINGUAL" }
    ]
  },
  {
    "id": "616",
    "name": "MUHAMMED SHANIB.PA",
    "chestNo": "616",
    "programs": [
      { "event": "ANNOUNCEMENT" },
      { "event": "MULAFAZA" },
      { "event": "FACE TO FACE ARB" },
      { "event": "THAHLILU IBARA" },
      { "event": "ESSAY ARB" },
      { "event": "POEM WRITING ARB" },
      { "event": "NEWS READING AND READING ARB" },
      { "event": "STORY WRITING ARB" },
      { "event": "SPEECH ARB" },
      { "event": "COMPREHENSION ARB" },
      { "event": "PROOF READING ARB" },
      { "event": "NEWS WRITING ARB" }
    ]
  },
  
    {
      "id": "586",
      "name": "MUHSIN. K",
      "chestNo": "586",
      "programs": [
        { "event": "SPEECH MLM" },
        { "event": "SONG MLM" },
        { "event": "RAP SONG" },
        { "event": "STORY NARRATION MLM" },
        { "event": "GK QUIZ" },
        { "event": "MATH’S TALENT" },
        { "event": "CONVERSATION MLM" },
        { "event": "SWARF IQ" },
        { "event": "ESSAY ARB" },
        { "event": "POEM WRITING ARB" },
        { "event": "STORY WRITING MLM" },
        { "event": "SUDOKU" },
        { "event": "LETTER WRITING ARB" },
        { "event": "GEO GIANT" },
        { "event": "THAHSKEEL" },
        { "event": "PROOF READING ARB" },
        { "event": "CROSS WORD" },
        { "event": "CELL MASTER" }
      ]
    },
    {
      "id": "625",
      "name": "FAAZ MUHAMMED P.M",
      "chestNo": "625",
      "programs": [
        { "event": "SPEECH URD" },
        { "event": "SONG URD" },
        { "event": "MASHUP" },
        { "event": "STORY NARRATION ENG" },
        { "event": "CONVERSATION URD" },
        { "event": "INSTANT CHILDREN’S MAGAZINE" },
        { "event": "INSTANT NEWSPAPER" },
        { "event": "ESSAY MLM" },
        { "event": "POEM WRITING MLM" },
        { "event": "NEWS WRITING MLM" },
        { "event": "STORY WRITING MLM" },
        { "event": "LETTER WRITING MLM" },
        { "event": "SLOGAN MAKING" },
        { "event": "PROOF READING MLM" },
        { "event": "CLAY MODELING" }
      ]
    },
    {
      "id": "626",
      "name": "AMJAD AMAN",
      "chestNo": "626",
      "programs": [
        { "event": "SPEECH URD" },
        { "event": "SONG MLM" },
        { "event": "MEMORY TEST" },
        { "event": "HINDI VIDHWAN" },
        { "event": "ESSAY URD" },
        { "event": "POSTER DESIGNING DIGITAL" },
        { "event": "SUDOKU" },
        { "event": "IMAGE ELABORATION" },
        { "event": "STORY COMPLETION" },
        { "event": "POWER POINT CREATION" }
      ]
    },
    {
      "id": "634",
      "name": "MUHAMMED INSHAAS",
      "chestNo": "634",
      "programs": [
        { "event": "QIRA'TH" },
        { "event": "WA'Z" },
        { "event": "SPEECH ENG" },
        { "event": "SPEECH AND SONG MLM" },
        { "event": "SONG ENG" },
        { "event": "GROUP SONG" },
        { "event": "CONVERSATION ENG" },
        { "event": "WORD FIGHT" },
        { "event": "ESSAY ENG" },
        { "event": "POEM WRITING ENG" },
        { "event": "STORY WRING ENG" },
        { "event": "DICTIONARY MAKING ENG" },
        { "event": "GEO GIANT" }
      ]
    },
    {
      "id": "637",
      "name": "MOHAMMED ANAS C",
      "chestNo": "637",
      "programs": [
        { "event": "GK QUIZ" },
        { "event": "MATH’S TALENT" },
        { "event": "CONVERSATION ENG" },
        { "event": "NEWS WRITING ENG" },
        { "event": "STORY WRING ENG" },
        { "event": "POWER POINT CREATION" },
        { "event": "TYPING BYLINGUAL" }
      ]
    },
    {
      "id": "640",
      "name": "MUHAMMED ANVIN.P",
      "chestNo": "640",
      "programs": [
        { "event": "SONG URD" },
        { "event": "STORY NARRATION MLM" },
        { "event": "CONVERSATION MLM" },
        { "event": "ESSAY MLM" },
        { "event": "POEM WRITING ARB" },
        { "event": "POSTER DESIGNING DIGITAL" },
        { "event": "POSTER DESIGNING" },
        { "event": "PENCIL DRAWING" },
        { "event": "CALLIGRAPHY" },
        { "event": "WATER PAINTING" },
        { "event": "CLAY MODELING" }
      ]
    },
    {
      "id": "645",
      "name": "MUHAMMED AFNAN K",
      "chestNo": "645",
      "programs": [
        { "event": "PICK AND TALK MLM" },
        { "event": "ESSAY URD" },
        { "event": "POEM WRITING URD" },
        { "event": "NEWS WRITING URD" },
        { "event": "STORY WRITING URD" },
        { "event": "POSTER DESIGNING" },
        { "event": "LETTER WRITING URD" },
        { "event": "CALLIGRAPHY" },
        { "event": "WATER PAINTING" }
      ]
    },
    {
      "id": "658",
      "name": "MUHAMMAD THAMEEM",
      "chestNo": "658",
      "programs": [
        { "event": "HIFZ" },
        { "event": "SPEECH ARB" },
        { "event": "SONG ARB" },
        { "event": "CONVERSATION ARB" },
        { "event": "GRAMMER QUIZ" },
        { "event": "MULAFAZA" },
        { "event": "ESSAY ARB" },
        { "event": "POEM WRITING ENG" },
        { "event": "STORY WRITING ARB" },
        { "event": "VOCABULARY" },
        { "event": "DICTIONARY MAKING ARB" },
        { "event": "LETTER WRITING ENG" },
        { "event": "THAHSKEEL" },
        { "event": "PROOF READING ENG" }
      ]
    },
    {
      "id": "663",
      "name": "MUHAMMED ANSHID E A",
      "chestNo": "663",
      "programs": [
        { "event": "WA'Z" },
        { "event": "SPEECH MLM" },
        { "event": "MEMORY TEST" },
        { "event": "CONVERSATION ARB" },
        { "event": "MULAFAZA" },
        { "event": "SLOGAN MAKING" }
      ]
    },
    {
      "id": "669",
      "name": "MUHAMMED ZAYYAN AK",
      "chestNo": "669",
      "programs": [
        { "event": "SPEECH ARB" },
        { "event": "NEWS WRITING ARB" },
        { "event": "STORY WRITING ARB" },
        { "event": "PENCIL DRAWING" }
      ]
    },
    {
      "id": "672",
      "name": "MUHAMMED SHABAN.PP",
      "chestNo": "672",
      "programs": [
        { "event": "QIRA'TH" },
        { "event": "HIFZ" },
        { "event": "SONG ARB" },
        { "event": "POEM WRITING MLM" }
      ]
    },
    {
      "id": "677",
      "name": "AMANSHAN MN",
      "chestNo": "677",
      "programs": [
        { "event": "SPEECH ENG" },
        { "event": "SONG ENG" },
        { "event": "RAP SONG" },
        { "event": "STORY NARRATION ENG" },
        { "event": "CONVERSATION URD" },
        { "event": "PICK AND TALK MLM" },
        { "event": "WORD FIGHT" },
        { "event": "ESSAY ENG" },
        { "event": "POEM WRITING URD" },
        { "event": "STORY WRITING URD" },
        { "event": "VOCABULARY" },
        { "event": "STORY COMPLETION" },
        { "event": "PROOF READING URD" }
      ]
    }
  

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
