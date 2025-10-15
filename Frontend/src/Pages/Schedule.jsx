import React, { useState, useEffect } from "react";
import { CalendarDays, Clock, MapPin, Timer, Sun, Moon } from "lucide-react";

const Schedule = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // 🌙 Dark mode toggle state
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

    const events = [
 
  {
    "id": 1,
    "name": "QIRA'TH",
    "date": "Oct 15, 2025",
    "time": "08:30 AM - 08:50 AM",
    "duration": "20 min",
    "venue": "Stage 1",
    "section": "Sub Junior"
  },
  {
    "id": 2,
    "name": "QIRA'TH",
    "date": "Oct 15, 2025",
    "time": "08:50 AM - 09:30 AM",
    "duration": "40 min",
    "venue": "Stage 1",
    "section": "Sub Junior"
  },
  {
    "id": 3,
    "name": "QIRA'TH",
    "date": "Oct 15, 2025",
    "time": "09:30 AM - 10:00 AM",
    "duration": "30 min",
    "venue": "Stage 1",
    "section": "Junior"
  },
  {
    "id": 4,
    "name": "WA'Z",
    "date": "Oct 16, 2025",
    "time": "07:30 AM - 07:50 AM",
    "duration": "20 min",
    "venue": "Stage 1",
    "section": "Super Senior"
  },
  {
    "id": 5,
    "name": "HISTORY TALK ENG",
    "date": "Oct 16, 2025",
    "time": "07:50 AM - 08:30 AM",
    "duration": "40 min",
    "venue": "Stage 1",
    "section": "Senior"
  },
  {
    "id": 6,
    "name": "SONG MLM",
    "date": "Oct 16, 2025",
    "time": "08:30 AM - 09:00 AM",
    "duration": "30 min",
    "venue": "Stage 1",
    "section": "Junior"
  },
  {
    "id": 7,
    "name": "FACE TO FACE ENG",
    "date": "Oct 16, 2025",
    "time": "09:00 AM - 09:40 AM",
    "duration": "40 min",
    "venue": "Stage 1",
    "section": "Senior"
  },
  {
    "id": 8,
    "name": "STORY NARRATION MLM",
    "date": "Oct 16, 2025",
    "time": "09:40 AM - 10:10 AM",
    "duration": "30 min",
    "venue": "Stage 1",
    "section": "Sub Junior"
  },
  {
    "id": 9,
    "name": "SPEECH ARB",
    "date": "Oct 16, 2025",
    "time": "10:10 AM - 10:40 AM",
    "duration": "30 min",
    "venue": "Stage 1",
    "section": "Sub Junior"
  },
  {
    "id": 10,
    "name": "POLITICAL SATIRE MLM",
    "date": "Oct 16, 2025",
    "time": "10:40 AM - 11:00 AM",
    "duration": "20 min",
    "venue": "Stage 1",
    "section": "Super Senior"
  },
  {
    "id": 11,
    "name": "NJAN MALAYALI",
    "date": "Oct 16, 2025",
    "time": "11:00 AM - 11:40 AM",
    "duration": "40 min",
    "venue": "Stage 1",
    "section": "Junior"
  },
  {
    "id": 12,
    "name": "EXTEMPORE SPEECH MLM",
    "date": "Oct 16, 2025",
    "time": "11:40 AM - 12:20 PM",
    "duration": "40 min",
    "venue": "Stage 1",
    "section": "Senior"
  },
  {
    "id": 13,
    "name": "KAVIYARANG",
    "date": "Oct 16, 2025",
    "time": "02:00 PM - 02:40 PM",
    "duration": "40 min",
    "venue": "Stage 1",
    "section": "Super Senior"
  },
  {
    "id": 14,
    "name": "KACHATABA TONGUE TWISTER",
    "date": "Oct 16, 2025",
    "time": "02:40 PM - 03:20 PM",
    "duration": "40 min",
    "venue": "Stage 1",
    "section": "Sub Junior"
  },
  {
    "id": 15,
    "name": "STORY NARRATION MLM",
    "date": "Oct 16, 2025",
    "time": "03:20 PM - 03:50 PM",
    "duration": "30 min",
    "venue": "Stage 1",
    "section": "Junior"
  },
  {
    "id": 16,
    "name": "SPEECH & SONG MLM",
    "date": "Oct 16, 2025",
    "time": "07:00 PM - 07:30 PM",
    "duration": "30 min",
    "venue": "Stage 1",
    "section": "Senior"
  },
  {
    "id": 17,
    "name": "SONG ARB",
    "date": "Oct 16, 2025",
    "time": "07:30 PM - 08:00 PM",
    "duration": "30 min",
    "venue": "Stage 1",
    "section": "Sub Junior"
  },
  {
    "id": 18,
    "name": "GAZAL",
    "date": "Oct 16, 2025",
    "time": "08:00 PM - 08:30 PM",
    "duration": "30 min",
    "venue": "Stage 1",
    "section": "Super Senior"
  },
  {
    "id": 19,
    "name": "SONG ENG",
    "date": "Oct 16, 2025",
    "time": "08:30 PM - 09:00 PM",
    "duration": "30 min",
    "venue": "Stage 1",
    "section": "Sub Junior"
  },
  {
    "id": 20,
    "name": "NASHEED",
    "date": "Oct 16, 2025",
    "time": "09:00 PM - 09:20 PM",
    "duration": "20 min",
    "venue": "Stage 1",
    "section": "Super Senior"
  },
  {
    "id": 21,
    "name": "POEM RECITATION MLM",
    "date": "Oct 16, 2025",
    "time": "10:00 AM - 10:40 AM",
    "duration": "40 min",
    "venue": "Stage 2",
    "section": "Junior"
  },
  {
    "id": 22,
    "name": "ANNOUNCEMENT",
    "date": "Oct 16, 2025",
    "time": "10:40 AM - 11:20 AM",
    "duration": "40 min",
    "venue": "Stage 2",
    "section": "Senior"
  },
  {
    "id": 23,
    "name": "CONVERSATION MLM",
    "date": "Oct 16, 2025",
    "time": "11:20 AM - 11:40 AM",
    "duration": "20 min",
    "venue": "Stage 2",
    "section": "Sub Junior"
  },
  {
    "id": 24,
    "name": "RAP SONG",
    "date": "Oct 16, 2025",
    "time": "02:00 PM - 02:40 PM",
    "duration": "40 min",
    "venue": "Stage 2",
    "section": "Senior"
  },
  {
    "id": 25,
    "name": "JUST A MINUTE",
    "date": "Oct 16, 2025",
    "time": "02:40 PM - 03:00 PM",
    "duration": "20 min",
    "venue": "Stage 2",
    "section": "Senior"
  },
  {
    "id": 26,
    "name": "CONVERSATION ENG",
    "date": "Oct 16, 2025",
    "time": "03:00 PM - 03:30 PM",
    "duration": "30 min",
    "venue": "Stage 2",
    "section": "Sub Junior"
  },
  {
    "id": 27,
    "name": "AZAN",
    "date": "Oct 16, 2025",
    "time": "07:30 AM - 08:00 AM",
    "duration": "30 min",
    "venue": "Stage 3",
    "section": "Junior"
  },
  {
    "id": 28,
    "name": "READING MLM",
    "date": "Oct 16, 2025",
    "time": "08:00 AM - 08:30 AM",
    "duration": "30 min",
    "venue": "Stage 3",
    "section": "Junior"
  },
  {
    "id": 29,
    "name": "READING ARB",
    "date": "Oct 16, 2025",
    "time": "08:30 AM - 09:00 AM",
    "duration": "30 min",
    "venue": "Stage 3",
    "section": "Junior"
  },
  {
    "id": 30,
    "name": "READING URD",
    "date": "Oct 16, 2025",
    "time": "09:00 AM - 09:30 AM",
    "duration": "30 min",
    "venue": "Stage 3",
    "section": "Junior"
  },
  {
    "id": 31,
    "name": "READING ENG",
    "date": "Oct 16, 2025",
    "time": "09:30 AM - 10:00 AM",
    "duration": "30 min",
    "venue": "Stage 3",
    "section": "Junior"
  },
  {
    "id": 32,
    "name": "READING HND",
    "date": "Oct 16, 2025",
    "time": "10:00 AM - 10:30 AM",
    "duration": "30 min",
    "venue": "Stage 3",
    "section": "Junior"
  },
  {
    "id": 33,
    "name": "ANCHORING",
    "date": "Oct 16, 2025",
    "time": "02:00 PM - 02:40 PM",
    "duration": "40 min",
    "venue": "Stage 3",
    "section": "Senior"
  },
  {
    "id": 34,
    "name": "FACE KITHAB",
    "date": "Oct 16, 2025",
    "time": "02:40 PM - 03:30 PM",
    "duration": "50 min",
    "venue": "Stage 3",
    "section": "Super Senior"
  },
  {
    "id": 35,
    "name": "COMMENTARY ARB",
    "date": "Oct 16, 2025",
    "time": "12:00 PM - 12:20 PM",
    "duration": "20 min",
    "venue": "Stage 4",
    "section": "Super Senior"
  },
  {
    "id": 36,
    "name": "SCIENCE MASTER",
    "date": "Oct 16, 2025",
    "time": "12:20 PM - 01:15 PM",
    "duration": "55 min",
    "venue": "Stage 4",
    "section": "Senior"
  },
  {
    "id": 37,
    "name": "COMMENTARY ENG",
    "date": "Oct 16, 2025",
    "time": "02:00 PM - 02:20 PM",
    "duration": "20 min",
    "venue": "Stage 4",
    "section": "Super Senior"
  },
  {
    "id": 38,
    "name": "GEO GIANT",
    "date": "Oct 16, 2025",
    "time": "02:20 PM - 02:50 PM",
    "duration": "30 min",
    "venue": "Stage 4",
    "section": "Senior"
  },
  {
    "id": 39,
    "name": "REACTION",
    "date": "Oct 16, 2025",
    "time": "02:50 PM - 03:30 PM",
    "duration": "40 min",
    "venue": "Stage 4",
    "section": "Super Senior"
  },
  {
    "id": 40,
    "name": "GK QUIZ",
    "date": "Oct 16, 2025",
    "time": "03:30 PM - 04:25 PM",
    "duration": "55 min",
    "venue": "Stage 4",
    "section": "Senior"
  },
  {
    "id": 41,
    "name": "TADRIS",
    "date": "Oct 16, 2025",
    "time": "07:15 PM - 08:20 PM",
    "duration": "1 hr 5 min",
    "venue": "Stage 4",
    "section": "Super Senior"
  },
  {
    "id": 42,
    "name": "SPEECH AND SONG ARB",
    "date": "Oct 17, 2025",
    "time": "07:30 AM - 08:00 AM",
    "duration": "30 min",
    "venue": "Stage 1",
    "section": "Super Senior"
  },
  {
    "id": 43,
    "name": "WA'Z",
    "date": "Oct 17, 2025",
    "time": "08:00 AM - 08:40 AM",
    "duration": "40 min",
    "venue": "Stage 1",
    "section": "Sub Junior"
  },
  {
    "id": 44,
    "name": "PADHYAPARAYANAM",
    "date": "Oct 17, 2025",
    "time": "08:40 AM - 09:10 AM",
    "duration": "30 min",
    "venue": "Stage 1",
    "section": "Sub Junior"
  },
  {
    "id": 45,
    "name": "SPEECH URD",
    "date": "Oct 17, 2025",
    "time": "09:10 AM - 09:40 AM",
    "duration": "30 min",
    "venue": "Stage 1",
    "section": "Junior"
  },
  {
    "id": 46,
    "name": "ANCHORING",
    "date": "Oct 17, 2025",
    "time": "09:40 AM - 10:00 AM",
    "duration": "20 min",
    "venue": "Stage 1",
    "section": "Super Senior"
  },
  {
    "id": 47,
    "name": "CONVERSATION URD",
    "date": "Oct 17, 2025",
    "time": "10:00 AM - 10:20 AM",
    "duration": "20 min",
    "venue": "Stage 1",
    "section": "Sub Junior"
  },
  {
    "id": 48,
    "name": "WA'Z",
    "date": "Oct 17, 2025",
    "time": "10:20 AM - 11:00 AM",
    "duration": "40 min",
    "venue": "Stage 1",
    "section": "Junior"
  },
  {
    "id": 49,
    "name": "HIFZ",
    "date": "Oct 17, 2025",
    "time": "07:00 PM - 07:40 PM",
    "duration": "40 min",
    "venue": "Stage 1",
    "section": "Sub Junior"
  },
  {
    "id": 50,
    "name": "SPEECH & SONG ARB",
    "date": "Oct 17, 2025",
    "time": "07:40 PM - 08:05 PM",
    "duration": "25 min",
    "venue": "Stage 1",
    "section": "Senior"
  },
  {
    "id": 51,
    "name": "MASHUP",
    "date": "Oct 17, 2025",
    "time": "08:05 PM - 08:30 PM",
    "duration": "25 min",
    "venue": "Stage 1",
    "section": "Sub Junior"
  },
  {
    "id": 52,
    "name": "SONG ARB",
    "date": "Oct 17, 2025",
    "time": "08:30 PM - 09:00 PM",
    "duration": "30 min",
    "venue": "Stage 1",
    "section": "Junior"
  },
  {
    "id": 53,
    "name": "SONG URD",
    "date": "Oct 17, 2025",
    "time": "09:00 PM - 09:40 PM",
    "duration": "40 min",
    "venue": "Stage 1",
    "section": "Senior"
  },
  {
    "id": 54,
    "name": "SONG ENG",
    "date": "Oct 17, 2025",
    "time": "07:30 AM - 08:10 AM",
    "duration": "40 min",
    "venue": "Stage 2",
    "section": "Senior"
  },
  {
    "id": 55,
    "name": "SONG ENG",
    "date": "Oct 17, 2025",
    "time": "08:10 AM - 08:40 AM",
    "duration": "30 min",
    "venue": "Stage 2",
    "section": "Junior"
  },
  {
    "id": 56,
    "name": "MALAPPATTU",
    "date": "Oct 17, 2025",
    "time": "08:40 AM - 09:00 AM",
    "duration": "20 min",
    "venue": "Stage 2",
    "section": "Super Senior"
  },
  {
    "id": 57,
    "name": "JUNCTION SPEECH MLM",
    "date": "Oct 17, 2025",
    "time": "09:00 AM - 09:40 AM",
    "duration": "40 min",
    "venue": "Stage 2",
    "section": "Senior"
  },
  {
    "id": 58,
    "name": "NJAN MALAYALI",
    "date": "Oct 17, 2025",
    "time": "09:40 AM - 10:20 AM",
    "duration": "40 min",
    "venue": "Stage 2",
    "section": "Sub Junior"
  },
  {
    "id": 59,
    "name": "FACE TO FACE ARB",
    "date": "Oct 17, 2025",
    "time": "10:20 AM - 11:00 AM",
    "duration": "40 min",
    "venue": "Stage 2",
    "section": "Senior"
  },
  {
    "id": 60,
    "name": "WORD FIGHT",
    "date": "Oct 17, 2025",
    "time": "07:30 AM - 08:25 AM",
    "duration": "55 min",
    "venue": "Stage 3",
    "section": "Sub Junior"
  },
  {
    "id": 61,
    "name": "SPEECH ARB",
    "date": "Oct 17, 2025",
    "time": "08:25 AM - 08:55 AM",
    "duration": "30 min",
    "venue": "Stage 3",
    "section": "Junior"
  },
  {
    "id": 62,
    "name": "MULAFAZA",
    "date": "Oct 17, 2025",
    "time": "08:55 AM - 09:50 AM",
    "duration": "55 min",
    "venue": "Stage 3",
    "section": "Sub Junior"
  },
  {
    "id": 63,
    "name": "CONVERSATION MLM",
    "date": "Oct 17, 2025",
    "time": "09:50 AM - 10:05 AM",
    "duration": "15 min",
    "venue": "Stage 3",
    "section": "Junior"
  },
  {
    "id": 64,
    "name": "CONVERSATION ENG",
    "date": "Oct 17, 2025",
    "time": "10:05 AM - 10:20 AM",
    "duration": "15 min",
    "venue": "Stage 3",
    "section": "Junior"
  },
  {
    "id": 65,
    "name": "CONVERSATION URD",
    "date": "Oct 17, 2025",
    "time": "10:20 AM - 10:35 AM",
    "duration": "15 min",
    "venue": "Stage 3",
    "section": "Junior"
  },
  {
    "id": 66,
    "name": "CONVERSATION ARB",
    "date": "Oct 17, 2025",
    "time": "10:35 AM - 10:50 AM",
    "duration": "15 min",
    "venue": "Stage 3",
    "section": "Junior"
  },
  {
    "id": 67,
    "name": "PROJECT PRESENTATION ENG",
    "date": "Oct 17, 2025",
    "time": "12:00 AM - 12:40 AM",
    "duration": "40 min",
    "venue": "Stage 4",
    "section": "Super Senior"
  },
  {
    "id": 68,
    "name": "GK QUIZ",
    "date": "Oct 17, 2025",
    "time": "12:40 AM - 01:35 AM",
    "duration": "55 min",
    "venue": "Stage 4",
    "section": "Sub Junior"
  },
  {
    "id": 69,
    "name": "SWARF IQ",
    "date": "Oct 17, 2025",
    "time": "02:00 PM - 03:05 PM",
    "duration": "1 hr 5 min",
    "venue": "Stage 4",
    "section": "Senior"
  },
  {
    "id": 70,
    "name": "MULTILINGUAL QUIZ",
    "date": "Oct 17, 2025",
    "time": "03:05 PM - 04:00 PM",
    "duration": "55 min",
    "venue": "Stage 4",
    "section": "Senior"
  },
  {
    "id": 71,
    "name": "HIFZ & QIRA'ATH",
    "date": "Oct 18, 2025",
    "time": "07:30 AM - 08:35 AM",
    "duration": "1 hr 5 min",
    "venue": "Stage 1",
    "section": "Senior"
  },
  {
    "id": 72,
    "name": "SIYASI THAQREER URD",
    "date": "Oct 18, 2025",
    "time": "08:35 AM - 09:15 AM",
    "duration": "40 min",
    "venue": "Stage 1",
    "section": "Super Senior"
  },
  {
    "id": 73,
    "name": "SPEECH AND SONG MLM",
    "date": "Oct 18, 2025",
    "time": "09:15 AM - 09:40 AM",
    "duration": "25 min",
    "venue": "Stage 1",
    "section": "Sub Junior"
  },
  {
    "id": 74,
    "name": "SPEECH MLM",
    "date": "Oct 18, 2025",
    "time": "09:40 AM - 10:10 AM",
    "duration": "30 min",
    "venue": "Stage 1",
    "section": "Junior"
  },
  {
    "id": 75,
    "name": "WA'Z",
    "date": "Oct 18, 2025",
    "time": "10:10 AM - 10:50 AM",
    "duration": "40 min",
    "venue": "Stage 1",
    "section": "Senior"
  },
  {
    "id": 76,
    "name": "GROUP DISCUSSION",
    "date": "Oct 18, 2025",
    "time": "10:50 AM - 11:40 AM",
    "duration": "50 min",
    "venue": "Stage 1",
    "section": "Super Senior"
  },
  {
    "id": 77,
    "name": "INSPIRING TALK ENG",
    "date": "Oct 18, 2025",
    "time": "11:40 AM - 12:20 PM",
    "duration": "40 min",
    "venue": "Stage 1",
    "section": "Senior"
  },
  {
    "id": 78,
    "name": "MAPPILAPPATT",
    "date": "Oct 18, 2025",
    "time": "12:20 PM - 12:40 PM",
    "duration": "20 min",
    "venue": "Stage 1",
    "section": "Super Senior"
  },
  {
    "id": 79,
    "name": "SPEECH AND SONG MLM",
    "date": "Oct 18, 2025",
    "time": "12:40 PM - 01:00 PM",
    "duration": "20 min",
    "venue": "Stage 1",
    "section": "Junior"
  },
  {
    "id": 80,
    "name": "MULTHAQAL AL ADYAN",
    "date": "Oct 18, 2025",
    "time": "02:00 PM - 03:05 PM",
    "duration": "1 hr 5 min",
    "venue": "Stage 1",
    "section": "Unknown"
  },
  {
    "id": 81,
    "name": "SPEECH ENG",
    "date": "Oct 18, 2025",
    "time": "03:05 PM - 03:35 PM",
    "duration": "30 min",
    "venue": "Stage 1",
    "section": "Sub Junior"
  },
  {
    "id": 82,
    "name": "SONG URD",
    "date": "Oct 18, 2025",
    "time": "03:35 PM - 04:05 PM",
    "duration": "30 min",
    "venue": "Stage 1",
    "section": "Junior"
  },
  {
    "id": 83,
    "name": "HIFZ",
    "date": "Oct 18, 2025",
    "time": "07:00 PM - 07:40 PM",
    "duration": "40 min",
    "venue": "Stage 1",
    "section": "Sub Junior"
  },
  {
    "id": 84,
    "name": "SUFI SAMA",
    "date": "Oct 18, 2025",
    "time": "07:40 PM - 08:30 PM",
    "duration": "50 min",
    "venue": "Stage 1",
    "section": "Unknown"
  },
  {
    "id": 85,
    "name": "MASHUP",
    "date": "Oct 18, 2025",
    "time": "08:30 PM - 08:55 PM",
    "duration": "25 min",
    "venue": "Stage 1",
    "section": "Senior"
  },
  {
    "id": 86,
    "name": "THEME PRESENTATION",
    "date": "Oct 18, 2025",
    "time": "08:55 PM - 10:00 PM",
    "duration": "1 hr 5 min",
    "venue": "Stage 1",
    "section": "Unknown"
  },
  {
    "id": 87,
    "name": "SPEECH ENG",
    "date": "Oct 18, 2025",
    "time": "07:30 AM - 08:00 AM",
    "duration": "30 min",
    "venue": "Stage 2",
    "section": "Junior"
  },
  {
    "id": 88,
    "name": "PICK AND TALK MLM",
    "date": "Oct 18, 2025",
    "time": "08:00 AM - 08:30 AM",
    "duration": "30 min",
    "venue": "Stage 2",
    "section": "Sub Junior"
  },
  {
    "id": 89,
    "name": "MULAFAZA",
    "date": "Oct 18, 2025",
    "time": "08:30 AM - 09:20 AM",
    "duration": "50 min",
    "venue": "Stage 2",
    "section": "Senior"
  },
  {
    "id": 90,
    "name": "PADHYAPARAYANAM",
    "date": "Oct 18, 2025",
    "time": "09:20 AM - 10:00 AM",
    "duration": "40 min",
    "venue": "Stage 2",
    "section": "Senior"
  },
  {
    "id": 91,
    "name": "NEWS WRITING AND READING ENG",
    "date": "Oct 18, 2025",
    "time": "10:00 AM - 10:40 AM",
    "duration": "40 min",
    "venue": "Stage 2",
    "section": "Senior"
  },
  {
    "id": 92,
    "name": "NEWS WRITING AND READING ARB",
    "date": "Oct 18, 2025",
    "time": "10:40 AM - 11:20 AM",
    "duration": "40 min",
    "venue": "Stage 2",
    "section": "Senior"
  },
  {
    "id": 93,
    "name": "NEWS WRITING AND READING MLM",
    "date": "Oct 18, 2025",
    "time": "11:20 AM - 12:00 PM",
    "duration": "40 min",
    "venue": "Stage 2",
    "section": "Senior"
  },
  {
    "id": 94,
    "name": "TOUNG TWISTER",
    "date": "Oct 18, 2025",
    "time": "12:00 PM - 12:30 PM",
    "duration": "30 min",
    "venue": "Stage 2",
    "section": "Senior"
  },
  {
    "id": 95,
    "name": "ACADEMIC TALK ENG",
    "date": "Oct 18, 2025",
    "time": "12:30 PM - 12:50 PM",
    "duration": "20 min",
    "venue": "Stage 2",
    "section": "Super Senior"
  },
  {
    "id": 96,
    "name": "STORY NARRATION ENG",
    "date": "Oct 18, 2025",
    "time": "12:50 PM - 01:20 PM",
    "duration": "30 min",
    "venue": "Stage 2",
    "section": "Sub Junior"
  },
  {
    "id": 97,
    "name": "RAP SONG",
    "date": "Oct 18, 2025",
    "time": "02:00 PM - 02:30 PM",
    "duration": "30 min",
    "venue": "Stage 2",
    "section": "Sub Junior"
  },
  {
    "id": 98,
    "name": "LIVE TRANSLATION ENG",
    "date": "Oct 18, 2025",
    "time": "02:30 PM - 03:20 PM",
    "duration": "50 min",
    "venue": "Stage 2",
    "section": "Senior"
  },
  {
    "id": 99,
    "name": "SPEECH MLM",
    "date": "Oct 18, 2025",
    "time": "03:20 PM - 03:50 PM",
    "duration": "30 min",
    "venue": "Stage 2",
    "section": "Sub Junior"
  },
  {
    "id": 100,
    "name": "KHUTHUBA",
    "date": "Oct 18, 2025",
    "time": "07:30 AM - 08:25 AM",
    "duration": "55 min",
    "venue": "Stage 3",
    "section": "Super Senior"
  },
  {
    "id": 101,
    "name": "NEWS WRITING AND READING ARB",
    "date": "Oct 18, 2025",
    "time": "08:25 AM - 08:45 AM",
    "duration": "20 min",
    "venue": "Stage 3",
    "section": "Super Senior"
  },
  {
    "id": 102,
    "name": "NEWS WRITING AND READING ENG",
    "date": "Oct 18, 2025",
    "time": "08:45 AM - 09:05 AM",
    "duration": "20 min",
    "venue": "Stage 3",
    "section": "Super Senior"
  },
  {
    "id": 103,
    "name": "NEWS WRITING AND READING URD",
    "date": "Oct 18, 2025",
    "time": "09:05 AM - 09:25 AM",
    "duration": "20 min",
    "venue": "Stage 3",
    "section": "Super Senior"
  },
  {
    "id": 104,
    "name": "NEWS WRITING AND READING MLM",
    "date": "Oct 18, 2025",
    "time": "09:25 AM - 09:45 AM",
    "duration": "20 min",
    "venue": "Stage 3",
    "section": "Super Senior"
  },
  {
    "id": 105,
    "name": "SPEECH URD",
    "date": "Oct 18, 2025",
    "time": "09:45 AM - 10:15 AM",
    "duration": "30 min",
    "venue": "Stage 3",
    "section": "Sub Junior"
  },
  {
    "id": 106,
    "name": "WORD FIGHT",
    "date": "Oct 18, 2025",
    "time": "10:15 AM - 11:20 AM",
    "duration": "1 hr 5 min",
    "venue": "Stage 3",
    "section": "Junior"
  },
  {
    "id": 107,
    "name": "MOCK INTERVIEW ENG",
    "date": "Oct 18, 2025",
    "time": "11:20 AM - 12:00 PM",
    "duration": "40 min",
    "venue": "Stage 3",
    "section": "Super Senior"
  },
  {
    "id": 108,
    "name": "PROUD MUSLIM",
    "date": "Oct 18, 2025",
    "time": "12:00 PM - 12:50 PM",
    "duration": "50 min",
    "venue": "Stage 3",
    "section": "Super Senior"
  },
  {
    "id": 109,
    "name": "TEACHING MLM",
    "date": "Oct 18, 2025",
    "time": "07:30 AM - 08:35 AM",
    "duration": "1 hr 5 min",
    "venue": "Stage 4",
    "section": "Senior"
  },
  {
    "id": 110,
    "name": "SPELLING BEE",
    "date": "Oct 18, 2025",
    "time": "10:00 AM - 10:55 AM",
    "duration": "55 min",
    "venue": "Stage 4",
    "section": "Senior"
  },
  {
    "id": 111,
    "name": "GK QUIZ",
    "date": "Oct 18, 2025",
    "time": "10:55 AM - 11:45 AM",
    "duration": "50 min",
    "venue": "Stage 4",
    "section": "Junior"
  },
  {
    "id": 112,
    "name": "PHOTOGRAPHY",
    "date": "Oct 18, 2025",
    "time": "11:45 AM - 12:50 PM",
    "duration": "1 hr 5 min",
    "venue": "Stage 4",
    "section": "Senior"
  },
  {
    "id": 113,
    "name": "ADVENTURE PHOTOGRAPHY",
    "date": "Oct 18, 2025",
    "time": "11:45 AM - 12:50 PM",
    "duration": "1 hr 5 min",
    "venue": "Stage 4",
    "section": "Super Senior"
  },
  {
    "id": 114,
    "name": "NASHEED",
    "date": "Oct 19, 2025",
    "time": "07:30 AM - 08:10 AM",
    "duration": "40 min",
    "venue": "Stage 1",
    "section": "Senior"
  },
  {
    "id": 115,
    "name": "GROUP SONG",
    "date": "Oct 19, 2025",
    "time": "08:10 AM - 08:30 AM",
    "duration": "20 min",
    "venue": "Stage 1",
    "section": "Junior"
  },
  {
    "id": 116,
    "name": "MASHUP",
    "date": "Oct 19, 2025",
    "time": "08:30 AM - 08:55 AM",
    "duration": "25 min",
    "venue": "Stage 1",
    "section": "Super Senior"
  },
  {
    "id": 117,
    "name": "STORY NARRATION ENG",
    "date": "Oct 19, 2025",
    "time": "08:55 AM - 09:25 AM",
    "duration": "30 min",
    "venue": "Stage 1",
    "section": "Junior"
  },
  {
    "id": 118,
    "name": "THA'LEEMU SUNNA",
    "date": "Oct 19, 2025",
    "time": "09:25 AM - 10:30 AM",
    "duration": "1 hr 5 min",
    "venue": "Stage 1",
    "section": "Unknown"
  },
  {
    "id": 119,
    "name": "FACE TO FACE ARB",
    "date": "Oct 19, 2025",
    "time": "10:30 AM - 10:50 AM",
    "duration": "20 min",
    "venue": "Stage 1",
    "section": "Super Senior"
  },
  {
    "id": 120,
    "name": "ANNOUNCEMENT",
    "date": "Oct 19, 2025",
    "time": "10:50 AM - 11:30 AM",
    "duration": "40 min",
    "venue": "Stage 1",
    "section": "Super Senior"
  },
  {
    "id": 121,
    "name": "EXTEMPORE SPEECH MLM",
    "date": "Oct 19, 2025",
    "time": "11:30 AM - 12:10 PM",
    "duration": "40 min",
    "venue": "Stage 1",
    "section": "Super Senior"
  },
  {
    "id": 122,
    "name": "FACE TO FACE ENG",
    "date": "Oct 19, 2025",
    "time": "12:10 PM - 12:30 PM",
    "duration": "20 min",
    "venue": "Stage 1",
    "section": "Super Senior"
  },
  {
    "id": 123,
    "name": "MUSHA'RA",
    "date": "Oct 19, 2025",
    "time": "07:00 PM - 08:20 PM",
    "duration": "1 hr 20 min",
    "venue": "Stage 1",
    "section": "Unknown"
  },
  {
    "id": 124,
    "name": "PADAPPATTU",
    "date": "Oct 19, 2025",
    "time": "08:20 PM - 09:00 PM",
    "duration": "40 min",
    "venue": "Stage 1",
    "section": "Senior"
  },
  {
    "id": 125,
    "name": "SONG MLM",
    "date": "Oct 19, 2025",
    "time": "09:00 PM - 09:30 PM",
    "duration": "30 min",
    "venue": "Stage 1",
    "section": "Sub Junior"
  },
  {
    "id": 126,
    "name": "QAWWALI URD",
    "date": "Oct 19, 2025",
    "time": "09:30 PM - 10:10 PM",
    "duration": "40 min",
    "venue": "Stage 1",
    "section": "Unknown"
  },
  {
    "id": 127,
    "name": "SONG URDU",
    "date": "Oct 19, 2025",
    "time": "08:30 AM - 09:00 AM",
    "duration": "30 min",
    "venue": "Stage 2",
    "section": "Sub Junior"
  },
  {
    "id": 128,
    "name": "MUNAZARA",
    "date": "Oct 19, 2025",
    "time": "09:00 AM - 10:05 AM",
    "duration": "1 hr 5 min",
    "venue": "Stage 2",
    "section": "Unknown"
  },
  {
    "id": 129,
    "name": "SPEECH URD",
    "date": "Oct 19, 2025",
    "time": "10:05 AM - 10:45 AM",
    "duration": "40 min",
    "venue": "Stage 2",
    "section": "Senior"
  },
  {
    "id": 130,
    "name": "REVERSE QUIZ",
    "date": "Oct 19, 2025",
    "time": "10:45 AM - 11:40 AM",
    "duration": "55 min",
    "venue": "Stage 2",
    "section": "Super Senior"
  },
  {
    "id": 131,
    "name": "CONVERSATION ARB",
    "date": "Oct 19, 2025",
    "time": "11:40 AM - 12:00 PM",
    "duration": "20 min",
    "venue": "Stage 2",
    "section": "Sub Junior"
  },
  {
    "id": 132,
    "name": "GROUP SONG",
    "date": "Oct 19, 2025",
    "time": "12:00 PM - 12:30 PM",
    "duration": "30 min",
    "venue": "Stage 2",
    "section": "Sub Junior"
  },
  {
    "id": 133,
    "name": "SPEECH ARB",
    "date": "Oct 19, 2025",
    "time": "12:30 PM - 01:10 PM",
    "duration": "40 min",
    "venue": "Stage 2",
    "section": "Senior"
  },
  {
    "id": 134,
    "name": "DEBATE ENG",
    "date": "Oct 19, 2025",
    "time": "07:30 AM - 08:25 AM",
    "duration": "55 min",
    "venue": "Stage 3",
    "section": "Unknown"
  },
  {
    "id": 135,
    "name": "COURT",
    "date": "Oct 19, 2025",
    "time": "08:25 AM - 09:30 AM",
    "duration": "1 hr 5 min",
    "venue": "Stage 3",
    "section": "Unknown"
  },
  {
    "id": 136,
    "name": "MULAFAZA",
    "date": "Oct 19, 2025",
    "time": "09:30 AM - 10:25 AM",
    "duration": "55 min",
    "venue": "Stage 3",
    "section": "Junior"
  },
  {
    "id": 137,
    "name": "FATWA COUNCIL",
    "date": "Oct 19, 2025",
    "time": "10:25 AM - 11:30 AM",
    "duration": "1 hr 5 min",
    "venue": "Stage 3",
    "section": "Unknown"
  },
  {
    "id": 138,
    "name": "MATHS TALENT",
    "date": "Oct 19, 2025",
    "time": "09:30 AM - 10:25 AM",
    "duration": "55 min",
    "venue": "Stage 4",
    "section": "Junior"
  },
  {
    "id": 139,
    "name": "MATH TALENT",
    "date": "Oct 19, 2025",
    "time": "10:25 AM - 11:20 AM",
    "duration": "55 min",
    "venue": "Stage 4",
    "section": "Senior"
  },
  {
    "id": 140,
    "name": "CAMPUS IQ",
    "date": "Oct 19, 2025",
    "time": "11:20 AM - 12:15 PM",
    "duration": "55 min",
    "venue": "Stage 4",
    "section": "Super Senior"
  },
  {
    "id": 141,
    "name": "MATH'S TALENT",
    "date": "Oct 19, 2025",
    "time": "12:15 PM - 01:10 PM",
    "duration": "55 min",
    "venue": "Stage 4",
    "section": "Sub Junior"
  }

  ];

  // Filter by search
  const filteredEvents = events.filter((event) => {
    const term = searchTerm.toLowerCase();
    return (
      event.name.toLowerCase().includes(term) ||
      event.venue.toLowerCase().includes(term) ||
      event.section.toLowerCase().includes(term)
    );
  });

  return (
    <section className="min-h-screen bg-[#fffaf5] text-gray-900 px-4 py-10 transition-colors duration-500 dark:bg-gray-900 dark:text-gray-100">
      <div className="max-w-6xl mx-auto relative">
        {/* 🌗 Dark/Light Mode Toggle */}
        <div className="absolute top-0 right-0">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center space-x-2 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-2 rounded-full"
          > 
            <span className="text-sm font-medium hidden sm:inline">
           
            </span>
          </button>
        </div>

        {/* Header */}
        <h1 className="text-4xl font-extrabold mb-2 text-center">📅 Event Schedule</h1>
        <p className="text-center mb-8 text-gray-600 dark:text-gray-300">
          Find the full list of events, their times, and where they'll take place.
        </p>

        {/* Search */}
        <div className="max-w-md mx-auto mb-10">
          <input
            type="text"
            placeholder="Search events..."
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700"
              >
                {/* Header Row */}
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-lg font-bold">{event.name}</h2>
                  <span className="bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded">
                    {event.section}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-500 dark:text-gray-300 text-sm mb-4">
                   Withr_2k25
                </p>

                {/* Date & Time */}
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-gray-300 mb-3">
                  <div className="flex items-center bg-gray-100 dark:bg-gray-700 px-3 py-1.5 rounded-md">
                    <CalendarDays size={16} className="mr-2 text-orange-500" />
                    {event.date}
                  </div>
                  <div className="flex items-center bg-gray-100 dark:bg-gray-700 px-3 py-1.5 rounded-md">
                    <Clock size={16} className="mr-2 text-orange-500" />
                    {event.time}
                  </div>
                </div>

                {/* Venue + Duration */}
                <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2 text-orange-500" />
                    {event.venue}
                  </div>
                  <div className="flex items-center">
                    <Timer size={16} className="mr-1 text-orange-500" />
                    {event.duration}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 dark:text-gray-300">
              No events found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
