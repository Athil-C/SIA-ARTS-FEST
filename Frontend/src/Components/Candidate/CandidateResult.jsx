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
  },
  {
    "id": "502",
    "name": "MUHAMMED SINAN K",
    "chestNo": "502",
    "programs": [
      { "event": "NEWS WRITING URDU" },
      { "event": "POEM WRITING URD" },
      { "event": "STORY WRITING URDU" },
      { "event": "PROOF READING URD" },
      { "event": "SCREEN PLAY WRITING MLM" },
      { "event": "ESSAY WRITING URDU" },
      { "event": "ADVANTURE PHOTOGRAPHY" },
      { "event": "REACTION" },
      { "event": "INSTANT NEWS PAPERS" },
      { "event": "SIYASI THAQREER URD" }
    ]
  },
  {
    "id": "506",
    "name": "MUHAMMAD VAYIS",
    "chestNo": "506",
    "programs": [
      { "event": "POEM WRITING ARB" },
      { "event": "STORY WRITING ARAB" },
      { "event": "PROOF READING ARB" },
      { "event": "MAQAMA ARABIC" },
      { "event": "TAHLILUL IBARA" },
      { "event": "ANCHORING" },
      { "event": "COMMENTARY ARB" },
      { "event": "KHUTHUBA" },
      { "event": "SPEECH AND SONG ARB" },
      { "event": "EXTEMPORE SPEECH MLM" },
      { "event": "CFACE KITHAB" }
    ]
  },
  {
    "id": "510",
    "name": "MUHAMMED NABEEL KE",
    "chestNo": "510",
    "programs": [
      { "event": "NEWS WRITING MLM" },
      { "event": "NEWS WRITING ARB" },
      { "event": "POEM WRITING MLM" },
      { "event": "MASHUP" },
      { "event": "ANNOUNCEMENT" }
    ]
  },
  {
    "id": "515",
    "name": "MUHAMMED SHAMEEM K",
    "chestNo": "515",
    "programs": [
      { "event": "NEWS WRITING URDU" },
      { "event": "POEM WRITING URD" },
      { "event": "STORY WRITING URDU" },
      { "event": "PROOF READING URD" },
      { "event": "ESSAY WRITING URDU" },
      { "event": "ABSTRACT WRITING ENG" },
      { "event": "ADVANTURE PHOTOGRAPHY" },
      { "event": "Mr. TRANSLATOR" },
      { "event": "SIYASI THAQREER URD" },
      { "event": "NEWS WRITING AND READING URD" },
      { "event": "CPROJECT PRESENTATION ENG" }
    ]
  },
  {
    "id": "528",
    "name": "MUHAMMED SINAN M",
    "chestNo": "528",
    "programs": [
      { "event": "STORY WRITING ENG" },
      { "event": "PROOF READING ENG" },
      { "event": "WA'Z" },
      { "event": "MALAPPATTU" },
      { "event": "MAPPILAPPAT" }
    ]
  },
  {
    "id": "530",
    "name": "MUHAMMED SINAN B",
    "chestNo": "530",
    "programs": [
      { "event": "STORY WRITING ENG" },
      { "event": "PROOF READING ENG" },
      { "event": "CAMPUS IQTADRIS" },
      { "event": "ANNOUNCEMENT" }
    ]
  },
  {
    "id": "533",
    "name": "MUHAMMED HANEEN CH",
    "chestNo": "533",
    "programs": [
      { "event": "NEWS WRITING MLM" },
      { "event": "POEM WRITING MLM" },
      { "event": "STORY WRITING MLM" },
      { "event": "PROOF READING MLM" },
      { "event": "CARTOON" },
      { "event": "NEWS WRITING AND READING MLM" }
    ]
  },
  {
    "id": "540",
    "name": "MUHAMMED SHADIL TP",
    "chestNo": "540",
    "programs": [
      { "event": "POEM WRITING ENG" },
      { "event": "FEATURE WRITING MLM" },
      { "event": "CARTOON" },
      { "event": "ACRYLIC PAINTING" },
      { "event": "REACTION" },
      { "event": "KAVIYARANG" }
    ]
  },
  {
    "id": "648",
    "name": "SAYYID JAZEEL JIFRI PM",
    "chestNo": "648",
    "programs": [
      { "event": "POEM WRITING ARB" },
      { "event": "STORY WRITING ARAB" },
      { "event": "PROOF READING ARB" },
      { "event": "MAQAMA ARABIC" },
      { "event": "TAHLILUL IBARA" },
      { "event": "GROUP DISCUSSION" },
      { "event": "PROUD MUSLIM" },
      { "event": "QIRATH" },
      { "event": "KHUTHUBA" },
      { "event": "NEWS WRITING AND READING ARB" },
      { "event": "CNASHEED" },
      { "event": "CAMPUS IQ" },
      { "event": "REVERSE QUIZ" },
      { "event": "FACE KITHAB" }
    ]
  },
  {
    "id": "651",
    "name": "SHUHAIB RAHMAN KP",
    "chestNo": "651",
    "programs": [
      { "event": "STORY WRITING MLM" },
      { "event": "PROOF READING MLM" },
      { "event": "SCREEN PLAY WRITING MLM" },
      { "event": "ACADEMIC ESSAY ENG" },
      { "event": "FEATURE WRITING MLM" },
      { "event": "ACRYLIC PAINTING" },
      { "event": "GROUP DISCUSSION" },
      { "event": "COMMENTARY ENG" },
      { "event": "CNEWS WRITING AND READING ENG" },
      { "event": "MOCK INTERVIEW ENG" },
      { "event": "FACE TO FACE ENG" },
      { "event": "KAVIYARANG" },
      { "event": "POLITICAL SATIRE MLM" },
      { "event": "REVERSE QUIZ" }
    ]
  },
  {
    "id": "707",
    "name": "MUHAMMED MIDHLAJ KK",
    "chestNo": "707",
    "programs": [
      { "event": "NEWS WRITING ENG" },
      { "event": "ACADEMIC ESSAY ENG" },
      { "event": "ABSTRACT WRITING ENG" },
      { "event": "PROUD MUSLIM" },
      { "event": "Mr. TRANSLATOR" },
      { "event": "MOCK INTERVIEW ENG" },
      { "event": "FACE TO FACE ENG" },
      { "event": "PROJECT PRESENTATION ENG" }
    ]
  },
  {
    "id": "537",
    "name": "ARSHAD M",
    "chestNo": "537",
    "programs": [
      { "event": "GEO GIANT" },
      { "event": "GK QUIZ" },
      { "event": "PHOTOGRAPHY" },
      { "event": "FACE TO FACE ENG" },
      { "event": "INSTANT NEWS PAPER" },
      { "event": "INSTANT MAGZINE" },
      { "event": "TWEETING" },
      { "event": "WATER PAINTING" },
      { "event": "C" }
    ]
  },
  {
    "id": "543",
    "name": "MUHAMMAD MIRSHAN",
    "chestNo": "543",
    "programs": [
      { "event": "GK QUIZ" },
      { "event": "MULTILINGUAL QUIZ" },
      { "event": "SCIENCE MASTER" },
      { "event": "SPELLING BEE" },
      { "event": "HISTORY TALK ENG" },
      { "event": "LIVE TRANSLATION ENG" },
      { "event": "FACE TO FACE ENG" },
      { "event": "THAHLILU IBARA" },
      { "event": "ESSAY ENG" },
      { "event": "POEM WRITING ENG" },
      { "event": "CINSPIRING TALK ENG" },
      { "event": "PROOF READING ENG" },
      { "event": "NEWS WRITING ENG" },
      { "event": "CAPTION MAKING ENG" }
    ]
  },
  {
    "id": "556",
    "name": "ASEEM MUHAMMED P",
    "chestNo": "556",
    "programs": [
      { "event": "HISTORY TALK ENG" },
      { "event": "JUST A MINUTE" },
      { "event": "PADHYAPARAYANAM" },
      { "event": "ESSAY MLM" },
      { "event": "POEM WRITING MLM" },
      { "event": "NEWS READING AND READING MLM" },
      { "event": "PROOF READING MLM" },
      { "event": "TYPING TRILINGUAL" },
      { "event": "FEATURE WRITING MLM" }
    ]
  },
  {
    "id": "561",
    "name": "MUHAMMED HISHAM P V",
    "chestNo": "561",
    "programs": [
      { "event": "GEO GIANT" },
      { "event": "MATH TALENT" },
      { "event": "ESSAY URD" },
      { "event": "POEM WRITING URD" },
      { "event": "STORY WRITING URD" }
    ]
  },
  {
    "id": "563",
    "name": "ATHIL C",
    "chestNo": "563",
    "programs": [
      { "event": "ESSAY ENG" },
      { "event": "JUNCTION SPEECH MLM" },
      { "event": "CELL MASTER" },
      { "event": "NEWS WRITING ENG" },
      { "event": "WEB DESIGNING" }
    ]
  },
  {
    "id": "565",
    "name": "MUHAMMED HASEEM P S",
    "chestNo": "565",
    "programs": [
      { "event": "WA'Z" },
      { "event": "RAP SONG" },
      { "event": "GEO GIANT" },
      { "event": "TEACHING MLM" },
      { "event": "SPEECH & SONG MLM" },
      { "event": "INSTANT NEWS PAPER" },
      { "event": "ESSAY MLM" },
      { "event": "STORY WRING ENG" },
      { "event": "JUNCTION SPEECH MLM" },
      { "event": "PROOF READING MLM" },
      { "event": "CFEATURE WRITING MLM" }
    ]
  },
  {
    "id": "569",
    "name": "MUHAMMED NABEEL P",
    "chestNo": "569",
    "programs": [
      { "event": "ANNOUNCEMENT" },
      { "event": "ESSAY MLM" },
      { "event": "STORY WRITING ARB" },
      { "event": "EXTEMPORE SPEECH MLM" },
      { "event": "COMPREHENSION ENG" },
      { "event": "NEWS WRITING MLM" }
    ]
  },
  {
    "id": "570",
    "name": "MUHAMMED NAHYAN P",
    "chestNo": "570",
    "programs": [
      { "event": "MULTILINGUAL QUIZ" },
      { "event": "SWARF IQ" },
      { "event": "MULAFAZAT" },
      { "event": "TEACHING MLM" },
      { "event": "FACE TO FACE ARB" },
      { "event": "THAHLILU IBARA" },
      { "event": "ESSAY ARB" },
      { "event": "POEM WRITING ARB" },
      { "event": "NEWS READING AND READING ARB" },
      { "event": "STORY WRITING ARB" },
      { "event": "CSPEECH ARB" },
      { "event": "PROOF READING ARB" },
      { "event": "NEWS WRITING ARB" }
    ]
  },
  {
    "id": "572",
    "name": "MUHAMMED SHABEEB MU",
    "chestNo": "572",
    "programs": [
      { "event": "WA'Z" },
      { "event": "PADAPPATTU" },
      { "event": "SONG URD" },
      { "event": "PADHYAPARAYANAM" },
      { "event": "ESSAY URD" },
      { "event": "POEM WRITING URD" },
      { "event": "STORY WRITING URD" },
      { "event": "SPEECH URD" },
      { "event": "COMPREHENSION URD" },
      { "event": "PROOF READING ARB" }
    ]
  },
  {
    "id": "573",
    "name": "ADHIL HASSAN CS",
    "chestNo": "573",
    "programs": [
      { "event": "TOUNG TWISTER" },
      { "event": "FACE TO FACE ARB" },
      { "event": "POEM WRITING ARB" },
      { "event": "NEWS READING AND READING ARB" },
      { "event": "SPEECH ARB" },
      { "event": "POSTER DESIGNING DIGITAL" }
    ]
  },
  {
    "id": "578",
    "name": "MUHAMMAD NIBRAS",
    "chestNo": "578",
    "programs": [
      { "event": "SONG ENG" },
      { "event": "SPELLING BEE" },
      { "event": "INSPIRING TALK ENG" },
      { "event": "COMPREHENSION ENG" }
    ]
  },
  {
    "id": "584",
    "name": "MUHAMMED AMEERSHAH K",
    "chestNo": "584",
    "programs": [
      { "event": "TOUNG TWISTER" },
      { "event": "LIVE TRANSLATION ENG" },
      { "event": "TWEETING" },
      { "event": "POEM WRITING ENG" },
      { "event": "NEWS WRITING AND READING ENG" },
      { "event": "PROOF READING ENG" },
      { "event": "TYPING TRILINGUAL" },
      { "event": "POSTER DESIGNING DIGITAL" },
      { "event": "CELL MASTER" }
    ]
  },
  {
    "id": "588",
    "name": "SHANE AKTHER",
    "chestNo": "588",
    "programs": [
      { "event": "SONG ENG" },
      { "event": "ANNOUNCEMENT" },
      { "event": "RAP SONG" },
      { "event": "SWARF IQ" },
      { "event": "MULAFAZA" },
      { "event": "ESSAY ARB" },
      { "event": "NEWS READING AND READING MLM" },
      { "event": "COMPREHENSION ARB" },
      { "event": "PROOF READING URD" }
    ]
  },
  {
    "id": "598",
    "name": "MUHAMMED NASIM K",
    "chestNo": "598",
    "programs": [
      { "event": "NASHEED" },
      { "event": "RAP SONG" },
      { "event": "ANCHORING" },
      { "event": "TEACHING MLM" },
      { "event": "POEM WRITING MLM" }
    ]
  },
  {
    "id": "599",
    "name": "MUHAMMAD SAJID. C",
    "chestNo": "599",
    "programs": [
      { "event": "JUST A MINUTE" },
      { "event": "COMPREHENSION ARB" }
    ]
  },
  {
    "id": "602",
    "name": "MUHAMMED RAZEEN. KU",
    "chestNo": "602",
    "programs": [
      { "event": "SONG URD" },
      { "event": "WATER PAINTING" },
      { "event": "CALLIGRAPHY" }
    ]
  },
  {
    "id": "608",
    "name": "MUHAMMED SINAN K M",
    "chestNo": "608",
    "programs": [
      { "event": "NASHEED" },
      { "event": "SPEECH URD" },
      { "event": "NEWS WRITING ARB" }
    ]
  },
  {
    "id": "628",
    "name": "MUHAMMAD ADNAN T",
    "chestNo": "628",
    "programs": [
      { "event": "SPEECH AND SONG MLM" },
      { "event": "SONG MLM" },
      { "event": "MASHUP" },
      { "event": "GROUP SONG" },
      { "event": "GK QUIZ" },
      { "event": "GRAMMER QUIZ" },
      { "event": "INSTANT CHILDREN’S MAGAZINE" },
      { "event": "POSTER DESIGNING" },
      { "event": "SUDOKU" },
      { "event": "VOCABULARY" },
      { "event": "C" },
      { "event": "LETTER WRITING ENG" },
      { "event": "GEO GIANT" }
    ]
  },
  {
    "id": "630",
    "name": "MUHAMMED HANAN E",
    "chestNo": "630",
    "programs": [
      { "event": "SPEECH ENG" },
      { "event": "GK QUIZ" },
      { "event": "CONVERSATION ENG" },
      { "event": "HINDI VIDHWAN" },
      { "event": "WORD FIGHT" },
      { "event": "POEM WRITING ENG" },
      { "event": "NEWS WRITING ENG" },
      { "event": "STORY WRING ENG" },
      { "event": "GEO GIANT" },
      { "event": "C" },
      { "event": "CROSS WORD" }
    ]
  },
  {
    "id": "631",
    "name": "ABDUL LATHEEF. K.K",
    "chestNo": "631",
    "programs": [
      { "event": "SPEECH URD" },
      { "event": "SONG MLM" },
      { "event": "RAP SONG" },
      { "event": "STORY NARRATION MLM" },
      { "event": "MATH’S TALENT" },
      { "event": "CONVERSATION MLM" },
      { "event": "INSTANT NEWSPAPER" },
      { "event": "ESSAY ENG" },
      { "event": "C" },
      { "event": "POEM WRITING MLM" },
      { "event": "STORY WRING ENG" },
      { "event": "POSTER DESIGNING DIGITAL" },
      { "event": "LETTER WRITING MLM" },
      { "event": "POWER POINT CREATION" },
      { "event": "CELL MASTER" },
      { "event": "TYPING BYLINGUAL" }
    ]
  },
  {
    "id": "632",
    "name": "MUHAMMED SHIBIL. K.K",
    "chestNo": "632",
    "programs": [
      { "event": "WA'Z" },
      { "event": "SPEECH MLM" },
      { "event": "SPEECH ARB" },
      { "event": "RAP SONG" },
      { "event": "STORY NARRATION MLM" },
      { "event": "CONVERSATION MLM" },
      { "event": "PICK AND TALK MLM" },
      { "event": "ESSAY MLM" },
      { "event": "CNEWS WRITING MLM" },
      { "event": "STORY WRITING MLM" },
      { "event": "IMAGE ELABORATION" },
      { "event": "STORY COMPLETION" },
      { "event": "SLOGAN MAKING" },
      { "event": "POWER POINT CREATION" }
    ]
  },
  {
    "id": "635",
    "name": "MUHAMMAD FARHAN",
    "chestNo": "635",
    "programs": [
      { "event": "SPEECH MLM" },
      { "event": "SPEECH ARB" },
      { "event": "SONG ENG" },
      { "event": "CONVERSATION ENG" },
      { "event": "PICK AND TALK MLM" },
      { "event": "ESSAY URD" },
      { "event": "POEM WRITING URD" },
      { "event": "NEWS WRITING URD" },
      { "event": "STORY WRITING URD" },
      { "event": "C" },
      { "event": "CLAY MODELING" }
    ]
  },
  {
    "id": "639",
    "name": "MUHAMMED ANSIF P",
    "chestNo": "639",
    "programs": [
      { "event": "QIRA'TH" },
      { "event": "HIFZ" },
      { "event": "SONG ARB" },
      { "event": "SLOGAN MAKING" },
      { "event": "PROOF READING MLM" }
    ]
  },
  {
    "id": "642",
    "name": "MOHAMED AIHAM.CK",
    "chestNo": "642",
    "programs": [
      { "event": "SONG ENG" },
      { "event": "CONVERSATION ARB" },
      { "event": "ESSAY ENG" },
      { "event": "POEM WRITING ARB" },
      { "event": "NEWS WRITING ARB" },
      { "event": "STORY WRITING URD" },
      { "event": "PROOF READING URD" }
    ]
  },
  {
    "id": "643",
    "name": "MUHAMMED DILSHAD M",
    "chestNo": "643",
    "programs": [
      { "event": "MEMORY TEST" },
      { "event": "CONVERSATION URD" },
      { "event": "MULAFAZA" },
      { "event": "ESSAY ARB" },
      { "event": "STORY WRITING ARB" },
      { "event": "VOCABULARY" },
      { "event": "DICTIONARY MAKING ARB" },
      { "event": "THAHSKEEL" },
      { "event": "PROOF READING ARB" }
    ]
  },
  {
    "id": "644",
    "name": "MOHAMMED SHADIL T T",
    "chestNo": "644",
    "programs": [
      { "event": "SPEECH ENG" },
      { "event": "STORY NARRATION ENG" },
      { "event": "CONVERSATION URD" },
      { "event": "ESSAY MLM" },
      { "event": "POEM WRITING MLM" },
      { "event": "STORY WRITING MLM" },
      { "event": "POSTER DESIGNING" },
      { "event": "PENCIL DRAWING" },
      { "event": "CALLIGRAPHY" },
      { "event": "WATER PAINTING" }
    ]
  },
  {
    "id": "656",
    "name": "MUHAMMED HISHAM P",
    "chestNo": "656",
    "programs": [
      { "event": "QIRA'TH" },
      { "event": "HIFZ" },
      { "event": "SPEECH URD" },
      { "event": "SONG URDU" },
      { "event": "STORY NARRATION ENG" },
      { "event": "MEMORY TEST" },
      { "event": "POEM WRITING ENG" },
      { "event": "STORY WRITING ARB" },
      { "event": "POSTER DESIGNING DIGITAL" }
    ]
  },
  {
    "id": "667",
    "name": "MUHAMMAD A",
    "chestNo": "667",
    "programs": [
      { "event": "WA'Z" },
      { "event": "SONG URDU" },
      { "event": "CALLIGRAPHY" },
      { "event": "WATER PAINTING" },
      { "event": "CLAY MODELING" }
    ]
  },
  {
    "id": "670",
    "name": "ABDUL HADHI",
    "chestNo": "670",
    "programs": [
      { "event": "SONG ARB" },
      { "event": "MATH’S TALENT" },
      { "event": "CONVERSATION ARB" },
      { "event": "WORD FIGHT" },
      { "event": "SWARF IQ" },
      { "event": "MULAFAZA" },
      { "event": "ESSAY ARB" },
      { "event": "POEM WRITING ARB" },
      { "event": "SUDOKU" },
      { "event": "PENCIL DRAWING" },
      { "event": "C" },
      { "event": "THAHSKEEL" }
    ]
  },
  {
    "id": "675",
    "name": "MUHAMMAD NAISHAN. MN",
    "chestNo": "675",
    "programs": [
      { "event": "HIFZ" },
      { "event": "SPEECH URD" },
      { "event": "WORD FIGHT" },
      { "event": "ESSAY MLM" },
      { "event": "POEM WRITING ARB" },
      { "event": "STORY WRITING ARB" },
      { "event": "SUDOKU" },
      { "event": "CLAY MODELING" }
    ]
  },
  {
    "id": "676",
    "name": "IBRAHIM SHA THANGAL",
    "chestNo": "676",
    "programs": [
      { "event": "QIRA'TH" },
      { "event": "AZAN" },
      { "event": "SONG ARB" },
      { "event": "WA'Z" },
      { "event": "SPEECH MLM" },
      { "event": "SPEECH AND SONG MLM" },
      { "event": "READING URD" },
      { "event": "MATHS TALENT" },
      { "event": "POEM RECITATION MLM" },
      { "event": "MULAFAZA" },
      { "event": "C" },
      { "event": "SUDOKU" },
      { "event": "ORIGAMI" },
      { "event": "PENCIL DRAWING" },
      { "event": "TYPING MASTER" },
      { "event": "DICTIONARY MAKING ARB" },
      { "event": "VOCABULARY" }
    ]
  },
  {
    "id": "678",
    "name": "ALI AFNAN",
    "chestNo": "678",
    "programs": [
      { "event": "STORY WRITING MLM" },
      { "event": "JUNCTION SPEECH MLM" }
    ]
  },
  {
    "id": "684",
    "name": "AMJID AMAN. P. J",
    "chestNo": "684",
    "programs": [
      { "event": "HIFZ" },
      { "event": "SONG MLM" },
      { "event": "WA'Z" },
      { "event": "SPEECH ENG" },
      { "event": "CONVERSATION ENG" },
      { "event": "MULAFAZA" },
      { "event": "HAND WRITING MALAYALAM" },
      { "event": "POEM WRITING MLM" },
      { "event": "DICTIONARY MAKING MLM" }
    ]
  },
  {
    "id": "686",
    "name": "MUHAMMED BIILAL PA",
    "chestNo": "686",
    "programs": [
      { "event": "HIFZ" },
      { "event": "AZAN" },
      { "event": "SONG ARB" },
      { "event": "SPEECH ARB" },
      { "event": "READING ARB" },
      { "event": "CONVERSATION ARB" },
      { "event": "STORY COMPLETION MLM" }
    ]
  },
  {
    "id": "688",
    "name": "Muhammmad Sinan",
    "chestNo": "688",
    "programs": [
      { "event": "NJAN MALAYALI" },
      { "event": "GK QUIZ" },
      { "event": "HAND WRITING ARABIC" },
      { "event": "POEM WRITING ARB" },
      { "event": "DICTIONARY MAKING ARB" }
    ]
  },
  {
    "id": "690",
    "name": "MUHAMMED MUNAVIR K",
    "chestNo": "690",
    "programs": []
  },
  {
    "id": "694",
    "name": "MUHAMMAD NIDAN",
    "chestNo": "694",
    "programs": [
      { "event": "SONG ENG" },
      { "event": "SPEECH ENG" },
      { "event": "READING URD" },
      { "event": "CONVERSATION URD" },
      { "event": "STORY NARRATION ENG" },
      { "event": "HAND WRITING HINDI" },
      { "event": "POEM WRITING ENG" },
      { "event": "JIGSAW PUZZLE" },
      { "event": "MS WORD" },
      { "event": "MS PAINT" },
      { "event": "C" },
      { "event": "GEO GIANT" }
    ]
  },
  {
    "id": "696",
    "name": "MUHAMMAD MUHSIN M.K",
    "chestNo": "696",
    "programs": [
      { "event": "SONG URD" },
      { "event": "SPEECH URD" },
      { "event": "READING MLM" },
      { "event": "NJAN MALAYALI" },
      { "event": "MEMORY TEST" },
      { "event": "STORY NARRATION MLM" },
      { "event": "POEM RECITATION MLM" },
      { "event": "HAND WRITING MALAYALAM" },
      { "event": "POEM WRITING MLM" },
      { "event": "LETTTER WRITING MLM" },
      { "event": "C" },
      { "event": "DICTIONARY MAKING MLM" },
      { "event": "TITLE MAKING" },
      { "event": "QAWWALI URD" }
    ]
  },
  {
    "id": "699",
    "name": "Muhammed mazin",
    "chestNo": "699",
    "programs": [
      { "event": "SPEECH ARB" },
      { "event": "CONVERSATION ARB" },
      { "event": "MATHS TALENT" },
      { "event": "WORD FIGHT" },
      { "event": "HAND WRITING ENGLISH" },
      { "event": "POEM WRITING ARB" },
      { "event": "JIGSAW PUZZLE" },
      { "event": "MS WORD" },
      { "event": "MS PAINT" },
      { "event": "DICTIONARY MAKING ENG" }
    ]
  },
  {
    "id": "701",
    "name": "MUHAMMED NABHAN P",
    "chestNo": "701",
    "programs": [
      { "event": "SONG URD" },
      { "event": "SPEECH URD" },
      { "event": "READING ARB" },
      { "event": "CONVERSATION URD" },
      { "event": "DICTIONARY MAKING ENG" }
    ]
  },
  {
    "id": "706",
    "name": "MUHAMMED FIZAN PC",
    "chestNo": "706",
    "programs": [
      { "event": "READING ENG" },
      { "event": "CONVERSATION MLM" },
      { "event": "GK QUIZ" },
      { "event": "MEMORY TEST" },
      { "event": "SPELLING BEE" },
      { "event": "HAND WRITING ENGLISH" },
      { "event": "SUDOKU" },
      { "event": "TYPING MASTER" },
      { "event": "GEO GIANT" }
    ]
  },
  {
    "id": "712",
    "name": "ADNASH M",
    "chestNo": "712",
    "programs": [
      { "event": "READING HND" },
      { "event": "CONVERSATION MLM" },
      { "event": "SPELLING BEE" },
      { "event": "HAND WRITING URDU" },
      { "event": "ORIGAMI" },
      { "event": "CLAY MODELING" }
    ]
  },
  {
    "id": "717",
    "name": "MUHAMMED HIDASH KK",
    "chestNo": "717",
    "programs": [
      { "event": "SONG ENG" },
      { "event": "SPEECH MLM" },
      { "event": "READING HND" },
      { "event": "STORY NARRATION ENG" },
      { "event": "HAND WRITING HINDI" },
      { "event": "POEM WRITING ENG" }
    ]
  },
  {
    "id": "720",
    "name": "MUHAMMED ALISHAN KK",
    "chestNo": "720",
    "programs": [
      { "event": "SONG MLM" },
      { "event": "READING ENG" },
      { "event": "CONVERSATION ENG" },
      { "event": "WORD FIGHT" },
      { "event": "HAND WRITING ARABIC" }
    ]
  },
  {
    "id": "724",
    "name": "MUHAMMED WASEEM K S",
    "chestNo": "724",
    "programs": [
      { "event": "QIRA'TH" },
      { "event": "READING MLM" },
      { "event": "STORY NARRATION MLM" },
      { "event": "LETTTER WRITING MLM" },
      { "event": "TITLE MAKING" }
    ]
  },
  {
    "id": "729",
    "name": "HADI HANAN",
    "chestNo": "729",
    "programs": [
      { "event": "HAND WRITING URDU" }
    ]
  },
  {
    "id": "737",
    "name": "MUHAMMED AZMIL SHAN",
    "chestNo": "737",
    "programs": [
      { "event": "PENCIL DRAWING" },
      { "event": "CLAY MODELING" }
    ]
  },
  {
    "id": "641",
    "name": "MUHAMMED NIHAL TP",
    "chestNo": "641",
    "programs": [
      { "event": "SPEECH ARB" },
      { "event": "CONVERSATION ARB" },
      { "event": "GK QUIZ" },
      { "event": "HAND WRITING ENGLISH" },
      { "event": "SUDOKU" },
      { "event": "DICTIONARY MAKING MLM" },
      { "event": "GEO GIANT" },
      { "event": "TITLE MAKING" },
      { "event": "QAWWALI URD" }
    ]
  },
  {
    "id": "654",
    "name": "MUHAMMED RIZWAN.K",
    "chestNo": "654",
    "programs": [
      { "event": "SONG URD" },
      { "event": "SPEECH MLM" },
      { "event": "SPEECH AND SONG MLM" },
      { "event": "READING HND" },
      { "event": "CONVERSATION URD" },
      { "event": "NJAN MALAYALI" },
      { "event": "POEM RECITATION MLM" },
      { "event": "HAND WRITING ARABIC" },
      { "event": "CLAY MODELING" },
      { "event": "DICTIONARY MAKING MLM" },
      { "event": "VOCABULARY" }
    ]
  },
  {
    "id": "661",
    "name": "MUHAMMED SHAYAN HANI K",
    "chestNo": "661",
    "programs": [
      { "event": "SPEECH URD" },
      { "event": "READING MLM" },
      { "event": "CONVERSATION URD" },
      { "event": "MATHS TALENT" },
      { "event": "DICTIONARY MAKING ARB" }
    ]
  },
  {
    "id": "683",
    "name": "MUHAMMED HIDASH PP",
    "chestNo": "683",
    "programs": []
  },
  {
    "id": "583",
    "name": " MUHAMMED RAFI",
    "chestNo": "583",
    "programs": [
      { "event": "SONG URD" },
      { "event": "MULTILINGUAL QUIZ" },
      { "event": "PADHYAPARAYANAM" },
      { "event": "FACE TO FACE ARB" },
      { "event": "ESSAY ARB" },
      { "event": "POEM WRITING ARB" },
      { "event": "NEWS READING AND READING ARB" },
      { "event": "SPEECH URD" },
      { "event": "COMPREHENSION ARB" },
      { "event": "SENTENCE TRANSLATION" },
      { "event": "CARTOON" },
      { "event": "WATER PAINTING" },
      { "event": "NEWS WRITING ARB" }
    ]
  },
  {
    "id": "698",
    "name": "NAMIN JASAN K A",
    "chestNo": "698",
    "programs": [
      { "event": "NASHEED" },
      { "event": "RAP SONG" },
      { "event": "ANCHORING" },
      { "event": "TEACHING MLM" },
      { "event": "POEM WRITING MLM" },
      { "event": "STORY WRITING MLM" },
      { "event": "SLOGAN MAKING" }
    ]
  },
  {
    "id": "702",
    "name": "Nijas . P",
    "chestNo": "702",
    "programs": [
      { "event": "SONG MLM" },
      { "event": "WA'Z" },
      { "event": "READING URD" },
      { "event": "POEM RECITATION MLM" },
      { "event": "GROUP SONG" },
      { "event": "HAND WRITING HINDI" },
      { "event": "POEM WRITING MLM" },
      { "event": "STORY COMPLETION MLM" },
      { "event": "TITLE MAKING" }
    ]
  },
  {
    "id": "703",
    "name": "MOHAMMED ZIYAD. K",
    "chestNo": "703",
    "programs": [
      { "event": "HIFZ" },
      { "event": "QIRA'TH" },
      { "event": "AZAN" },
      { "event": "SONG ARB" },
      { "event": "SPEECH ARB" },
      { "event": "READING ARB" },
      { "event": "CONVERSATION ARB" },
      { "event": "SPELLING BEE" },
      { "event": "MULAFAZAH" },
      { "event": "HAND WRITING ARABIC" },
      { "event": "JIGSAW PUZZLE" },
      { "event": "DICTIONARY MAKING ENG" }
    ]
  },
  {
    "id": "704",
    "name": "MUHAMMED AYAN HAMZA",
    "chestNo": "704",
    "programs": [
      { "event": "SONG URD" },
      { "event": "SPEECH URD" },
      { "event": "CONVERSATION MLM" },
      { "event": "GK QUIZ" },
      { "event": "MATHS TALENT" },
      { "event": "MEMORY TEST" },
      { "event": "HAND WRITING URDU" },
      { "event": "SUDOKU" },
      { "event": "JIGSAW PUZZLE" },
      { "event": "ORIGAMI" },
      { "event": "CMS PAINT" },
      { "event": "TYPING MASTER" },
      { "event": "GEO GIANT" }
    ]
  },
  {
    "id": "709",
    "name": "MUHAMMED FARHAN. K",
    "chestNo": "709",
    "programs": [
      { "event": "SONG ENG" },
      { "event": "READING HND" },
      { "event": "WORD FIGHT" },
      { "event": "POEM WRITING MLM" },
      { "event": "PENCIL DRAWING" },
      { "event": "CLAY MODELING" }
    ]
  },
  {
    "id": "713",
    "name": "MUHAMMAD NIHAL",
    "chestNo": "713",
    "programs": []
  },
  {
    "id": "715",
    "name": "MUHAMMAD NAJAD",
    "chestNo": "715",
    "programs": [
      { "event": "SPEECH MLM" },
      { "event": "READING MLM" },
      { "event": "NJAN MALAYALI" },
      { "event": "MEMORY TEST" },
      { "event": "STORY NARRATION MLM" }
    ]
  },
  {
    "id": "718",
    "name": "MUHAMMAD ADHIL P",
    "chestNo": "718",
    "programs": [
      { "event": "SONG MLM" },
      { "event": "READING URD" },
      { "event": "STORY NARRATION MLM" },
      { "event": "HAND WRITING URDU" },
      { "event": "LETTTER WRITING MLM" }
    ]
  },
  {
    "id": "723",
    "name": "MUHAMMED SINAN EA",
    "chestNo": "723",
    "programs": [
      { "event": "HAND WRITING HINDI" },
      { "event": "PENCIL DRAWING" }
    ]
  },
  {
    "id": "724",
    "name": "MUHAMMED WASEEM K S",
    "chestNo": "724",
    "programs": [
      { "event": "QIRA'TH" },
      { "event": "READING MLM" },
      { "event": "STORY NARRATION MLM" },
      { "event": "LETTTER WRITING MLM" },
      { "event": "TITLE MAKING" }
    ]
  },
  {
    "id": "729",
    "name": "HADI HANAN",
    "chestNo": "729",
    "programs": [
      { "event": "HAND WRITING URDU" }
    ]
  },
  {
    "id": "730",
    "name": "MASHHOOR AHDAL C",
    "chestNo": "730",
    "programs": [
      { "event": "SONG ENG" },
      { "event": "SPEECH ENG" },
      { "event": "CONVERSATION ENG" },
      { "event": "STORY NARRATION ENG" },
      { "event": "HAND WRITING ENGLISH" },
      { "event": "POEM WRITING ARB" }
    ]
  },
  {
    "id": "734",
    "name": "MUHAMMED ZAYYAN P",
    "chestNo": "734",
    "programs": []
  },
  {
    "id": "736",
    "name": "MUHAMMED USMAN",
    "chestNo": "736",
    "programs": [
      { "event": "HIFZ" },
      { "event": "QIRA'TH" },
      { "event": "AZAN" },
      { "event": "SONG ARB" },
      { "event": "WA'Z" },
      { "event": "READING ARB" },
      { "event": "CONVERSATION MLM" },
      { "event": "MULAFAZAH" },
      { "event": "HAND WRITING MALAYALAM" },
      { "event": "POEM WRITING ARB" },
      { "event": "VOCABULARY" }
    ]
  },
  {
    "id": "737",
    "name": "MUHAMMED AZMIL SHAN",
    "chestNo": "737",
    "programs": [
      { "event": "PENCIL DRAWING" },
      { "event": "CLAY MODELING" }
    ]
  },
  {
    "id": "500",
    "name": "MUNAVAR ALI C",
    "chestNo": "500",
    "programs": [
      { "event": "NEWS WRITING ARB" },
      { "event": "POEM WRITING ARB" },
      { "event": "STORY WRITING ENG" },
      { "event": "PROOF READING ARB" },
      { "event": "MAQAMA ARABIC" },
      { "event": "FEATURE WRITING MLM" },
      { "event": "TAHLILUL IBARA" },
      { "event": "ANCHORING" },
      { "event": "PROUD MUSLIM" },
      { "event": "MR. TRANSLATOR" },
      { "event": "COMMENTARY ENG" },
      { "event": "INSTANT NEWS PAPER" },
      { "event": "SPEECH AND SONG ARB" },
      { "event": "EXTEMPORE SPEECH MLM" },
      { "event": "NEWS WRITING AND READING ARB" },
      { "event": "FACE TO FACE ARB" },
      { "event": "CAMPUS IQTADRIS" },
      { "event": "POLITICAL SATIRE MLM" },
      { "event": "REVERSE QUIZ" },
      { "event": "FACE KITHAB" }
    ]
  },
  {
    "id": "513",
    "name": "ADIL MALOOF K",
    "chestNo": "513",
    "programs": [
      { "event": "STORY WRITING ARAB" },
      { "event": "PROOF READING MLM" },
      { "event": "CARTOON" },
      { "event": "ACRYLIC PAINTING" },
      { "event": "WA'Z" },
      { "event": "QIRATH" },
      { "event": "KHUTHUBA" },
      { "event": "MALAPPATTU" },
      { "event": "NEWS WRITING AND READING MLM" },
      { "event": "FACE TO FACE ARB" },
      { "event": "NASHEED" },
      { "event": "GAZAL" },
      { "event": "MASHUP" }
    ]
  },
  {
    "id": "519",
    "name": "SAKARIYA KK",
    "chestNo": "519",
    "programs": [
      { "event": "NEWS WRITING URDU" },
      { "event": "POEM WRITING URD" },
      { "event": "STORY WRITING URDU" },
      { "event": "PROOF READING URD" },
      { "event": "ESSAY WRITING URDU" },
      { "event": "TAHLILUL IBARA" },
      { "event": "PROUD MUSLIM" },
      { "event": "MR. TRANSLATOR" },
      { "event": "KHUTHUBA" },
      { "event": "SIYASI THAQREER URD" }
    ]
  },
  {
    "id": "524",
    "name": "MUHAMMAD THASNEEM KE",
    "chestNo": "524",
    "programs": [
      { "event": "NEWS WRITING URDU" },
      { "event": "POEM WRITING URD" },
      { "event": "STORY WRITING URDU" },
      { "event": "PROOF READING URD" },
      { "event": "ESSAY WRITING URDU" },
      { "event": "SIYASI THAQREER URD" },
      { "event": "NEWS WRITING AND READING URD" },
      { "event": "TADRIS" },
      { "event": "ANNOUNCEMENT" }
    ]
  },
  {
    "id": "531",
    "name": "RASEEN RAHMAN TR",
    "chestNo": "531",
    "programs": [
      { "event": "NEWS WRITING ARB" },
      { "event": "POEM WRITING ARB" },
      { "event": "STORY WRITING ARAB" },
      { "event": "PROOF READING ARB" },
      { "event": "MAQAMA ARABIC" }
    ]
  },
  {
    "id": "534",
    "name": "MUHAMMED SWALIH AH",
    "chestNo": "534",
    "programs": [
      { "event": "POEM WRITING MLM" },
      { "event": "PROOF READING MLM" },
      { "event": "ESSAY WRITING MLM" },
      { "event": "ACRYLIC PAINTING" },
      { "event": "GROUP DISCUSSION" },
      { "event": "ADVANTURE PHOTOGRAPHY" },
      { "event": "KAVIYARANG" }
    ]
  },
  {
    "id": "535",
    "name": "KS MOHAMMED SINAN",
    "chestNo": "535",
    "programs": [
      { "event": "NEWS WRITING MLM" },
      { "event": "POEM WRITING MLM" },
      { "event": "STORY WRITING MLM" },
      { "event": "SCREEN PLAY WRITING MLM" },
      { "event": "ESSAY WRITING MLM" },
      { "event": "FEATURE WRITING MLM" },
      { "event": "ABSTRACT WRITING ENG" },
      { "event": "GROUP DISCUSSION" },
      { "event": "ADVANTURE PHOTOGRAPHY" },
      { "event": "NEWS WRITING AND READING ENG" },
      { "event": "KAVIYARANG" },
      { "event": "CAMPUS IQ" },
      { "event": "PROJECT PRESENTATION ENG" },
      { "event": "REVERSE QUIZ" }
    ]
  },
  {
    "id": "539",
    "name": "MUHAMMAD NAJAD AK",
    "chestNo": "539",
    "programs": [
      { "event": "POEM WRITING ENG" },
      { "event": "PROOF READING ENG" },
      { "event": "ACADEMIC ESSAY ENG" },
      { "event": "EXTEMPORE SPEECH MLM" },
      { "event": "ACADEMIC TALK ENG" },
      { "event": "MOCK INTERVIEW ENG" },
      { "event": "FACE TO FACE ENG" },
      { "event": "ANNOUNCEMENT" },
      { "event": "PROJECT PRESENTATION ENG" }
    ]
  },
  {
    "id": "646",
    "name": "MUHAMMED SHABEEH PP",
    "chestNo": "646",
    "programs": [
      { "event": "NEWS WRITING ENG" },
      { "event": "POEM WRITING ENG" },
      { "event": "STORY WRITING MLM" },
      { "event": "SCREEN PLAY WRITING MLM" },
      { "event": "ACADEMIC ESSAY ENG" },
      { "event": "ABSTRACT WRITING ENG" },
      { "event": "CARTOON" },
      { "event": "REACTION" },
      { "event": "MOCK INTERVIEW ENG" }
    ]
  },
  {
    "id": "650",
    "name": "JAVAD ALI",
    "chestNo": "650",
    "programs": [
      { "event": "NEWS WRITING ENG" },
      { "event": "STORY WRITING ENG" },
      { "event": "PROOF READING ENG" }
    ]
  },
  {
    "id": "544",
    "name": "ABDULLA K",
    "chestNo": "544",
    "programs": [
      { "event": "SONG URD" },
      { "event": "MASHUP" },
      { "event": "MULTILINGUAL QUIZ" },
      { "event": "SWARF IQ" },
      { "event": "MULAFAZA" },
      { "event": "SPEECH & SONG ARB" },
      { "event": "FACE TO FACE ARB" },
      { "event": "INSTANT NEWS PAPER" },
      { "event": "INSTANT MAGZINE" },
      { "event": "THAHLILU IBARA" },
      { "event": "SENTENCE TRANSLATION" },
      { "event": "FEATURE WRITING MLM" }
    ]
  },
  {
    "id": "547",
    "name": "MUHAMMED AJMAL",
    "chestNo": "547",
    "programs": [
      { "event": "ANNOUNCEMENT" },
      { "event": "JUST A MINUTE" },
      { "event": "PADHYAPARAYANAM" },
      { "event": "ANCHORING" },
      { "event": "TEACHING MLM" },
      { "event": "ESSAY MLM" },
      { "event": "POEM WRITING MLM" },
      { "event": "PROOF READING MLM" },
      { "event": "SLOGAN MAKING" },
      { "event": "NEWS WRITING MLM" }
    ]
  },
  {
    "id": "548",
    "name": "ABDUL BASITH KP",
    "chestNo": "548",
    "programs": [
      { "event": "SONG URD" },
      { "event": "PADHYAPARAYANAM" },
      { "event": "TWEETING" },
      { "event": "NEWS READING AND READING ARB" },
      { "event": "NEWS READING AND READING MLM" },
      { "event": "PROOF READING URD" }
    ]
  },
  {
    "id": "558",
    "name": "MUHAMMED THAMEEM TI",
    "chestNo": "558",
    "programs": [
      { "event": "SWARF IQ" },
      { "event": "MULAFAZA" },
      { "event": "FACE TO FACE ARB" },
      { "event": "THAHLILU IBARA" },
      { "event": "ESSAY ARB" },
      { "event": "POEM WRITING ARB" },
      { "event": "STORY WRITING ARB" },
      { "event": "SPEECH ARB" },
      { "event": "COMPREHENSION ARB" },
      { "event": "PROOF READING ARB" }
    ]
  },
  {
    "id": "556",
    "name": "PARTICIPANT 556 (Name Not Provided)",
    "chestNo": "556",
    "programs": [
      { "event": "HIFZ & QIRATH" },
      { "event": "WA'Z" },
      { "event": "PADAPPATTU" },
      { "event": "MASHUP" },
      { "event": "SPEECH & SONG ARB" },
      { "event": "SPEECH & SONG MLM" },
      { "event": "ESSAY URD" },
      { "event": "COMPREHENSION URD" },
      { "event": "PROOF READING URD" },
      { "event": "CAPTION MAKING ENG" }
    ]
  },
  {
    "id": "575",
    "name": "ADHIL MUHAMMED",
    "chestNo": "575",
    "programs": [
      { "event": "GEO GIANT" },
      { "event": "GK QUIZ" },
      { "event": "PHOTOGRAPHY" },
      { "event": "TEACHING MLM" },
      { "event": "JUNCTION SPEECH MLM" },
      { "event": "EXTEMPORE SPEECH MLM" },
      { "event": "TYPING TRILINGUAL" },
      { "event": "POSTER DESIGNING DIGITAL" },
      { "event": "CELL MASTER" }
    ]
  },
  {
    "id": "579",
    "name": "AMJAD E",
    "chestNo": "579",
    "programs": [
      { "event": "HIFZ & QIRATH" },
      { "event": "WA'Z" },
      { "event": "PADAPPATTU" },
      { "event": "NASHEED" },
      { "event": "SPEECH & SONG MLM" }
    ]
  },
  {
    "id": "580",
    "name": "MUHAMMED RAVAN PK",
    "chestNo": "580",
    "programs": [
      { "event": "STORY WRITING URD" },
      { "event": "SPEECH URD" }
    ]
  },
  {
    "id": "581",
    "name": "MEHAFIL SHAN",
    "chestNo": "581",
    "programs": [
      { "event": "RAP SONG" },
      { "event": "TOUNG TWISTER" },
      { "event": "ESSAY URD" },
      { "event": "STORY WRITING MLM" },
      { "event": "COMPREHENSION URD" },
      { "event": "PROOF READING URD" }
    ]
  },
  {
    "id": "582",
    "name": "MUHAMMED SHAMIL K",
    "chestNo": "582",
    "programs": [
      { "event": "HIFZ & QIRATH" },
      { "event": "ANNOUNCEMENT" },
      { "event": "HISTORY TALK ENG" },
      { "event": "ANCHORING" },
      { "event": "ESSAY URD" },
      { "event": "POEM WRITING URD" },
      { "event": "STORY WRITING URD" },
      { "event": "SPEECH URD" },
      { "event": "INSPIRING TALK ENG" },
      { "event": "COMPREHENSION ARB" },
      { "event": "SLOGAN MAKING" },
      { "event": "PENCIL DRAWING" },
      { "event": "CARTOON" }
    ]
  },
  {
    "id": "587",
    "name": "MUHAMMED NIHAL T",
    "chestNo": "587",
    "programs": [
      { "event": "MULTILINGUAL QUIZ" },
      { "event": "SPELLING BEE" },
      { "event": "TOUNG TWISTER" },
      { "event": "ESSAY ARB" },
      { "event": "POEM WRITING ARB" },
      { "event": "STORY WRITING ARB" },
      { "event": "SPEECH ARB" },
      { "event": "PROOF READING ARB" },
      { "event": "NEWS WRITING ARB" }
    ]
  },
  {
    "id": "589",
    "name": "MUHAMMED TWAHIR N",
    "chestNo": "589",
    "programs": [
      { "event": "SONG ENG" },
      { "event": "SPELLING BEE" },
      { "event": "LIVE TRANSLATION ENG" },
      { "event": "FACE TO FACE ENG" },
      { "event": "ESSAY ENG" },
      { "event": "STORY WRING ENG" },
      { "event": "NEWS WRITING ENG" }
    ]
  },
  {
    "id": "590",
    "name": "MUHAMMAD NIHAL. CN",
    "chestNo": "590",
    "programs": [
      { "event": "SONG ENG" },
      { "event": "GK QUIZ" },
      { "event": "SCIENCE MASTER" },
      { "event": "HISTORY TALK ENG" },
      { "event": "PHOTOGRAPHY" },
      { "event": "STORY WRITING MLM" },
      { "event": "JUNCTION SPEECH MLM" },
      { "event": "EXTEMPORE SPEECH MLM" },
      { "event": "INSPIRING TALK ENG" },
      { "event": "TYPING TRILINGUAL" },
      { "event": "CELL MASTER" },
      { "event": "WEB DESIGNING" }
    ]
  },
  {
    "id": "591",
    "name": "MUHAMMED JUNAID. T",
    "chestNo": "591",
    "programs": [
      { "event": "PENCIL DRAWING" },
      { "event": "CARTOON" },
      { "event": "WATER PAINTING" },
      { "event": "CALLIGRAPHY" }
    ]
  },
  {
    "id": "596",
    "name": "MUHAMMED AJMAL M",
    "chestNo": "596",
    "programs": [
      { "event": "MATH TALENT" },
      { "event": "JUST A MINUTE" },
      { "event": "ESSAY MLM" },
      { "event": "NEWS READING AND READING MLM" },
      { "event": "PROOF READING MLM" }
    ]
  },
  {
    "id": "601",
    "name": "MUHAMMED SWALIH. VA",
    "chestNo": "601",
    "programs": [
      { "event": "TOUNG TWISTER" },
      { "event": "POEM WRITING MLM" }
    ]
  },
  {
    "id": "604",
    "name": "MUHAMMED MUZZAMMIL B",
    "chestNo": "604",
    "programs": [
      { "event": "WA'Z" },
      { "event": "PADAPPATTU" },
      { "event": "NASHEED" },
      { "event": "RAP SONG" }
    ]
  },
  {
    "id": "606",
    "name": "HASHIM K J",
    "chestNo": "606",
    "programs": [
      { "event": "MATH TALENT" },
      { "event": "SCIENCE MASTER" },
      { "event": "POEM WRITING ENG" },
      { "event": "NEWS WRITING AND READING ENG" },
      { "event": "STORY WRING ENG" },
      { "event": "PROOF READING ENG" },
      { "event": "CAPTION MAKING ENG" },
      { "event": "CALLIGRAPHY" }
    ]
  },
  {
    "id": "610",
    "name": "MUHAMMAD HASEEN C",
    "chestNo": "610",
    "programs": [
      { "event": "GEO GIANT" },
      { "event": "POEM WRITING URD" }
    ]
  },
  {
    "id": "710",
    "name": "MUHAMMED NAJAD M T",
    "chestNo": "710",
    "programs": [
      { "event": "LIVE TRANSLATION ENG" },
      { "event": "FACE TO FACE ENG" },
      { "event": "ESSAY ENG" },
      { "event": "POEM WRITING ENG" },
      { "event": "NEWS WRITING AND READING ENG" },
      { "event": "COMPREHENSION ENG" },
      { "event": "PROOF READING ENG" },
      { "event": "NEWS WRITING ENG" },
      { "event": "CAPTION MAKING ENG" }
    ]
  },
  {
    "id": "619",
    "name": "MUHAMMED FAHEEM",
    "chestNo": "619",
    "programs": [
      { "event": "QIRA'TH" },
      { "event": "SPEECH AND SONG MLM" },
      { "event": "SONG ARB" },
      { "event": "MASHUP" },
      { "event": "GROUP SONG" },
      { "event": "CONVERSATION ARB" },
      { "event": "MULAFAZA" },
      { "event": "ESSAY ARB" },
      { "event": "POEM WRITING URD" },
      { "event": "STORY WRITING ARB" },
      { "event": "IMAGE ELABORATION" },
      { "event": "PROOF READING ARB" }
    ]
  },
  {
    "id": "621",
    "name": "MUHAMMED RABEEH C",
    "chestNo": "621",
    "programs": [
      { "event": "STORY NARRATION ENG" },
      { "event": "MEMORY TEST" },
      { "event": "HINDI VIDHWAN" },
      { "event": "SPELLING BEE" },
      { "event": "INSTANT CHILDREN’S MAGAZINE" },
      { "event": "INSTANT NEWSPAPER" },
      { "event": "POEM WRITING URD" },
      { "event": "NEWS WRITING ENG" },
      { "event": "THAHSKEEL" },
      { "event": "PROOF READING ENG" }
    ]
  },
  {
    "id": "622",
    "name": "MUHAMMAD NUFAIL KP",
    "chestNo": "622",
    "programs": [
      { "event": "SPEECH URD" },
      { "event": "SONG ARB" },
      { "event": "CONVERSATION ARB" },
      { "event": "PICK AND TALK MLM" },
      { "event": "POEM WRITING MLM" },
      { "event": "STORY WRITING URD" },
      { "event": "POSTER DESIGNING" },
      { "event": "PENCIL DRAWING" },
      { "event": "STORY COMPLETION" },
      { "event": "LETTER WRITING MLM" },
      { "event": "WATER PAINTING" },
      { "event": "THAHSKEEL" }
    ]
  },
  {
    "id": "627",
    "name": "MUHAMMED RISHAN VU",
    "chestNo": "627",
    "programs": [
      { "event": "SPEECH MLM" },
      { "event": "SONG ENG" },
      { "event": "RAP SONG" },
      { "event": "STORY NARRATION ENG" },
      { "event": "MEMORY TEST" },
      { "event": "CONVERSATION ENG" },
      { "event": "KACHATABA TONGUE TWISTER" },
      { "event": "ESSAY ENG" },
      { "event": "POEM WRITING ENG" },
      { "event": "NEWS WRITING MLM" },
      { "event": "DICTIONARY MAKING ENG" },
      { "event": "LETTER WRITING ENG" }
    ]
  },
  {
    "id": "633",
    "name": "MUHAMMED ANZIL E A",
    "chestNo": "633",
    "programs": [
      { "event": "SONG MLM" },
      { "event": "RAP SONG" },
      { "event": "CALLIGRAPHY" },
      { "event": "WATER PAINTING" },
      { "event": "CLAY MODELING" }
    ]
  },
  {
    "id": "636",
    "name": "IHSAN K",
    "chestNo": "636",
    "programs": [
      { "event": "SPEECH ARB" },
      { "event": "GK QUIZ" },
      { "event": "MATH’S TALENT" },
      { "event": "ESSAY URD" },
      { "event": "POEM WRITING ARB" },
      { "event": "STORY WRITING URD" },
      { "event": "SUDOKU" },
      { "event": "VOCABULARY" },
      { "event": "LETTER WRITING ARB" },
      { "event": "GEO GIANT" }
    ]
  },
  {
    "id": "638",
    "name": "MUHAMMED RAZI. C",
    "chestNo": "638",
    "programs": [
      { "event": "WA'Z" },
      { "event": "SONG MLM" },
      { "event": "STORY NARRATION MLM" },
      { "event": "CONVERSATION MLM" },
      { "event": "PICK AND TALK MLM" },
      { "event": "KACHATABA TONGUE TWISTER" },
      { "event": "NJAN MALAYALI" },
      { "event": "PADHYAPARAYANAM" },
      { "event": "GRAMMER QUIZ" },
      { "event": "ESSAY URD" },
      { "event": "STORY COMPLETION" },
      { "event": "SLOGAN MAKING" },
      { "event": "PROOF READING MLM" },
      { "event": "CELL MASTER" }
    ]
  },
  {
    "id": "659",
    "name": "MUHAMMED SHAMIL PP",
    "chestNo": "659",
    "programs": [
      { "event": "QIRA'TH" },
      { "event": "WA'Z" },
      { "event": "SPEECH MLM" },
      { "event": "SONG URDU" },
      { "event": "STORY NARRATION MLM" },
      { "event": "GK QUIZ" },
      { "event": "CONVERSATION URD" },
      { "event": "PADHYAPARAYANAM" },
      { "event": "SWARF IQ" },
      { "event": "MULAFAZA" },
      { "event": "POEM WRITING MLM" },
      { "event": "NEWS WRITING URD" },
      { "event": "STORY WRING ENG" },
      { "event": "POSTER DESIGNING DIGITAL" },
      { "event": "POSTER DESIGNING" },
      { "event": "LETTER WRITING URD" },
      { "event": "GEO GIANT" },
      { "event": "POWER POINT CREATION" }
    ]
  },
  {
    "id": "671",
    "name": "MUHAMMED ANSHID. K",
    "chestNo": "671",
    "programs": [
      { "event": "SPEECH ARB" },
      { "event": "SONG URDU" },
      { "event": "CONVERSATION MLM" }
    ]
  },
  {
    "id": "673",
    "name": "MUHAMMED SHIYAN P P",
    "chestNo": "673",
    "programs": [
      { "event": "SPEECH ENG" },
      { "event": "SONG ENG" },
      { "event": "MATH’S TALENT" },
      { "event": "CONVERSATION URD" },
      { "event": "ESSAY ENG" },
      { "event": "NEWS WRITING ARB" },
      { "event": "STORY WRITING MLM" },
      { "event": "POSTER DESIGNING DIGITAL" },
      { "event": "POWER POINT CREATION" },
      { "event": "PROOF READING URD" }
    ]
  },
  {
    "id": "674",
    "name": "MUHAMMED RAFEED. K",
    "chestNo": "674",
    "programs": [
      { "event": "HIFZ" },
      { "event": "SPEECH ENG" },
      { "event": "CONVERSATION ENG" },
      { "event": "SPELLING BEE" },
      { "event": "WORD FIGHT" },
      { "event": "ESSAY ARB" },
      { "event": "POEM WRITING ENG" },
      { "event": "VOCABULARY" },
      { "event": "SLOGAN MAKING" }
    ]
  },
  {
    "id": "675",
    "name": "MUHAMMED AJIL K.E",
    "chestNo": "675",
    "programs": [
      { "event": "HIFZ" },
      { "event": "SPEECH URD" },
      { "event": "NJAN MALAYALI" },
      { "event": "WORD FIGHT" },
      { "event": "ESSAY MLM" },
      { "event": "POEM WRITING ARB" },
      { "event": "STORY WRITING ARB" },
      { "event": "SUDOKU" },
      { "event": "PENCIL DRAWING" },
      { "event": "CLAY MODELING" }
    ]
  }, {
    "id": "655",
    "name": "MUHAMMED SHABNAN V",
    "chestNo": "655",
    "programs": [
      { "event": "SONG MLM" },
      { "event": "WA'Z" },
      { "event": "SPEECH URD" },
      { "event": "SPEECH AND SONG MLM" },
      { "event": "READING HND" },
      { "event": "CONVERSATION URD" },
      { "event": "POEM RECITATION MLM" },
      { "event": "GROUP SONG" },
      { "event": "HAND WRITING MALAYALAM" },
      { "event": "MS WORD" }
    ]
  },
  {
    "id": "657",
    "name": "NAJAH AK",
    "chestNo": "657",
    "programs": [
      { "event": "SONG ARB" },
      { "event": "READING MLM" },
      { "event": "NJAN MALAYALI" },
      { "event": "GK QUIZ" },
      { "event": "MEMORY TEST" },
      { "event": "HAND WRITING MALAYALAM" },
      { "event": "SUDOKU" },
      { "event": "ORIGAMI" },
      { "event": "PENCIL DRAWING" },
      { "event": "TYPING MASTER" }
    ]
  },
  {
    "id": "662",
    "name": "MUHAMMED FAIZAN E",
    "chestNo": "662",
    "programs": [
      { "event": "QIRA'TH" },
      { "event": "SONG MLM" },
      { "event": "WA'Z" },
      { "event": "MATHS TALENT" },
      { "event": "POEM RECITATION MLM" },
      { "event": "POEM WRITING MLM" },
      { "event": "SUDOKU" },
      { "event": "DICTIONARY MAKING ENG" }
    ]
  },
  {
    "id": "689",
    "name": "MINHAJ KP",
    "chestNo": "689",
    "programs": [
      { "event": "SPEECH ARB" },
      { "event": "SPELLING BEE" },
      { "event": "PADHYAPARAYANAM" }
    ]
  },
  {
    "id": "691",
    "name": "MOHAMMED RAYYAN",
    "chestNo": "691",
    "programs": [
      { "event": "SPEECH MLM" },
      { "event": "READING ENG" },
      { "event": "CONVERSATION ENG" },
      { "event": "MEMORY TEST" },
      { "event": "STORY NARRATION ENG" },
      { "event": "HAND WRITING ENGLISH" },
      { "event": "POEM WRITING MLM" },
      { "event": "MS WORD" },
      { "event": "DICTIONARY MAKING ENG" },
      { "event": "VOCABULARY" }
    ]
  },
  {
    "id": "695",
    "name": "MUHAMMED RAZIN",
    "chestNo": "695",
    "programs": [
      { "event": "SPEECH URD" },
      { "event": "READING URD" },
      { "event": "CONVERSATION MLM" },
      { "event": "CONVERSATION URD" },
      { "event": "STORY NARRATION MLM" },
      { "event": "HAND WRITING URDU" },
      { "event": "LETTTER WRITING MLM" },
      { "event": "STORY COMPLETION MLM" },
      { "event": "DICTIONARY MAKING MLM" },
      { "event": "TITLE MAKING" }
    ]
  },
  {
    "id": "700",
    "name": "MUHAMMED ADHIL SHAN E",
    "chestNo": "700",
    "programs": [
      { "event": "QIRA'TH" },
      { "event": "SONG URD" },
      { "event": "SPEECH ARB" },
      { "event": "READING ARB" },
      { "event": "HAND WRITING ARABIC" },
      { "event": "POEM WRITING ARB" },
      { "event": "DICTIONARY MAKING ARB" }
    ]
  },
  {
    "id": "705",
    "name": "HADI A",
    "chestNo": "705",
    "programs": [
      { "event": "SONG ENG" },
      { "event": "READING URD" },
      { "event": "CONVERSATION MLM" },
      { "event": "STORY NARRATION MLM" },
      { "event": "HAND WRITING HINDI" },
      { "event": "LETTTER WRITING MLM" },
      { "event": "MS PAINT" }
    ]
  },
  {
    "id": "708",
    "name": "MUHAMMED FAHEEM",
    "chestNo": "708",
    "programs": [
      { "event": "SONG ARB" },
      { "event": "STORY COMPLETION MLM" }
    ]
  },
  {
    "id": "711",
    "name": "Hamil Shebin",
    "chestNo": "711",
    "programs": [
      { "event": "AZAN" },
      { "event": "SPEECH MLM" },
      { "event": "READING ENG" },
      { "event": "CONVERSATION ENG" },
      { "event": "STORY NARRATION ENG" },
      { "event": "HAND WRITING ENGLISH" },
      { "event": "JIGSAW PUZZLE" },
      { "event": "ORIGAMI" },
      { "event": "PENCIL DRAWING" },
      { "event": "CLAY MODELING" }
    ]
  },
  {
    "id": "725",
    "name": "IBRAHIM P",
    "chestNo": "725",
    "programs": [
      { "event": "SPELLING BEE" },
      { "event": "MULAFAZA" },
      { "event": "HAND WRITING URDU" },
      { "event": "POEM WRITING ENG" },
      { "event": "GEO GIANT" }
    ]
  },
  {
    "id": "726",
    "name": "Muhammed Zibiyan. A",
    "chestNo": "726",
    "programs": [
      { "event": "HIFZ" },
      { "event": "SPEECH ENG" },
      { "event": "READING MLM" },
      { "event": "READING ARB" },
      { "event": "GK QUIZ" },
      { "event": "WORD FIGHT" },
      { "event": "POEM WRITING ARB" }
    ]
  },
  {
    "id": "727",
    "name": "MUHAMMED SHAMIL T",
    "chestNo": "727",
    "programs": [
      { "event": "HIFZ" },
      { "event": "SPEECH ARB" },
      { "event": "CONVERSATION ARB" },
      { "event": "HAND WRITING ARABIC" },
      { "event": "TYPING MASTER" },
      { "event": "DICTIONARY MAKING ARB" }
    ]
  },
  {
    "id": "728",
    "name": "MOHAMED AJMAL M K",
    "chestNo": "728",
    "programs": [
      { "event": "AZAN" },
      { "event": "CONVERSATION ARB" },
      { "event": "MULAFAZA" },
      { "event": "JIGSAW PUZZLE" },
      { "event": "TITLE MAKING" },
      { "event": "SONG URD" },
      { "event": "MS PAINT" },
      { "event": "DICTIONARY MAKING MLM" }
    ]
  },
  {
    "id": "735",
    "name": "S. MUHAMMAD NASWEEH VT",
    "chestNo": "735",
    "programs": [
      { "event": "SONG URD" },
      { "event": "MS PAINT" },
      { "event": "DICTIONARY MAKING MLM" }
    ]
  },
  { "id": "551", "name": "SHAZIN MOHAMMED M K", "chestNo": "551", "programs": [{ "event": "MULTILINGUAL QUIZ" }, { "event": "SWARF IQ" }, { "event": "MULAFAZA" }, { "event": "THAHLILU IBARA" }, { "event": "ESSAY ARB" }, { "event": "POEM WRITING ARB" }, { "event": "NEWS READING AND READING ARB" }, { "event": "STORY WRITING ARB" }, { "event": "COMPREHENSION ARB" }, { "event": "PROOF READING ARB" }, { "event": "C" }] }, { "id": "559", "name": "ADHNAN P", "chestNo": "559", "programs": [{ "event": "HISTORY TALK ENG" }, { "event": "LIVE TRANSLATION ENG" }, { "event": "FACE TO FACE ENG" }, { "event": "INSTANT MAGZINE" }, { "event": "TWEETING" }, { "event": "ESSAY ENG" }, { "event": "NEWS WRITING AND READING ENG" }, { "event": "EXTEMPORE SPEECH MLM" }, { "event": "PROOF READING ENG" }, { "event": "NEWS WRITING ENG" }] }, { "id": "564", "name": "SAHL MUHAMMED . K", "chestNo": "564", "programs": [{ "event": "WA'Z" }, { "event": "RAP SONG" }, { "event": "GEO GIANT" }, { "event": "TEACHING MLM" }, { "event": "SPEECH & SONG MLM" }, { "event": "INSTANT NEWS PAPER" }, { "event": "ESSAY MLM" }, { "event": "STORY WRING ENG" }, { "event": "JUNCTION SPEECH MLM" }, { "event": "PROOF READING MLM" }, { "event": "C" }, { "event": "FEATURE WRITING MLM" }] }, { "id": "574", "name": "ABDUL HADI KC", "chestNo": "574", "programs": [{ "event": "HIFZ & QIRATH" }, { "event": "PADAPPATTU" }, { "event": "STORY WRITING MLM" }] }, { "id": "576", "name": "MUHAMMED NAJAD", "chestNo": "576", "programs": [{ "event": "HIFZ & QIRATH" }, { "event": "WA'Z" }, { "event": "PADAPPATTU" }, { "event": "RAP SONG" }, { "event": "MATH TALENT" }, { "event": "PROOF READING ARB" }, { "event": "TYPING TRILINGUAL" }] }, { "id": "583", "name": "MUHAMMED RAFI E", "chestNo": "583", "programs": [{ "event": "SONG URD" }, { "event": "MULTILINGUAL QUIZ" }, { "event": "PADHYAPARAYANAM" }, { "event": "FACE TO FACE ARB" }, { "event": "ESSAY ARB" }, { "event": "POEM WRITING ARB" }, { "event": "NEWS READING AND READING ARB" }, { "event": "SPEECH URD" }, { "event": "COMPREHENSION ARB" }, { "event": "SENTENCE TRANSLATION" }, { "event": "C" }, { "event": "CARTOON" }, { "event": "WATER PAINTING" }, { "event": "NEWS WRITING ARB" }] }, { "id": "585", "name": "ABDUL MUHAIMIN KC", "chestNo": "585", "programs": [{ "event": "NASHEED" }, { "event": "TOUNG TWISTER" }, { "event": "PROOF READING MLM" }, { "event": "NEWS WRITING ARB" }] }, { "id": "592", "name": "MUHAMMED MIHLAD", "chestNo": "592", "programs": [{ "event": "ANNOUNCEMENT" }, { "event": "SPELLING BEE" }, { "event": "TEACHING MLM" }, { "event": "EXTEMPORE SPEECH MLM" }, { "event": "CELL MASTER" }, { "event": "CAPTION MAKING ENG" }] }, { "id": "594", "name": "MUHAMMED SHANIL", "chestNo": "594", "programs": [{ "event": "SONG ENG" }, { "event": "MATH TALENT" }, { "event": "HISTORY TALK ENG" }, { "event": "LIVE TRANSLATION ENG" }, { "event": "ESSAY ENG" }, { "event": "POEM WRITING ENG" }, { "event": "INSPIRING TALK ENG" }, { "event": "COMPREHENSION ENG" }, { "event": "PROOF READING ENG" }, { "event": "TYPING TRILINGUAL" }, { "event": "C" }] }, { "id": "600", "name": "MUHAMMED BASIL K", "chestNo": "600", "programs": [{ "event": "FEATURE WRITING MLM" }, { "event": "CALLIGRAPHY" }] }, { "id": "603", "name": "AMEEN IHSAN K", "chestNo": "603", "programs": [{ "event": "JUST A MINUTE" }, { "event": "POEM WRITING MLM" }, { "event": "NEWS READING AND READING MLM" }, { "event": "NEWS WRITING MLM" }, { "event": "NEWS WRITING MLM" }] }, { "id": "605", "name": "MUHAMMED ADHIL E.H", "chestNo": "605", "programs": [{ "event": "SWARF IQ" }, { "event": "MULAFAZA" }, { "event": "FACE TO FACE ARB" }, { "event": "THAHLILU IBARA" }, { "event": "ESSAY URD" }, { "event": "STORY WRITING ARB" }, { "event": "SPEECH ARB" }, { "event": "CALLIGRAPHY" }] }, { "id": "607", "name": "MUHAMMED RAMZIN", "chestNo": "607", "programs": [{ "event": "GEO GIANT" }, { "event": "TOUNG TWISTER" }, { "event": "POEM WRITING URD" }, { "event": "STORY WRITING URD" }, { "event": "SPEECH URD" }, { "event": "COMPREHENSION URD" }, { "event": "PROOF READING URD" }] }, { "id": "612", "name": "MUHAMMED SABITH. K.P.", "chestNo": "612", "programs": [{ "event": "SONG URD" }, { "event": "PADHYAPARAYANAM" }, { "event": "POEM WRITING MLM" }, { "event": "SPEECH ARB" }, { "event": "NEWS WRITING MLM" }] }, { "id": "613", "name": "MUHAMMED RABEEH", "chestNo": "613", "programs": [{ "event": "SONG ENG" }, { "event": "SPELLING BEE" }, { "event": "NEWS WRITING AND READING ENG" }, { "event": "STORY WRING ENG" }, { "event": "INSPIRING TALK ENG" }, { "event": "COMPREHENSION ENG" }, { "event": "PENCIL DRAWING" }, { "event": "CARTOON" }, { "event": "WATER PAINTING" }, { "event": "NEWS WRITING ENG" }] }, { "id": "611", "name": "MUHAMMED ASIM P", "chestNo": "611", "programs": [{ "event": "SPEECH MLM" }, { "event": "SONG ARB" }, { "event": "PICK AND TALK MLM" }, { "event": "MULAFAZA" }, { "event": "ESSAY ARB" }, { "event": "STORY WRITING ARB" }, { "event": "THAHSKEEL" }, { "event": "PROOF READING ARB" }] }, { "id": "614", "name": "MUHAMMAD NAJAD CN", "chestNo": "614", "programs": [{ "event": "QIRA'TH" }, { "event": "WA'Z" }, { "event": "SPEECH AND SONG MLM" }, { "event": "SONG URD" }, { "event": "MASHUP" }, { "event": "GROUP SONG" }, { "event": "STORY NARRATION MLM" }, { "event": "INSTANT CHILDREN’S MAGAZINE" }, { "event": "INSTANT NEWSPAPER" }, { "event": "ESSAY MLM" }, { "event": "C" }, { "event": "NEWS WRITING MLM" }, { "event": "STORY WRITING MLM" }, { "event": "POSTER DESIGNING" }, { "event": "PENCIL DRAWING" }, { "event": "LETTER WRITING MLM" }] }, { "id": "617", "name": "Ebrahim Badusha.PP", "chestNo": "617", "programs": [{ "event": "SPEECH URD" }, { "event": "SONG MLM" }, { "event": "GK QUIZ" }, { "event": "ESSAY URD" }, { "event": "STORY WRITING URD" }, { "event": "GEO GIANT" }, { "event": "CLAY MODELING" }] }, { "id": "618", "name": "MUHAMMED NIHAL PN", "chestNo": "618", "programs": [{ "event": "QIRA'TH" }, { "event": "WA'Z" }, { "event": "SONG ENG" }, { "event": "RAP SONG" }, { "event": "CONVERSATION ARB" }, { "event": "WORD FIGHT" }, { "event": "POEM WRITING MLM" }, { "event": "POSTER DESIGNING" }, { "event": "CALLIGRAPHY" }, { "event": "WATER PAINTING" }] }, { "id": "620", "name": "Muhammed Luthfi MM", "chestNo": "620", "programs": [{ "event": "SPEECH ENG" }, { "event": "MATH’S TALENT" }, { "event": "HINDI VIDHWAN" }, { "event": "GRAMMER QUIZ" }, { "event": "ESSAY ENG" }, { "event": "POEM WRITING ENG" }, { "event": "STORY WRING ENG" }, { "event": "VOCABULARY" }, { "event": "CROSS WORD" }] }, { "id": "623", "name": "MUHAMMED V", "chestNo": "623", "programs": [{ "event": "SONG ENG" }, { "event": "STORY NARRATION ENG" }, { "event": "GK QUIZ" }, { "event": "CONVERSATION ENG" }, { "event": "NJAN MALAYALI" }, { "event": "ESSAY MLM" }, { "event": "POEM WRITING ENG" }, { "event": "POSTER DESIGNING DIGITAL" }, { "event": "LETTER WRITING ENG" }, { "event": "GEO GIANT" }, { "event": "C" }, { "event": "CELL MASTER" }] }, { "id": "624", "name": "MUHAMMED NADEERSHAH K", "chestNo": "624", "programs": [{ "event": "HIFZ" }, { "event": "SPEECH ENG" }, { "event": "STORY NARRATION ENG" }, { "event": "MATH’S TALENT" }, { "event": "MEMORY TEST" }, { "event": "CONVERSATION MLM" }, { "event": "CONVERSATION ENG" }, { "event": "SPELLING BEE" }, { "event": "WORD FIGHT" }, { "event": "ESSAY ENG" }, { "event": "C" }, { "event": "POSTER DESIGNING DIGITAL" }, { "event": "SUDOKU" }, { "event": "DICTIONARY MAKING ENG" }, { "event": "POWER POINT CREATION" }, { "event": "PROOF READING ENG" }, { "event": "TYPING BYLINGUAL" }] }, { "id": "629", "name": "Adnan Muhamed Ammar.M.U", "chestNo": "629", "programs": [{ "event": "SPEECH URD" }, { "event": "MEMORY TEST" }, { "event": "CONVERSATION MLM" }, { "event": "CONVERSATION URD" }, { "event": "SWARF IQ" }, { "event": "ESSAY URD" }, { "event": "NEWS WRITING URD" }, { "event": "SUDOKU" }, { "event": "PENCIL DRAWING" }, { "event": "VOCABULARY" }, { "event": "C" }, { "event": "CALLIGRAPHY" }, { "event": "PROOF READING URD" }] }, { "id": "653", "name": "Muhammed Najil KV", "chestNo": "653", "programs": [{ "event": "SPEECH ARB" }, { "event": "CONVERSATION URD" }, { "event": "PICK AND TALK MLM" }, { "event": "MULAFAZA" }, { "event": "POEM WRITING ARB" }, { "event": "STORY WRITING URD" }, { "event": "SLOGAN MAKING" }, { "event": "WATER PAINTING" }] }, { "id": "660", "name": "MUHAMMED HANOON", "chestNo": "660", "programs": [{ "event": "HIFZ" }, { "event": "SPEECH MLM" }, { "event": "SONG MLM" }, { "event": "SONG URDU" }, { "event": "SPELLING BEE" }, { "event": "PADHYAPARAYANAM" }, { "event": "POEM WRITING ARB" }, { "event": "STORY WRING ENG" }, { "event": "STORY COMPLETION" }, { "event": "PROOF READING MLM" }] }, { "id": "664", "name": "MUHAMMED SHAFI TP", "chestNo": "664", "programs": [{ "event": "SPEECH ARB" }, { "event": "SONG ARB" }, { "event": "CONVERSATION ARB" }, { "event": "KACHATABA TONGUE TWISTER" }, { "event": "ESSAY ARB" }, { "event": "POEM WRITING URD" }, { "event": "NEWS WRITING ARB" }, { "event": "STORY WRITING ARB" }, { "event": "DICTIONARY MAKING ARB" }, { "event": "LETTER WRITING ARB" }] }, { "id": "665", "name": "Muhammed Thameem. P", "chestNo": "665", "programs": [{ "event": "RAP SONG" }, { "event": "STORY NARRATION MLM" }, { "event": "KACHATABA TONGUE TWISTER" }, { "event": "NJAN MALAYALI" }, { "event": "PADHYAPARAYANAM" }, { "event": "STORY WRITING MLM" }, { "event": "IMAGE ELABORATION" }, { "event": "STORY COMPLETION" }, { "event": "SLOGAN MAKING" }] }, { "id": "668", "name": "MUHAMMAD FADHIL T", "chestNo": "668", "programs": [{ "event": "POEM WRITING URD" }] }, { "id": "666", "name": "MUHAMMED MUSHFIQ MON", "chestNo": "666", "programs": [{ "event": "SONG URD" }, { "event": "SPEECH URD" }, { "event": "READING URD" }, { "event": "CONVERSATION URD" }, { "event": "MEMORY TEST" }, { "event": "HAND WRITING URDU" }, { "event": "ORIGAMI" }] }, { "id": "682", "name": "MUHAMMAD RAZI K", "chestNo": "682", "programs": [{ "event": "SPEECH ARB" }, { "event": "READING ARB" }, { "event": "MEMORY TEST" }, { "event": "MULAFAZA" }, { "event": "GROUP SONG" }, { "event": "HAND WRITING ARABIC" }, { "event": "JIGSAW PUZZLE" }, { "event": "TYPING MASTER" }, { "event": "DICTIONARY MAKING ARB" }, { "event": "DICTIONARY MAKING ENG" }] }, { "id": "685", "name": "MUHAMMED NABEEL T", "chestNo": "685", "programs": [{ "event": "SONG URD" }, { "event": "SPEECH URD" }, { "event": "READING ENG" }, { "event": "SPELLING BEE" }, { "event": "MULAFAZA" }, { "event": "HAND WRITING ARABIC" }, { "event": "MS WORD" }] }, { "id": "687", "name": "MUHAMMED SHAHSAD O.R", "chestNo": "687", "programs": [{ "event": "AZAN" }, { "event": "SONG ENG" }, { "event": "WA'Z" }, { "event": "SPEECH MLM" }, { "event": "SPEECH AND SONG MLM" }, { "event": "STORY NARRATION MLM" }, { "event": "HAND WRITING MALAYALAM" }, { "event": "POEM WRITING MLM" }, { "event": "POEM WRITING ARB" }, { "event": "STORY COMPLETION MLM" }] }, { "id": "692", "name": "N MOHAMMED NOUFAN", "chestNo": "692", "programs": [{ "event": "SONG ENG" }, { "event": "SPEECH ENG" }, { "event": "READING ENG" }, { "event": "CONVERSATION ENG" }, { "event": "STORY NARRATION ENG" }, { "event": "WORD FIGHT" }, { "event": "HAND WRITING URDU" }, { "event": "POEM WRITING ENG" }] }, { "id": "693", "name": "ALI HADHI", "chestNo": "693", "programs": [{ "event": "READING ARB" }, { "event": "CONVERSATION ARB" }, { "event": "NJAN MALAYALI" }, { "event": "MATHS TALENT" }, { "event": "POEM RECITATION MLM" }, { "event": "HAND WRITING HINDI" }, { "event": "SUDOKU" }, { "event": "ORIGAMI" }, { "event": "DICTIONARY MAKING ARB" }, { "event": "DICTIONARY MAKING ENG" }] }, { "id": "697", "name": "MUHAMMED SHAMMAS .C", "chestNo": "697", "programs": [{ "event": "HIFZ" }, { "event": "QIRA'TH" }, { "event": "SONG ARB" }, { "event": "READING MLM" }, { "event": "GK QUIZ" }, { "event": "HAND WRITING MALAYALAM" }, { "event": "POEM WRITING MLM" }, { "event": "POEM WRITING ARB" }, { "event": "STORY COMPLETION MLM" }, { "event": "SUDOKU" }, { "event": "HIFZ" }, { "event": "QIRA'TH" }, { "event": "SONG ARB" }, { "event": "READING MLM" }, { "event": "GK QUIZ" }, { "event": "HAND WRITING MALAYALAM" }, { "event": "POEM WRITING MLM" }, { "event": "POEM WRITING ARB" }, { "event": "STORY COMPLETION MLM" }, { "event": "SUDOKU" }] }, { "id": "714", "name": "MUHAMMAD RIZVAN O S", "chestNo": "714", "programs": [{ "event": "SPEECH ARB" }, { "event": "CONVERSATION ARB" }, { "event": "NJAN MALAYALI" }, { "event": "STORY NARRATION MLM" }, { "event": "GEO GIANT" }] }, { "id": "716", "name": "MUHAMMED HAFEEM", "chestNo": "716", "programs": [{ "event": "WA'Z" }, { "event": "READING HND" }, { "event": "MS PAINT" }, { "event": "TITLE MAKING" }, { "event": "QAWWALI URD" }] }, { "id": "719", "name": "SALMAN FARIS", "chestNo": "719", "programs": [{ "event": "HIFZ" }, { "event": "QIRA'TH" }, { "event": "AZAN" }, { "event": "SONG MLM" }, { "event": "POEM RECITATION MLM" }, { "event": "PENCIL DRAWING" }] }, { "id": "721", "name": "MUHAMMED SHIBIL", "chestNo": "721", "programs": [{ "event": "V" }] }, { "id": "722", "name": "SHAKIR FAIROOZ", "chestNo": "722", "programs": [{ "event": "READING URD" }, { "event": "CONVERSATION URD" }, { "event": "HAND WRITING ENGLISH" }, { "event": "JIGSAW PUZZLE" }] }, { "id": "731", "name": "MUHAMMED ABSAM", "chestNo": "731", "programs": [{ "event": "SONG MLM" }, { "event": "SPELLING BEE" }, { "event": "WORD FIGHT" }, { "event": "HAND WRITING HINDI" }] }, { "id": "732", "name": "MUHAMMED RAYYAN V V", "chestNo": "732", "programs": [{ "event": "CONVERSATION MLM" }, { "event": "HAND WRITING ENGLISH" }, { "event": "PENCIL DRAWING" }] }, { "id": "733", "name": "MUHAMMED IYAS", "chestNo": "733", "programs": [{ "event": "READING MLM" }, { "event": "GK QUIZ" }, { "event": "LETTTER WRITING MLM" }, { "event": "TITLE MAKING" }] }, { "id": "738", "name": "MUHAMMED HATHIM", "chestNo": "738", "programs": [{ "event": "SPEECH ENG" }, { "event": "CONVERSATION ENG" }, { "event": "MATHS TALENT" }, { "event": "STORY NARRATION ENG" }, { "event": "POEM WRITING ENG" }, { "event": "MS WORD" }, { "event": "TYPING MASTER" }, { "event": "VOCABULARY" }, { "event": "GEO GIANT" }] }
