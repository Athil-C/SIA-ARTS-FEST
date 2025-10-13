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
    "name": "WA'Z",
    "date": "Oct 16, 2025",
    "time": "07:30 AM - 07:50 AM",
    "duration": "20 min",
    "venue": "Stage 1",
    "section": "Super Senior"
  },
  {
    "id": 2,
    "name": "AZAN",
    "date": "Oct 16, 2025",
    "time": "07:30 AM - 08:00 AM",
    "duration": "30 min",
    "venue": "Stage 3",
    "section": "Sub Junior"
  },
  {
    "id": 3,
    "name": "HISTORY TALK ENG",
    "date": "Oct 16, 2025",
    "time": "07:50 AM - 08:30 AM",
    "duration": "40 min",
    "venue": "Stage 1",
    "section": "Senior"
  },
  {
    "id": 4,
    "name": "READING MLM",
    "date": "Oct 16, 2025",
    "time": "08:00 AM - 08:30 AM",
    "duration": "30 min",
    "venue": "Stage 3",
    "section": "Sub Junior"
  },
  {
    "id": 5,
    "name": "SONG MLM",
    "date": "Oct 16, 2025",
    "time": "08:30 AM - 09:00 AM",
    "duration": "30 min",
    "venue": "Stage 1",
    "section": "Sub Junior"
  },
  {
    "id": 6,
    "name": "READING ARB",
    "date": "Oct 16, 2025",
    "time": "08:30 AM - 09:00 AM",
    "duration": "30 min",
    "venue": "Stage 3",
    "section": "Sub Junior"
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
    "name": "READING URD",
    "date": "Oct 16, 2025",
    "time": "09:00 AM - 09:30 AM",
    "duration": "30 min",
    "venue": "Stage 3",
    "section": "Sub Junior"
  },
  {
    "id": 9,
    "name": "READING ENG",
    "date": "Oct 16, 2025",
    "time": "09:30 AM - 10:00 AM",
    "duration": "30 min",
    "venue": "Stage 3",
    "section": "Sub Junior"
  },
  {
    "id": 10,
    "name": "STORY NARRATION MLM",
    "date": "Oct 16, 2025",
    "time": "09:40 AM - 10:10 AM",
    "duration": "30 min",
    "venue": "Stage 1",
    "section": "Junior"
  },
  {
    "id": 11,
    "name": "POEM RECITATION MLM",
    "date": "Oct 16, 2025",
    "time": "10:00 AM - 10:40 AM",
    "duration": "40 min",
    "venue": "Stage 2",
    "section": "Sub Junior"
  },
  {
    "id": 12,
    "name": "READING HND",
    "date": "Oct 16, 2025",
    "time": "10:00 AM - 10:30 AM",
    "duration": "30 min",
    "venue": "Stage 3",
    "section": "Sub Junior"
  },
  {
    "id": 13,
    "name": "SPEECH ARB",
    "date": "Oct 16, 2025",
    "time": "10:10 AM - 10:40 AM",
    "duration": "30 min",
    "venue": "Stage 1",
    "section": "Junior"
  },
  {
    "id": 14,
    "name": "POLITICAL SATIRE MLM",
    "date": "Oct 16, 2025",
    "time": "10:40 AM - 11:00 AM",
    "duration": "20 min",
    "venue": "Stage 1",
    "section": "Super Senior"
  },
  {
    "id": 15,
    "name": "ANNOUNCEMENT",
    "date": "Oct 16, 2025",
    "time": "10:40 AM - 11:20 AM",
    "duration": "40 min",
    "venue": "Stage 2",
    "section": "Senior"
  },
  {
    "id": 16,
    "name": "NIAN MALAYALI",
    "date": "Oct 16, 2025",
    "time": "11:00 AM - 11:40 AM",
    "duration": "40 min",
    "venue": "Stage 1",
    "section": "Sub Junior"
  },
  {
    "id": 17,
    "name": "CONVERSATION MLM",
    "date": "Oct 16, 2025",
    "time": "11:20 AM - 11:40 AM",
    "duration": "20 min",
    "venue": "Stage 2",
    "section": "Junior"
  },
  {
    "id": 18,
    "name": "EXTEMPORE SPEECH MLM",
    "date": "Oct 16, 2025",
    "time": "11:40 AM - 12:20 PM",
    "duration": "40 min",
    "venue": "Stage 1",
    "section": "Senior"
  },
  {
    "id": 19,
    "name": "COMMENTARY ARB",
    "date": "Oct 16, 2025",
    "time": "12:00 PM - 12:20 PM",
    "duration": "20 min",
    "venue": "Stage 4",
    "section": "Super Senior"
  },
  {
    "id": 20,
    "name": "SCIENCE MASTER",
    "date": "Oct 16, 2025",
    "time": "12:20 PM - 01:15 PM",
    "duration": "55 min",
    "venue": "Stage 4",
    "section": "Senior"
  },
  {
    "id": 21,
    "name": "KAVIYARANG",
    "date": "Oct 16, 2025",
    "time": "02:00 PM - 02:40 PM",
    "duration": "40 min",
    "venue": "Stage 1",
    "section": "Super Senior"
  },
  {
    "id": 22,
    "name": "RAP SONG",
    "date": "Oct 16, 2025",
    "time": "02:00 PM - 02:40 PM",
    "duration": "40 min",
    "venue": "Stage 2",
    "section": "Senior"
  },
  {
    "id": 23,
    "name": "ANCHORING",
    "date": "Oct 16, 2025",
    "time": "02:00 PM - 02:40 PM",
    "duration": "40 min",
    "venue": "Stage 3",
    "section": "Senior"
  },
  {
    "id": 24,
    "name": "COMMENTARY ENG",
    "date": "Oct 16, 2025",
    "time": "02:00 PM - 02:20 PM",
    "duration": "20 min",
    "venue": "Stage 4",
    "section": "Super Senior"
  },
  {
    "id": 25,
    "name": "GEO GIANT",
    "date": "Oct 16, 2025",
    "time": "02:20 PM - 02:50 PM",
    "duration": "30 min",
    "venue": "Stage 4",
    "section": "Senior"
  },
  {
    "id": 26,
    "name": "KACHATABA TONGUE TWISTER",
    "date": "Oct 16, 2025",
    "time": "02:40 PM - 03:20 PM",
    "duration": "40 min",
    "venue": "Stage 1",
    "section": "Junior"
  },
  {
    "id": 27,
    "name": "FACE KITHAB",
    "date": "Oct 16, 2025",
    "time": "02:40 PM - 03:30 PM",
    "duration": "50 min",
    "venue": "Stage 3",
    "section": "Super Senior"
  },
  {
    "id": 28,
    "name": "REACTION",
    "date": "Oct 16, 2025",
    "time": "02:50 PM - 03:30 PM",
    "duration": "40 min",
    "venue": "Stage 4",
    "section": "Super Senior"
  },
  {
    "id": 29,
    "name": "JUST A MINUTE",
    "date": "Oct 16, 2025",
    "time": "03:00 PM - 03:30 PM",
    "duration": "30 min",
    "venue": "Stage 2",
    "section": "Senior"
  },
  {
    "id": 30,
    "name": "STORY NARRATION MLM",
    "date": "Oct 16, 2025",
    "time": "03:20 PM - 03:50 PM",
    "duration": "30 min",
    "venue": "Stage 1",
    "section": "Sub Junior"
  },
  {
    "id": 31,
    "name": "CONVERSATION ENG",
    "date": "Oct 16, 2025",
    "time": "03:30 PM - 03:50 PM",
    "duration": "20 min",
    "venue": "Stage 2",
    "section": "Junior"
  },
  {
    "id": 32,
    "name": "GK QUIZ",
    "date": "Oct 16, 2025",
    "time": "03:30 PM - 04:25 PM",
    "duration": "55 min",
    "venue": "Stage 4",
    "section": "Senior"
  },
  {
    "id": 33,
    "name": "SPEECH & SONG MLM",
    "date": "Oct 16, 2025",
    "time": "07:00 PM - 07:30 PM",
    "duration": "30 min",
    "venue": "Stage 1",
    "section": "Senior"
  },
  {
    "id": 34,
    "name": "TADRIS",
    "date": "Oct 16, 2025",
    "time": "07:15 PM - 08:20 PM",
    "duration": "65 min",
    "venue": "Stage 4",
    "section": "Super Senior"
  },
  {
    "id": 35,
    "name": "SONG ARB",
    "date": "Oct 16, 2025",
    "time": "07:30 PM - 08:00 PM",
    "duration": "30 min",
    "venue": "Stage 1",
    "section": "Junior"
  },
  {
    "id": 36,
    "name": "GAZAL",
    "date": "Oct 16, 2025",
    "time": "08:00 PM - 08:30 PM",
    "duration": "30 min",
    "venue": "Stage 1",
    "section": "Super Senior"
  },
  {
    "id": 37,
    "name": "SONG ENG",
    "date": "Oct 17, 2025",
    "time": "08:30 PM - 09:00 PM",
    "duration": "30 min",
    "venue": "Stage 1",
    "section": "Junior"
  },
  {
    "id": 38,
    "name": "NASHEED",
    "date": "Oct 17, 2025",
    "time": "09:00 PM - 09:20 PM",
    "duration": "20 min",
    "venue": "Stage 1",
    "section": "Super Senior"
  },
  {
    "id": 39,
    "name": "SPEECH AND SONG ARB",
    "date": "Oct 17, 2025",
    "time": "07:30 AM - 08:00 AM",
    "duration": "30 min",
    "venue": "Stage 1",
    "section": "Super Senior"
  },
  {
    "id": 40,
    "name": "SONG ENG",
    "date": "Oct 17, 2025",
    "time": "07:30 AM - 08:10 AM",
    "duration": "40 min",
    "venue": "Stage 2",
    "section": "Senior"
  },
  {
    "id": 41,
    "name": "WORD FIGHT",
    "date": "Oct 17, 2025",
    "time": "07:30 AM - 08:25 AM",
    "duration": "55 min",
    "venue": "Stage 3",
    "section": "Junior"
  },
  {
    "id": 42,
    "name": "WA'Z",
    "date": "Oct 17, 2025",
    "time": "08:00 AM - 08:40 AM",
    "duration": "40 min",
    "venue": "Stage 1",
    "section": "Junior"
  },
  {
    "id": 43,
    "name": "SONG ENG",
    "date": "Oct 17, 2025",
    "time": "08:10 AM - 08:40 AM",
    "duration": "30 min",
    "venue": "Stage 2",
    "section": "Sub Junior"
  },
  {
    "id": 44,
    "name": "SPEECH ARB",
    "date": "Oct 17, 2025",
    "time": "08:25 AM - 08:55 AM",
    "duration": "30 min",
    "venue": "Stage 3",
    "section": "Sub Junior"
  },
  {
    "id": 45,
    "name": "PADHYAPARAYANAM",
    "date": "Oct 17, 2025",
    "time": "08:40 AM - 09:10 AM",
    "duration": "30 min",
    "venue": "Stage 1",
    "section": "Sub Junior"
  },
  {
    "id": 46,
    "name": "MALAPPATTU",
    "date": "Oct 17, 2025",
    "time": "08:40 AM - 09:00 AM",
    "duration": "20 min",
    "venue": "Stage 2",
    "section": "Super Senior"
  },
  {
    "id": 47,
    "name": "MULFAZA",
    "date": "Oct 17, 2025",
    "time": "08:55 AM - 09:50 AM",
    "duration": "55 min",
    "venue": "Stage 3",
    "section": "Junior"
  },
  {
    "id": 48,
    "name": "JUNCTION SPEECH MLM",
    "date": "Oct 17, 2025",
    "time": "09:00 AM - 09:40 AM",
    "duration": "40 min",
    "venue": "Stage 2",
    "section": "Senior"
  },
  {
    "id": 49,
    "name": "SPEECH URD",
    "date": "Oct 17, 2025",
    "time": "09:10 AM - 09:40 AM",
    "duration": "30 min",
    "venue": "Stage 1",
    "section": "Sub Junior"
  },
  {
    "id": 50,
    "name": "PHOTOGRAPHY",
    "date": "Oct 17, 2025",
    "time": "09:30 AM - 10:35 AM",
    "duration": "65 min",
    "venue": "Stage 4",
    "section": "Senior"
  },
  {
    "id": 51,
    "name": "ANCHORING",
    "date": "Oct 17, 2025",
    "time": "09:40 AM - 10:00 AM",
    "duration": "20 min",
    "venue": "Stage 1",
    "section": "Super Senior"
  },
  {
    "id": 52,
    "name": "NJAN MALAYALI",
    "date": "Oct 17, 2025",
    "time": "09:40 AM - 10:20 AM",
    "duration": "40 min",
    "venue": "Stage 2",
    "section": "Junior"
  },
  {
    "id": 53,
    "name": "CONVERSATION MLM",
    "date": "Oct 17, 2025",
    "time": "09:50 AM - 10:05 AM",
    "duration": "15 min",
    "venue": "Stage 3",
    "section": "Sub Junior"
  },
  {
    "id": 54,
    "name": "CONVERSATION URD",
    "date": "Oct 17, 2025",
    "time": "10:00 AM - 10:20 AM",
    "duration": "20 min",
    "venue": "Stage 1",
    "section": "Junior"
  },
  {
    "id": 55,
    "name": "CONVERSATION ENG",
    "date": "Oct 17, 2025",
    "time": "10:05 AM - 10:20 AM",
    "duration": "15 min",
    "venue": "Stage 3",
    "section": "Sub Junior"
  },
  {
    "id": 56,
    "name": "WA'Z",
    "date": "Oct 17, 2025",
    "time": "10:20 AM - 11:00 AM",
    "duration": "40 min",
    "venue": "Stage 1",
    "section": "Sub Junior"
  },
  {
    "id": 57,
    "name": "FACE TO FACE ARB",
    "date": "Oct 17, 2025",
    "time": "10:20 AM - 11:00 AM",
    "duration": "40 min",
    "venue": "Stage 2",
    "section": "Senior"
  },
  {
    "id": 58,
    "name": "CONVERSATION URD",
    "date": "Oct 17, 2025",
    "time": "10:20 AM - 10:35 AM",
    "duration": "15 min",
    "venue": "Stage 3",
    "section": "Sub Junior"
  },
  {
    "id": 59,
    "name": "CONVERSATION ARB",
    "date": "Oct 17, 2025",
    "time": "10:35 AM - 10:50 AM",
    "duration": "15 min",
    "venue": "Stage 3",
    "section": "Sub Junior"
  },
  {
    "id": 60,
    "name": "PROJECT PRESENTATION ENG",
    "date": "Oct 17, 2025",
    "time": "10:35 AM - 11:15 AM",
    "duration": "40 min",
    "venue": "Stage 4",
    "section": "Super Senior"
  },
  {
    "id": 61,
    "name": "GK QUIZ",
    "date": "Oct 17, 2025",
    "time": "11:15 AM - 12:10 PM",
    "duration": "55 min",
    "venue": "Stage 4",
    "section": "Junior"
  },
  {
    "id": 62,
    "name": "SWARF IQ",
    "date": "Oct 17, 2025",
    "time": "02:00 PM - 03:05 PM",
    "duration": "65 min",
    "venue": "Stage 4",
    "section": "Senior"
  },
  {
    "id": 63,
    "name": "MULTILINGUAL QUIZ",
    "date": "Oct 17, 2025",
    "time": "03:05 PM - 04:00 PM",
    "duration": "55 min",
    "venue": "Stage 4",
    "section": "Senior"
  },
  {
    "id": 64,
    "name": "CAMPUS IQ",
    "date": "Oct 17, 2025",
    "time": "11:20 PM - 12:15 AM",
    "duration": "55 min",
    "venue": "Stage 4",
    "section": "Super Senior"
  },
  {
    "id": 65,
    "name": "MATH'S TALENT",
    "date": "Oct 18, 2025",
    "time": "12:15 AM - 01:10 AM",
    "duration": "55 min",
    "venue": "Stage 4",
    "section": "Junior"
  },
  {
    "id": 66,
    "name": "WA'Z",
    "date": "Oct 18, 2025",
    "time": "07:30 AM - 08:10 AM",
    "duration": "40 min",
    "venue": "Stage 1",
    "section": "Senior"
  },
  {
    "id": 67,
    "name": "SPEECH ENG",
    "date": "Oct 18, 2025",
    "time": "07:30 AM - 08:00 AM",
    "duration": "30 min",
    "venue": "Stage 2",
    "section": "Sub Junior"
  },
  {
    "id": 68,
    "name": "KHUTHUBA",
    "date": "Oct 18, 2025",
    "time": "07:30 AM - 08:25 AM",
    "duration": "55 min",
    "venue": "Stage 3",
    "section": "Super Senior"
  },
  {
    "id": 69,
    "name": "PICK AND TALK MLM",
    "date": "Oct 18, 2025",
    "time": "08:00 AM - 08:30 AM",
    "duration": "30 min",
    "venue": "Stage 2",
    "section": "Junior"
  },
  {
    "id": 70,
    "name": "SIYASI THAQREER URD",
    "date": "Oct 18, 2025",
    "time": "08:10 AM - 08:50 AM",
    "duration": "40 min",
    "venue": "Stage 1",
    "section": "Super Senior"
  },
  {
    "id": 71,
    "name": "NEWS WRITING AND READING ARB",
    "date": "Oct 18, 2025",
    "time": "08:25 AM - 08:45 AM",
    "duration": "20 min",
    "venue": "Stage 3",
    "section": "Super Senior"
  },
  {
    "id": 72,
    "name": "MULFAZA",
    "date": "Oct 18, 2025",
    "time": "08:30 AM - 09:20 AM",
    "duration": "50 min",
    "venue": "Stage 2",
    "section": "Senior"
  },
  {
    "id": 73,
    "name": "NEWS WRITING AND READING ENG",
    "date": "Oct 18, 2025",
    "time": "08:45 AM - 09:05 AM",
    "duration": "20 min",
    "venue": "Stage 3",
    "section": "Super Senior"
  },
  {
    "id": 74,
    "name": "SPEECH AND SONG MLM",
    "date": "Oct 18, 2025",
    "time": "08:50 AM - 09:15 AM",
    "duration": "25 min",
    "venue": "Stage 1",
    "section": "Junior"
  },
  {
    "id": 75,
    "name": "NEWS WRITING AND READING URD",
    "date": "Oct 18, 2025",
    "time": "09:05 AM - 09:25 AM",
    "duration": "20 min",
    "venue": "Stage 3",
    "section": "Super Senior"
  },
  {
    "id": 76,
    "name": "SPEECH MLM",
    "date": "Oct 18, 2025",
    "time": "09:15 AM - 09:45 AM",
    "duration": "30 min",
    "venue": "Stage 1",
    "section": "Sub Junior"
  },
  {
    "id": 77,
    "name": "PADHYAPARAYANAM",
    "date": "Oct 18, 2025",
    "time": "09:20 AM - 10:00 AM",
    "duration": "40 min",
    "venue": "Stage 2",
    "section": "Senior"
  },
  {
    "id": 78,
    "name": "NEWS WRITING AND READING MLM",
    "date": "Oct 18, 2025",
    "time": "09:25 AM - 09:45 AM",
    "duration": "20 min",
    "venue": "Stage 3",
    "section": "Super Senior"
  },
  {
    "id": 79,
    "name": "QIRA'TH",
    "date": "Oct 18, 2025",
    "time": "09:45 AM - 10:15 AM",
    "duration": "30 min",
    "venue": "Stage 1",
    "section": "Junior"
  },
  {
    "id": 80,
    "name": "SPEECH URD",
    "date": "Oct 18, 2025",
    "time": "09:45 AM - 10:15 AM",
    "duration": "30 min",
    "venue": "Stage 3",
    "section": "Junior"
  },
  {
    "id": 81,
    "name": "NEWS WRITING AND READING ENG",
    "date": "Oct 18, 2025",
    "time": "10:00 AM - 10:40 AM",
    "duration": "40 min",
    "venue": "Stage 2",
    "section": "Senior"
  },
  {
    "id": 82,
    "name": "SPELLING BEE",
    "date": "Oct 18, 2025",
    "time": "10:00 AM - 10:55 AM",
    "duration": "55 min",
    "venue": "Stage 4",
    "section": "Senior"
  },
  {
    "id": 83,
    "name": "GROUP DISCUSSION",
    "date": "Oct 18, 2025",
    "time": "10:15 AM - 11:05 AM",
    "duration": "50 min",
    "venue": "Stage 1",
    "section": "Super Senior"
  },
  {
    "id": 84,
    "name": "WORD FIGHT",
    "date": "Oct 18, 2025",
    "time": "10:15 AM - 11:20 AM",
    "duration": "65 min",
    "venue": "Stage 3",
    "section": "Sub Junior"
  },
  {
    "id": 85,
    "name": "NEWS WRITING AND READING ARB",
    "date": "Oct 18, 2025",
    "time": "10:40 AM - 11:20 AM",
    "duration": "40 min",
    "venue": "Stage 2",
    "section": "Senior"
  },
  {
    "id": 86,
    "name": "GK QUIZ",
    "date": "Oct 18, 2025",
    "time": "10:55 AM - 11:45 AM",
    "duration": "50 min",
    "venue": "Stage 4",
    "section": "Sub Junior"
  },
  {
    "id": 87,
    "name": "INSPIRING TALK ENG",
    "date": "Oct 18, 2025",
    "time": "11:05 AM - 11:45 AM",
    "duration": "40 min",
    "venue": "Stage 1",
    "section": "Senior"
  },
  {
    "id": 88,
    "name": "NEWS WRITING AND READING MLM",
    "date": "Oct 18, 2025",
    "time": "11:20 AM - 12:00 PM",
    "duration": "40 min",
    "venue": "Stage 2",
    "section": "Senior"
  },
  {
    "id": 89,
    "name": "MOCK INTERVIEW ENG",
    "date": "Oct 18, 2025",
    "time": "11:20 AM - 12:00 PM",
    "duration": "40 min",
    "venue": "Stage 3",
    "section": "Super Senior"
  },
  {
    "id": 90,
    "name": "MAPPILLAPPAT",
    "date": "Oct 18, 2025",
    "time": "11:45 AM - 12:05 PM",
    "duration": "20 min",
    "venue": "Stage 1",
    "section": "Senior"
  },
  {
    "id": 91,
    "name": "TEACHING MLM",
    "date": "Oct 18, 2025",
    "time": "11:45 AM - 12:50 PM",
    "duration": "65 min",
    "venue": "Stage 4",
    "section": "Senior"
  },
  {
    "id": 92,
    "name": "TOUNG TWISTER",
    "date": "Oct 18, 2025",
    "time": "12:00 PM - 12:30 PM",
    "duration": "30 min",
    "venue": "Stage 2",
    "section": "Senior"
  },
  {
    "id": 93,
    "name": "PROUD MUSLIM",
    "date": "Oct 18, 2025",
    "time": "12:00 PM - 12:50 PM",
    "duration": "50 min",
    "venue": "Stage 3",
    "section": "Super Senior"
  },
  {
    "id": 94,
    "name": "SPEECH AND SONG MLM",
    "date": "Oct 18, 2025",
    "time": "12:05 PM - 12:25 PM",
    "duration": "20 min",
    "venue": "Stage 1",
    "section": "Sub Junior"
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
    "section": "Junior"
  },
  {
    "id": 97,
    "name": "ADVENTURE PHOTOGRAPHY",
    "date": "Oct 18, 2025",
    "time": "12:50 PM - 02:50 PM",
    "duration": "120 min",
    "venue": "Stage 4",
    "section": "Super Senior"
  },
  {
    "id": 98,
    "name": "MULTHAQA AL ADYAN",
    "date": "Oct 18, 2025",
    "time": "02:00 PM - 03:05 PM",
    "duration": "65 min",
    "venue": "Stage 1",
    "section": "General"
  },
  {
    "id": 99,
    "name": "RAP SONG",
    "date": "Oct 18, 2025",
    "time": "02:00 PM - 02:30 PM",
    "duration": "30 min",
    "venue": "Stage 2",
    "section": "Junior"
  },
  {
    "id": 100,
    "name": "LIVE TRANSLATION ENG",
    "date": "Oct 18, 2025",
    "time": "02:30 PM - 03:20 PM",
    "duration": "50 min",
    "venue": "Stage 2",
    "section": "Senior"
  },
  {
    "id": 101,
    "name": "SPEECH ENG",
    "date": "Oct 18, 2025",
    "time": "03:05 PM - 03:35 PM",
    "duration": "30 min",
    "venue": "Stage 1",
    "section": "Junior"
  },
  {
    "id": 102,
    "name": "SPEECH MLM",
    "date": "Oct 18, 2025",
    "time": "03:20 PM - 03:50 PM",
    "duration": "30 min",
    "venue": "Stage 2",
    "section": "Junior"
  },
  {
    "id": 103,
    "name": "SONG URD",
    "date": "Oct 18, 2025",
    "time": "03:35 PM - 04:05 PM",
    "duration": "30 min",
    "venue": "Stage 1",
    "section": "Sub Junior"
  },
  {
    "id": 104,
    "name": "HIFZ",
    "date": "Oct 18, 2025",
    "time": "07:00 PM - 07:40 PM",
    "duration": "40 min",
    "venue": "Stage 1",
    "section": "Junior"
  },
  {
    "id": 105,
    "name": "SUFI SAMA",
    "date": "Oct 18, 2025",
    "time": "07:40 PM - 08:30 PM",
    "duration": "50 min",
    "venue": "Stage 1",
    "section": "General"
  },
  {
    "id": 106,
    "name": "MASHUP",
    "date": "Oct 18, 2025",
    "time": "08:30 PM - 08:55 PM",
    "duration": "25 min",
    "venue": "Stage 1",
    "section": "Junior"
  },
  {
    "id": 107,
    "name": "THEME PRESENTATION",
    "date": "Oct 18, 2025",
    "time": "08:55 PM - 10:00 PM",
    "duration": "65 min",
    "venue": "Stage 1",
    "section": "General"
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
                   Witr_2k25
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
