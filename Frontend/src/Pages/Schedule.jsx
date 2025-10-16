import React, { useState, useEffect } from "react";
import { CalendarDays, Clock, MapPin, Timer, Sun, Moon } from "lucide-react";
import ScrollToTop from '../Components/ScrollToTop/ScrollToTop'

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

    const events =[

{
    "id": 1,
    "code": "C1",
    "name": "QIRA'TH",
    "date": "Oct 15, 2025",
    "time": "8:30 AM - 8:50 AM",
    "duration": "20 min",
    "venue": "S1",
    "section": "Junior"
  },
  {
    "id": 2,
    "code": "D1",
    "name": "QIRA'TH",
    "date": "Oct 15, 2025",
    "time": "8:50 AM - 9:30 AM",
    "duration": "40 min",
    "venue": "S1",
    "section": "Sub Junior"
  },
  {
    "id": 3,
    "code": "D2",
    "name": "QIRA'TH",
    "date": "Oct 15, 2025",
    "time": "9:30 AM - 10:00 AM",
    "duration": "30 min",
    "venue": "S1",
    "section": "Sub Junior"
  },
  {
    "id": 4,
    "code": "A1",
    "name": "WA'Z",
    "date": "Oct 16, 2025",
    "time": "7:30 AM - 7:50 AM",
    "duration": "20 min",
    "venue": "S1",
    "section": "Super Senior"
  },
  {
    "id": 5,
    "code": "D3",
    "name": "AZAN",
    "date": "Oct 16, 2025",
    "time": "7:30 AM - 8:00 AM",
    "duration": "30 min",
    "venue": "S3",
    "section": "Sub Junior"
  },
  {
    "id": 6,
    "code": "B17",
    "name": "HISTORY TALK ENG",
    "date": "Oct 16, 2025",
    "time": "7:50 AM - 8:20 AM",
    "duration": "30 min",
    "venue": "S1",
    "section": "Senior"
  },
  {
    "id": 7,
    "code": "D14",
    "name": "READING MLM",
    "date": "Oct 16, 2025",
    "time": "8:00 AM - 8:30 AM",
    "duration": "30 min",
    "venue": "S3",
    "section": "Sub Junior"
  },
  {
    "id": 8,
    "code": "D4",
    "name": "SONG MLM",
    "date": "Oct 16, 2025",
    "time": "8:30 AM - 9:00 AM",
    "duration": "30 min",
    "venue": "S1",
    "section": "Sub Junior"
  },
  {
    "id": 9,
    "code": "D15",
    "name": "READING ARB",
    "date": "Oct 16, 2025",
    "time": "8:30 AM - 9:00 AM",
    "duration": "30 min",
    "venue": "S3",
    "section": "Sub Junior"
  },
  {
    "id": 10,
    "code": "B28",
    "name": "FACE TO FACE ENG",
    "date": "Oct 16, 2025",
    "time": "9:00 AM - 9:40 AM",
    "duration": "40 min",
    "venue": "S1",
    "section": "Senior"
  },
  {
    "id": 11,
    "code": "D16",
    "name": "READING URD",
    "date": "Oct 16, 2025",
    "time": "9:00 AM - 9:30 AM",
    "duration": "30 min",
    "venue": "S3",
    "section": "Sub Junior"
  },
  {
    "id": 12,
    "code": "A33",
    "name": "COMMENTARY ARB",
    "date": "Oct 16, 2025",
    "time": "9:00 AM - 9:20 AM",
    "duration": "20 min",
    "venue": "S4",
    "section": "Super Senior"
  },
  {
    "id": 13,
    "code": "B12",
    "name": "MULTILINGUAL QUIZ",
    "date": "Oct 16, 2025",
    "time": "9:20 AM - 10:15 AM",
    "duration": "55 min",
    "venue": "S4",
    "section": "Senior"
  },
  {
    "id": 14,
    "code": "D17",
    "name": "READING ENG",
    "date": "Oct 16, 2025",
    "time": "9:30 AM - 10:00 AM",
    "duration": "30 min",
    "venue": "S3",
    "section": "Sub Junior"
  },
  {
    "id": 15,
    "code": "C16",
    "name": "STORY NARRATION MLM",
    "date": "Oct 16, 2025",
    "time": "9:40 AM - 10:10 AM",
    "duration": "30 min",
    "venue": "S1",
    "section": "Junior"
  },
  {
    "id": 16,
    "code": "D9",
    "name": "RAP SONG",
    "date": "Oct 16, 2025",
    "time": "10:00 AM - 10:40 AM",
    "duration": "40 min",
    "venue": "S2",
    "section": "Sub Junior"
  },
  {
    "id": 17,
    "code": "D18",
    "name": "READING HND",
    "date": "Oct 16, 2025",
    "time": "10:00 AM - 10:30 AM",
    "duration": "30 min",
    "venue": "S3",
    "section": "Sub Junior"
  },
  {
    "id": 18,
    "code": "C5",
    "name": "SPEECH ARB",
    "date": "Oct 16, 2025",
    "time": "10:10 AM - 10:40 AM",
    "duration": "30 min",
    "venue": "S1",
    "section": "Junior"
  },
  {
    "id": 19,
    "code": "B15",
    "name": "SCIENCE MASTER",
    "date": "Oct 16, 2025",
    "time": "10:15 AM - 11:10 AM",
    "duration": "55 min",
    "venue": "S4",
    "section": "Senior"
  },
  {
    "id": 20,
    "code": "A23",
    "name": "POLITICAL SATIRE MLM",
    "date": "Oct 16, 2025",
    "time": "10:40 AM - 11:20 AM",
    "duration": "40 min",
    "venue": "S1",
    "section": "Super Senior"
  },
  {
    "id": 21,
    "code": "B8",
    "name": "ANNOUNCEMENT",
    "date": "Oct 16, 2025",
    "time": "10:40 AM - 11:00 AM",
    "duration": "20 min",
    "venue": "S2",
    "section": "Senior"
  },
  {
    "id": 22,
    "code": "B50",
    "name": "EXTEMPORE SPEECH MLM",
    "date": "Oct 16, 2025",
    "time": "11:00 AM - 11:40 AM",
    "duration": "40 min",
    "venue": "S1",
    "section": "Senior"
  },
  {
    "id": 23,
    "code": "C19",
    "name": "MATH'S TALENT",
    "date": "Oct 16, 2025",
    "time": "11:10 AM - 12:05 PM",
    "duration": "55 min",
    "venue": "S4",
    "section": "Junior"
  },
  {
    "id": 24,
    "code": "D29",
    "name": "POEM RECITATION MLM",
    "date": "Oct 16, 2025",
    "time": "11:20 AM - 12:00 PM",
    "duration": "40 min",
    "venue": "S2",
    "section": "Sub Junior"
  },
  {
    "id": 25,
    "code": "C27",
    "name": "KACHATABA TONGUE TWISTER",
    "date": "Oct 16, 2025",
    "time": "11:40 AM - 12:20 PM",
    "duration": "40 min",
    "venue": "S1",
    "section": "Junior"
  },
  {
    "id": 26,
    "code": "D23",
    "name": "NJAN MALAYALI",
    "date": "Oct 16, 2025",
    "time": "2:00 PM - 2:40 PM",
    "duration": "40 min",
    "venue": "S1",
    "section": "Sub Junior"
  },
  {
    "id": 27,
    "code": "C22",
    "name": "CONVERSATION ENG",
    "date": "Oct 16, 2025",
    "time": "2:00 PM - 2:20 PM",
    "duration": "20 min",
    "venue": "S2",
    "section": "Junior"
  },
  {
    "id": 28,
    "code": "B21",
    "name": "ANCHORING",
    "date": "Oct 16, 2025",
    "time": "2:00 PM - 2:40 PM",
    "duration": "40 min",
    "venue": "S3",
    "section": "Senior"
  },
  {
    "id": 29,
    "code": "A34",
    "name": "COMMENTARY ENG",
    "date": "Oct 16, 2025",
    "time": "2:00 PM - 2:20 PM",
    "duration": "20 min",
    "venue": "S4",
    "section": "Super Senior"
  },
  {
    "id": 30,
    "code": "B10",
    "name": "GENI GIANT",
    "date": "Oct 16, 2025",
    "time": "2:20 PM - 2:50 PM",
    "duration": "30 min",
    "venue": "S4",
    "section": "Senior"
  },
  {
    "id": 31,
    "code": "A16",
    "name": "KAVIYARANG",
    "date": "Oct 16, 2025",
    "time": "2:40 PM - 3:20 PM",
    "duration": "40 min",
    "venue": "S1",
    "section": "Super Senior"
  },
  {
    "id": 32,
    "code": "A27",
    "name": "FACE KITAB",
    "date": "Oct 16, 2025",
    "time": "2:40 PM - 3:20 PM",
    "duration": "40 min",
    "venue": "S3",
    "section": "Super Senior"
  },
  {
    "id": 33,
    "code": "B18",
    "name": "JUST A MINUTE",
    "date": "Oct 16, 2025",
    "time": "3:00 PM - 3:30 PM",
    "duration": "30 min",
    "venue": "S2",
    "section": "Senior"
  },
  {
    "id": 34,
    "code": "D27",
    "name": "STORY NARRATION MLM",
    "date": "Oct 16, 2025",
    "time": "3:20 PM - 3:50 PM",
    "duration": "30 min",
    "venue": "S1",
    "section": "Sub Junior"
  },
  {
    "id": 35,
    "code": "C21",
    "name": "CONVERSATION MLM",
    "date": "Oct 16, 2025",
    "time": "3:30 PM - 3:50 PM",
    "duration": "20 min",
    "venue": "S2",
    "section": "Junior"
  },
  {
    "id": 36,
    "code": "B27",
    "name": "SPEECH & SONG MLM",
    "date": "Oct 16, 2025",
    "time": "7:00 PM - 7:30 PM",
    "duration": "30 min",
    "venue": "S1",
    "section": "Senior"
  },
  {
    "id": 37,
    "code": "A35",
    "name": "REACTION",
    "date": "Oct 16, 2025",
    "time": "7:15 PM - 7:55 PM",
    "duration": "40 min",
    "venue": "S4",
    "section": "Super Senior"
  },
  {
    "id": 38,
    "code": "C12",
    "name": "SONG ARB",
    "date": "Oct 16, 2025",
    "time": "7:30 PM - 8:00 PM",
    "duration": "30 min",
    "venue": "S1",
    "section": "Junior"
  },
  {
    "id": 39,
    "code": "G11",
    "name": "GK QUIZ",
    "date": "Oct 16, 2025",
    "time": "7:55 PM - 8:50 PM",
    "duration": "55 min",
    "venue": "S4",
    "section": "General"
  },
  {
    "id": 40,
    "code": "A19",
    "name": "GAZAL",
    "date": "Oct 16, 2025",
    "time": "8:00 PM - 8:30 PM",
    "duration": "30 min",
    "venue": "S1",
    "section": "Super Senior"
  },
  {
    "id": 41,
    "code": "C11",
    "name": "SONG ENG",
    "date": "Oct 16, 2025",
    "time": "8:30 PM - 9:00 PM",
    "duration": "30 min",
    "venue": "S1",
    "section": "Junior"
  },
  {
    "id": 42,
    "code": "A22",
    "name": "TADRIS",
    "date": "Oct 16, 2025",
    "time": "8:50 PM - 9:55 PM",
    "duration": "65 min",
    "venue": "S4",
    "section": "Super Senior"
  },
  {
    "id": 43,
    "code": "A18",
    "name": "NASHEED",
    "date": "Oct 16, 2025",
    "time": "9:00 PM - 9:20 PM",
    "duration": "20 min",
    "venue": "S1",
    "section": "Super Senior"
  },
  {
    "id": 44,
    "code": "A4",
    "name": "SPEECH AND SONG ARB",
    "date": "Oct 17, 2025",
    "time": "7:30 AM - 8:00 AM",
    "duration": "30 min",
    "venue": "S1",
    "section": "Super Senior"
  },
  {
    "id": 45,
    "code": "B5",
    "name": "SONG ENG",
    "date": "Oct 17, 2025",
    "time": "7:30 AM - 8:10 AM",
    "duration": "40 min",
    "venue": "S2",
    "section": "Senior"
  },
  {
    "id": 46,
    "code": "C31",
    "name": "WORD FIGHT",
    "date": "Oct 17, 2025",
    "time": "7:30 AM - 8:25 AM",
    "duration": "55 min",
    "venue": "S3",
    "section": "Junior"
  },
  {
    "id": 47,
    "code": "C30",
    "name": "PADHYAPARAYANAM",
    "date": "Oct 17, 2025",
    "time": "8:00 AM - 8:30 AM",
    "duration": "30 min",
    "venue": "S1",
    "section": "Junior"
  },
  {
    "id": 48,
    "code": "A25",
    "name": "PROJECT PRESENTATION ENG",
    "date": "Oct 17, 2025",
    "time": "8:00 AM - 8:40 AM",
    "duration": "40 min",
    "venue": "S4",
    "section": "Super Senior"
  },
  {
    "id": 49,
    "code": "D6",
    "name": "SONG ENG",
    "date": "Oct 17, 2025",
    "time": "8:10 AM - 8:40 AM",
    "duration": "30 min",
    "venue": "S2",
    "section": "Sub Junior"
  },
  {
    "id": 50,
    "code": "D12",
    "name": "SPEECH ARB",
    "date": "Oct 17, 2025",
    "time": "8:25 AM - 8:55 AM",
    "duration": "30 min",
    "venue": "S3",
    "section": "Sub Junior"
  },
  {
    "id": 51,
    "code": "C3",
    "name": "WA'Z",
    "date": "Oct 17, 2025",
    "time": "8:30 AM - 9:10 AM",
    "duration": "40 min",
    "venue": "S1",
    "section": "Junior"
  },
  {
    "id": 52,
    "code": "A5",
    "name": "MALAPPATTU",
    "date": "Oct 17, 2025",
    "time": "8:40 AM - 9:00 AM",
    "duration": "20 min",
    "venue": "S2",
    "section": "Super Senior"
  },
  {
    "id": 53,
    "code": "B14",
    "name": "SWARF IQ",
    "date": "Oct 17, 2025",
    "time": "8:40 AM - 9:45 AM",
    "duration": "65 min",
    "venue": "S4",
    "section": "Senior"
  },
  {
    "id": 54,
    "code": "D19",
    "name": "CONVERSATION MLM",
    "date": "Oct 17, 2025",
    "time": "8:55 AM - 9:10 AM",
    "duration": "15 min",
    "venue": "S3",
    "section": "Sub Junior"
  },
  {
    "id": 55,
    "code": "B49",
    "name": "JUNCTION SPEECH MLM",
    "date": "Oct 17, 2025",
    "time": "9:00 AM - 9:40 AM",
    "duration": "40 min",
    "venue": "S2",
    "section": "Senior"
  },
  {
    "id": 56,
    "code": "D11",
    "name": "SPEECH URD",
    "date": "Oct 17, 2025",
    "time": "9:10 AM - 9:40 AM",
    "duration": "30 min",
    "venue": "S1",
    "section": "Sub Junior"
  },
  {
    "id": 57,
    "code": "D20",
    "name": "CONVERSATION ENG",
    "date": "Oct 17, 2025",
    "time": "9:10 AM - 9:25 AM",
    "duration": "15 min",
    "venue": "S3",
    "section": "Sub Junior"
  },
  {
    "id": 58,
    "code": "D21",
    "name": "CONVERSATION URD",
    "date": "Oct 17, 2025",
    "time": "9:25 AM - 9:40 AM",
    "duration": "15 min",
    "venue": "S3",
    "section": "Sub Junior"
  },
  {
    "id": 59,
    "code": "A30",
    "name": "ANCHORING",
    "date": "Oct 17, 2025",
    "time": "9:40 AM - 10:00 AM",
    "duration": "20 min",
    "venue": "S1",
    "section": "Super Senior"
  },
  {
    "id": 60,
    "code": "C29",
    "name": "NJAN MALAYALI",
    "date": "Oct 17, 2025",
    "time": "9:40 AM - 10:20 AM",
    "duration": "40 min",
    "venue": "S2",
    "section": "Junior"
  },
  {
    "id": 61,
    "code": "D22",
    "name": "CONVERSATION ARB",
    "date": "Oct 17, 2025",
    "time": "9:40 AM - 9:55 AM",
    "duration": "15 min",
    "venue": "S3",
    "section": "Sub Junior"
  },
  {
    "id": 62,
    "code": "C18",
    "name": "GK QUIZ",
    "date": "Oct 17, 2025",
    "time": "9:45 AM - 10:40 AM",
    "duration": "55 min",
    "venue": "S4",
    "section": "Junior"
  },
  {
    "id": 63,
    "code": "D8",
    "name": "WA'Z",
    "date": "Oct 17, 2025",
    "time": "10:00 AM - 10:40 AM",
    "duration": "40 min",
    "venue": "S1",
    "section": "Sub Junior"
  },
  {
    "id": 64,
    "code": "B29",
    "name": "FACE TO FACE ARB",
    "date": "Oct 17, 2025",
    "time": "10:20 AM - 11:00 AM",
    "duration": "40 min",
    "venue": "S2",
    "section": "Senior"
  },
  {
    "id": 65,
    "code": "C23",
    "name": "CONVERSATION URD",
    "date": "Oct 17, 2025",
    "time": "10:40 AM - 11:00 AM",
    "duration": "20 min",
    "venue": "S1",
    "section": "Junior"
  },
  {
    "id": 66,
    "code": "D1",
    "name": "HIFZ",
    "date": "Oct 17, 2025",
    "time": "7:00 PM - 7:40 PM",
    "duration": "40 min",
    "venue": "S1",
    "section": "Sub Junior"
  },
  {
    "id": 67,
    "code": "B26",
    "name": "SPEECH & SONG ARB",
    "date": "Oct 17, 2025",
    "time": "7:40 PM - 8:05 PM",
    "duration": "25 min",
    "venue": "S1",
    "section": "Senior"
  },
  {
    "id": 68,
    "code": "D5",
    "name": "SONG ARB",
    "date": "Oct 17, 2025",
    "time": "8:05 PM - 8:35 PM",
    "duration": "30 min",
    "venue": "S1",
    "section": "Sub Junior"
  },
  {
    "id": 69,
    "code": "B4",
    "name": "SONG URD",
    "date": "Oct 17, 2025",
    "time": "8:35 PM - 9:15 PM",
    "duration": "40 min",
    "venue": "S1",
    "section": "Senior"
  },
  {
    "id": 70,
    "code": "C14",
    "name": "MASHUP",
    "date": "Oct 17, 2025",
    "time": "9:15 PM - 9:40 PM",
    "duration": "25 min",
    "venue": "S1",
    "section": "Junior"
  },
  {
    "id": 71,
    "code": "B1",
    "name": "HIFZ & QIRA'TH",
    "date": "Oct 18, 2025",
    "time": "7:30 AM - 8:35 AM",
    "duration": "65 min",
    "venue": "S1",
    "section": "Senior"
  },
  {
    "id": 72,
    "code": "D10",
    "name": "SPEECH ENG",
    "date": "Oct 18, 2025",
    "time": "7:30 AM - 8:00 AM",
    "duration": "30 min",
    "venue": "S2",
    "section": "Sub Junior"
  },
  {
    "id": 73,
    "code": "A3",
    "name": "KHUTUBA",
    "date": "Oct 18, 2025",
    "time": "7:30 AM - 8:25 AM",
    "duration": "55 min",
    "venue": "S3",
    "section": "Super Senior"
  },
  {
    "id": 74,
    "code": "B25",
    "name": "TEACHING MLM",
    "date": "Oct 18, 2025",
    "time": "7:30 AM - 8:30 AM",
    "duration": "60 min",
    "venue": "S4",
    "section": "Senior"
  },
  {
    "id": 75,
    "code": "C25",
    "name": "PICK AND TALK MLM",
    "date": "Oct 18, 2025",
    "time": "8:00 AM - 8:30 AM",
    "duration": "30 min",
    "venue": "S2",
    "section": "Junior"
  },
  {
    "id": 76,
    "code": "A9",
    "name": "NEWS WRITING AND READING ARB",
    "date": "Oct 18, 2025",
    "time": "8:25 AM - 8:45 AM",
    "duration": "20 min",
    "venue": "S3",
    "section": "Super Senior"
  },
  {
    "id": 77,
    "code": "B20",
    "name": "MULAFAZA",
    "date": "Oct 18, 2025",
    "time": "8:30 AM - 9:20 AM",
    "duration": "50 min",
    "venue": "S2",
    "section": "Senior"
  },
  {
    "id": 78,
    "code": "A6",
    "name": "SIYASI THAQREER URD",
    "date": "Oct 18, 2025",
    "time": "8:35 AM - 9:15 AM",
    "duration": "40 min",
    "venue": "S1",
    "section": "Super Senior"
  },
  {
    "id": 79,
    "code": "A10",
    "name": "NEWS WRITING AND READING ENG",
    "date": "Oct 18, 2025",
    "time": "8:45 AM - 9:05 AM",
    "duration": "20 min",
    "venue": "S3",
    "section": "Super Senior"
  },
  {
    "id": 80,
    "code": "A11",
    "name": "NEWS WRITING AND READING URD",
    "date": "Oct 18, 2025",
    "time": "9:05 AM - 9:25 AM",
    "duration": "20 min",
    "venue": "S3",
    "section": "Super Senior"
  },
  {
    "id": 81,
    "code": "C8",
    "name": "SPEECH AND SONG MLM",
    "date": "Oct 18, 2025",
    "time": "9:15 AM - 9:40 AM",
    "duration": "25 min",
    "venue": "S1",
    "section": "Junior"
  },
  {
    "id": 82,
    "code": "B19",
    "name": "PADHYAPARAYANAM",
    "date": "Oct 18, 2025",
    "time": "9:20 AM - 10:00 AM",
    "duration": "40 min",
    "venue": "S2",
    "section": "Senior"
  },
  {
    "id": 83,
    "code": "A12",
    "name": "NEWS WRITING AND READING MLM",
    "date": "Oct 18, 2025",
    "time": "9:25 AM - 9:45 AM",
    "duration": "20 min",
    "venue": "S3",
    "section": "Super Senior"
  },
  {
    "id": 84,
    "code": "D9",
    "name": "SPEECH MLM",
    "date": "Oct 18, 2025",
    "time": "9:40 AM - 10:10 AM",
    "duration": "30 min",
    "venue": "S1",
    "section": "Sub Junior"
  },
  {
    "id": 85,
    "code": "C6",
    "name": "SPEECH URD",
    "date": "Oct 18, 2025",
    "time": "9:45 AM - 10:15 AM",
    "duration": "30 min",
    "venue": "S3",
    "section": "Junior"
  },
  {
    "id": 86,
    "code": "B42",
    "name": "NEWS WRITING AND READING ENG",
    "date": "Oct 18, 2025",
    "time": "10:00 AM - 10:40 AM",
    "duration": "40 min",
    "venue": "S2",
    "section": "Senior"
  },
  {
    "id": 87,
    "code": "B16",
    "name": "SPELLING BEE",
    "date": "Oct 18, 2025",
    "time": "10:00 AM - 10:55 AM",
    "duration": "55 min",
    "venue": "S4",
    "section": "Senior"
  },
  {
    "id": 88,
    "code": "B2",
    "name": "WA'Z",
    "date": "Oct 18, 2025",
    "time": "10:10 AM - 10:50 AM",
    "duration": "40 min",
    "venue": "S1",
    "section": "Senior"
  },
  {
    "id": 89,
    "code": "D31",
    "name": "WORD FIGHT",
    "date": "Oct 18, 2025",
    "time": "10:15 AM - 11:20 AM",
    "duration": "65 min",
    "venue": "S3",
    "section": "Sub Junior"
  },
  {
    "id": 90,
    "code": "B43",
    "name": "NEWS WRITING AND READING ARB",
    "date": "Oct 18, 2025",
    "time": "10:40 AM - 11:20 AM",
    "duration": "40 min",
    "venue": "S2",
    "section": "Senior"
  },
  {
    "id": 91,
    "code": "A28",
    "name": "GROUP DISCUSSION",
    "date": "Oct 18, 2025",
    "time": "10:50 AM - 11:40 AM",
    "duration": "50 min",
    "venue": "S1",
    "section": "Super Senior"
  },
  {
    "id": 92,
    "code": "D24",
    "name": "GK QUIZ",
    "date": "Oct 18, 2025",
    "time": "10:55 AM - 11:45 AM",
    "duration": "50 min",
    "venue": "S4",
    "section": "Sub Junior"
  },
  {
    "id": 93,
    "code": "B44",
    "name": "NEWS WRITING AND READING MLM",
    "date": "Oct 18, 2025",
    "time": "11:20 AM - 12:00 PM",
    "duration": "40 min",
    "venue": "S2",
    "section": "Senior"
  },
  {
    "id": 94,
    "code": "A13",
    "name": "MOCK INTERVIEW ENG",
    "date": "Oct 18, 2025",
    "time": "11:20 AM - 12:00 PM",
    "duration": "40 min",
    "venue": "S3",
    "section": "Super Senior"
  },
  {
    "id": 95,
    "code": "B53",
    "name": "INSPIRING TALK ENG",
    "date": "Oct 18, 2025",
    "time": "11:40 AM - 12:20 PM",
    "duration": "40 min",
    "venue": "S1",
    "section": "Senior"
  },
  {
    "id": 96,
    "code": "B24",
    "name": "PHOTOGRAPHY",
    "date": "Oct 18, 2025",
    "time": "11:45 AM - 12:50 PM",
    "duration": "65 min",
    "venue": "S4",
    "section": "Senior"
  },
  {
    "id": 97,
    "code": "A29",
    "name": "ADVANTURE PHOTOGRAPHY",
    "date": "Oct 18, 2025",
    "time": "11:45 AM - 12:50 PM",
    "duration": "65 min",
    "venue": "S4",
    "section": "Super Senior"
  },
  {
    "id": 98,
    "code": "B22",
    "name": "TOUNG TWISTER",
    "date": "Oct 18, 2025",
    "time": "12:00 PM - 12:30 PM",
    "duration": "30 min",
    "venue": "S2",
    "section": "Senior"
  },
  {
    "id": 99,
    "code": "A31",
    "name": "PROUD MUSLIM",
    "date": "Oct 18, 2025",
    "time": "12:00 PM - 12:50 PM",
    "duration": "50 min",
    "venue": "S3",
    "section": "Super Senior"
  },
  {
    "id": 100,
    "code": "A17",
    "name": "MAPPILLAPPAT",
    "date": "Oct 18, 2025",
    "time": "12:20 PM - 12:40 PM",
    "duration": "20 min",
    "venue": "S1",
    "section": "Super Senior"
  },
  {
    "id": 101,
    "code": "A8",
    "name": "ACADEMIC TALK ENG",
    "date": "Oct 18, 2025",
    "time": "12:30 PM - 12:50 PM",
    "duration": "20 min",
    "venue": "S2",
    "section": "Super Senior"
  },
  {
    "id": 102,
    "code": "D13",
    "name": "SPEECH AND SONG MLM",
    "date": "Oct 18, 2025",
    "time": "12:40 PM - 1:00 PM",
    "duration": "20 min",
    "venue": "S1",
    "section": "Sub Junior"
  },
  {
    "id": 103,
    "code": "C17",
    "name": "STORY NARRATION ENG",
    "date": "Oct 18, 2025",
    "time": "12:50 PM - 1:20 PM",
    "duration": "30 min",
    "venue": "S2",
    "section": "Junior"
  },
  {
    "id": 104,
    "code": "G15",
    "name": "MULTHAQA AL ADYAN",
    "date": "Oct 18, 2025",
    "time": "2:00 PM - 3:05 PM",
    "duration": "65 min",
    "venue": "S1",
    "section": "General"
  },
  {
    "id": 105,
    "code": "C13",
    "name": "RAP SONG",
    "date": "Oct 18, 2025",
    "time": "2:00 PM - 2:30 PM",
    "duration": "30 min",
    "venue": "S2",
    "section": "Junior"
  },
  {
    "id": 106,
    "code": "B23",
    "name": "LIVE TRANSLATION ENG",
    "date": "Oct 18, 2025",
    "time": "2:30 PM - 3:20 PM",
    "duration": "50 min",
    "venue": "S2",
    "section": "Senior"
  },
  {
    "id": 107,
    "code": "C7",
    "name": "SPEECH ENG",
    "date": "Oct 18, 2025",
    "time": "3:05 PM - 3:35 PM",
    "duration": "30 min",
    "venue": "S1",
    "section": "Junior"
  },
  {
    "id": 108,
    "code": "C4",
    "name": "SPEECH MLM",
    "date": "Oct 18, 2025",
    "time": "3:20 PM - 3:50 PM",
    "duration": "30 min",
    "venue": "S2",
    "section": "Junior"
  },
  {
    "id": 109,
    "code": "D7",
    "name": "SONG URD",
    "date": "Oct 18, 2025",
    "time": "3:35 PM - 4:05 PM",
    "duration": "30 min",
    "venue": "S1",
    "section": "Sub Junior"
  },
  {
    "id": 110,
    "code": "C2",
    "name": "HIFZ",
    "date": "Oct 18, 2025",
    "time": "7:00 PM - 7:40 PM",
    "duration": "40 min",
    "venue": "S1",
    "section": "Junior"
  },
  {
    "id": 111,
    "code": "G2",
    "name": "SUFI SAMA",
    "date": "Oct 18, 2025",
    "time": "7:40 PM - 8:30 PM",
    "duration": "50 min",
    "venue": "S1",
    "section": "General"
  },
  {
    "id": 112,
    "code": "B6",
    "name": "MASHUP",
    "date": "Oct 18, 2025",
    "time": "8:30 PM - 8:55 PM",
    "duration": "25 min",
    "venue": "S1",
    "section": "Senior"
  },
  {
    "id": 113,
    "code": "G6",
    "name": "THEME PRESENTATION",
    "date": "Oct 18, 2025",
    "time": "8:55 PM - 10:00 PM",
    "duration": "65 min",
    "venue": "S1",
    "section": "General"
  },
  {
    "id": 114,
    "code": "B7",
    "name": "NASHEED",
    "date": "Oct 19, 2025",
    "time": "7:30 AM - 8:10 AM",
    "duration": "40 min",
    "venue": "S1",
    "section": "Senior"
  },
  {
    "id": 115,
    "code": "G7",
    "name": "DEBATE ENG",
    "date": "Oct 19, 2025",
    "time": "7:30 AM - 8:25 AM",
    "duration": "55 min",
    "venue": "S3",
    "section": "General"
  },
  {
    "id": 116,
    "code": "A20",
    "name": "MASHUP",
    "date": "Oct 19, 2025",
    "time": "8:10 AM - 8:35 AM",
    "duration": "25 min",
    "venue": "S1",
    "section": "Super Senior"
  },
  {
    "id": 117,
    "code": "G14",
    "name": "COURT",
    "date": "Oct 19, 2025",
    "time": "8:25 AM - 9:30 AM",
    "duration": "65 min",
    "venue": "S3",
    "section": "General"
  },
  {
    "id": 118,
    "code": "C10",
    "name": "SONG URDU",
    "date": "Oct 19, 2025",
    "time": "8:30 AM - 9:00 AM",
    "duration": "30 min",
    "venue": "S2",
    "section": "Junior"
  },
  {
    "id": 119,
    "code": "D25",
    "name": "MATHS TALENT",
    "date": "Oct 19, 2025",
    "time": "8:30 AM - 9:25 AM",
    "duration": "55 min",
    "venue": "S4",
    "section": "Sub Junior"
  },
  {
    "id": 120,
    "code": "D33",
    "name": "GROUP SONG",
    "date": "Oct 19, 2025",
    "time": "9:25 AM - 8:55 AM",
    "duration": "30 min",
    "venue": "S1",
    "section": "Sub Junior"
  },
  {
    "id": 121,
    "code": "A14",
    "name": "FACE TO FACE ARB",
    "date": "Oct 19, 2025",
    "time": "8:55 AM - 9:15 AM",
    "duration": "20 min",
    "venue": "S1",
    "section": "Super Senior"
  },
  {
    "id": 122,
    "code": "G8",
    "name": "MUNAZARA",
    "date": "Oct 19, 2025",
    "time": "9:00 AM - 10:05 AM",
    "duration": "65 min",
    "venue": "S2",
    "section": "General"
  },
  {
    "id": 123,
    "code": "G3",
    "name": "THA'LEEMU SUNNA",
    "date": "Oct 19, 2025",
    "time": "9:15 AM - 10:20 AM",
    "duration": "65 min",
    "venue": "S1",
    "section": "General"
  },
  {
    "id": 124,
    "code": "B13",
    "name": "MATH TALENT",
    "date": "Oct 19, 2025",
    "time": "9:25 AM - 10:20 AM",
    "duration": "55 min",
    "venue": "S4",
    "section": "Senior"
  },
  {
    "id": 125,
    "code": "D32",
    "name": "MULAFAZA",
    "date": "Oct 19, 2025",
    "time": "9:30 AM - 10:25 AM",
    "duration": "55 min",
    "venue": "S3",
    "section": "Sub Junior"
  },
  {
    "id": 126,
    "code": "B52",
    "name": "SPEECH URD",
    "date": "Oct 19, 2025",
    "time": "10:05 AM - 10:45 AM",
    "duration": "40 min",
    "venue": "S2",
    "section": "Senior"
  },
  {
    "id": 127,
    "code": "D28",
    "name": "STORY NARRATION ENG",
    "date": "Oct 19, 2025",
    "time": "10:20 AM - 10:50 AM",
    "duration": "30 min",
    "venue": "S1",
    "section": "Sub Junior"
  },
  {
    "id": 128,
    "code": "A21",
    "name": "CAMPUS IQ",
    "date": "Oct 19, 2025",
    "time": "10:20 AM - 11:15 AM",
    "duration": "55 min",
    "venue": "S4",
    "section": "Super Senior"
  },
  {
    "id": 129,
    "code": "G13",
    "name": "FATWA COUNCIL",
    "date": "Oct 19, 2025",
    "time": "10:25 AM - 11:30 AM",
    "duration": "65 min",
    "venue": "S3",
    "section": "General"
  },
  {
    "id": 130,
    "code": "A26",
    "name": "REVERSE QUIZ",
    "date": "Oct 19, 2025",
    "time": "10:45 AM - 11:40 AM",
    "duration": "55 min",
    "venue": "S2",
    "section": "Super Senior"
  },
  {
    "id": 131,
    "code": "A24",
    "name": "ANNOUNCEMENT",
    "date": "Oct 19, 2025",
    "time": "10:50 AM - 11:30 AM",
    "duration": "40 min",
    "venue": "S1",
    "section": "Super Senior"
  },
  {
    "id": 132,
    "code": "C34",
    "name": "MULAFAZA",
    "date": "Oct 19, 2025",
    "time": "11:15 AM - 12:10 PM",
    "duration": "55 min",
    "venue": "S4",
    "section": "Junior"
  },
  {
    "id": 133,
    "code": "A7",
    "name": "EXTEMPORE SPEECH MLM",
    "date": "Oct 19, 2025",
    "time": "11:30 AM - 12:10 PM",
    "duration": "40 min",
    "venue": "S1",
    "section": "Super Senior"
  },
  {
    "id": 134,
    "code": "C24",
    "name": "CONVERSATION ARB",
    "date": "Oct 19, 2025",
    "time": "11:40 AM - 12:00 PM",
    "duration": "20 min",
    "venue": "S2",
    "section": "Junior"
  },
  {
    "id": 135,
    "code": "C15",
    "name": "GROUP SONG",
    "date": "Oct 19, 2025",
    "time": "12:00 PM - 12:30 PM",
    "duration": "30 min",
    "venue": "S2",
    "section": "Junior"
  },
  {
    "id": 136,
    "code": "A15",
    "name": "FACE TO FACE ENG",
    "date": "Oct 19, 2025",
    "time": "12:10 PM - 12:30 PM",
    "duration": "20 min",
    "venue": "S1",
    "section": "Super Senior"
  },
  {
    "id": 137,
    "code": "B51",
    "name": "SPEECH ARB",
    "date": "Oct 19, 2025",
    "time": "12:30 PM - 1:10 PM",
    "duration": "40 min",
    "venue": "S2",
    "section": "Senior"
  },
  {
    "id": 138,
    "code": "G9",
    "name": "MUSHA'RA",
    "date": "Oct 19, 2025",
    "time": "7:00 PM - 8:20 PM",
    "duration": "80 min",
    "venue": "S1",
    "section": "General"
  },
  {
    "id": 139,
    "code": "B3",
    "name": "PADAPPATTU",
    "date": "Oct 19, 2025",
    "time": "8:20 PM - 9:00 PM",
    "duration": "40 min",
    "venue": "S1",
    "section": "Senior"
  },
  {
    "id": 140,
    "code": "C9",
    "name": "SONG MLM",
    "date": "Oct 19, 2025",
    "time": "9:00 PM - 9:30 PM",
    "duration": "30 min",
    "venue": "S1",
    "section": "Junior"
  },
  {
    "id": 141,
    "code": "G1",
    "name": "QAWWALI URD",
    "date": "Oct 19, 2025",
    "time": "9:30 PM - 10:10 PM",
    "duration": "40 min",
    "venue": "S1",
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
       <ScrollToTop />
    </section>
  );
};

export default Schedule;