,{ "id": "501", "name": "MUHAMMED SHINAN", "chestNo": "501", "programs": [] }, { "id": "505", "name": "MOHAMMED ISMAIL", "chestNo": "505", "programs": [] }, { "id": "507", "name": "MUHAMMAD ASIF A.K", "chestNo": "507", "programs": [] }, { "id": "511", "name": "MUHAMMED SABITH", "chestNo": "511", "programs": [] }, { "id": "512", "name": "LUKHMAN P", "chestNo": "512", "programs": [] }, { "id": "517", "name": "ABIL SAID ABINAZ", "chestNo": "517", "programs": [] }, { "id": "520", "name": "HISHAM ABDULLA", "chestNo": "520", "programs": [] }, { "id": "521", "name": "MUHAMMED HABEEB M", "chestNo": "521", "programs": [] }, { "id": "522", "name": "YOUSUF M", "chestNo": "522", "programs": [] }, { "id": "525", "name": "MUHAMMED THANSEER", "chestNo": "525", "programs": [] }, { "id": "679", "name": "Muhammed Badusha. Ap", "chestNo": "679", "programs": [] }, { "id": "681", "name": "ADHIL KM", "chestNo": "681", "programs": [] }  
, {
    "id": "541",
    "name": "MUHAMMAD SALMAN FARIS T",
    "chestNo": "541",
    "programs": [
      { "event": "GK QUIZ" },
      { "event": "SCIENCE MASTER" },
      { "event": "ANCHORING" },
      { "event": "PHOTOGRAPHY" },
      { "event": "POSTER DESIGNING DIGITAL" },
      { "event": "CELL MASTER" },
      { "event": "WEB DESIGNING" }
    ]
  },
  {
    "id": "542",
    "name": "NAJIL NIHAL U",
    "chestNo": "542",
    "programs": [
      { "event": "GK QUIZ" },
      { "event": "SCIENCE MASTER" },
      { "event": "FACE TO FACE ENG" },
      { "event": "ESSAY URD" },
      { "event": "POEM WRITING URD" },
      { "event": "STORY WRITING MLM" }
    ]
  },
  {
    "id": "546",
    "name": "MUHAMMAD IYAS",
    "chestNo": "546",
    "programs": [
      { "event": "MASHUP" },
      { "event": "NASHEED" },
      { "event": "SPEECH & SONG ARB" }
    ]
  },
  {
    "id": "549",
    "name": "MOHAMMED DANISH M V",
    "chestNo": "549",
    "programs": [
      { "event": "ANNOUNCEMENT" },
      { "event": "JUST A MINUTE" },
      { "event": "ANCHORING" },
      { "event": "PHOTOGRAPHY" },
      { "event": "TWEETING" },
      { "event": "ESSAY MLM" },
      { "event": "POEM WRITING ENG" },
      { "event": "NEWS READING AND READING MLM" },
      { "event": "STORY WRITING URD" },
      { "event": "JUNCTION SPEECH MLM" },
      { "event": "C" },
      { "event": "PROOF READING URD" },
      { "event": "SLOGAN MAKING" }
    ]
  },
  {
    "id": "726",
    "name": "Muhammed Zibiyan. A",
    "chestNo": "726",
    "programs": [
      { "event": "HIFZ" },
      { "event": "SPEECH ENG" },
      { "event": "READING MLM" },
      { "event": "READING ARB" },
      { "event": "GK QUIZ" },
      { "event": "WORD FIGHT" },
      { "event": "POEM WRITING ARB" }
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
