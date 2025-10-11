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
      id: 1,
      name: "CROSS WORD",
      date: "Sep 10, 2025",
      time: "07:30 PM - 08:00 PM",
      duration: "30 min",
      venue: "Venue 3",
      section: "Junior",
    },
    {
      id: 2,
      name: "SLOGAN MAKING",
      date: "Sep 10, 2025",
      time: "07:30 PM - 08:00 PM",
      duration: "30 min",
      venue: "Venue 2",
      section: "Junior",
    },
    {
      id: 3,
      name: "MEMORY TEST",
      date: "Sep 10, 2025",
      time: "07:30 PM - 08:00 PM",
      duration: "30 min",
      venue: "Venue 2",
      section: "Sub Junior",
    },
    {
      id: 4,
      name: "POSTER DESIGNING",
      date: "Sep 10, 2025",
      time: "07:30 PM - 08:00 PM",
      duration: "30 min",
      venue: "Venue 2",
      section: "Junior",
    },
    {
      id: 5,
      name: "IMAGE ELABORATION",
      date: "Sep 10, 2025",
      time: "09:45 PM - 10:15 PM",
      duration: "30 min",
      venue: "Venue 1",
      section: "Junior",
    },
    {
      id: 6,
      name: "THAHSKEEL",
      date: "Sep 10, 2025",
      time: "09:45 PM - 10:15 PM",
      duration: "30 min",
      venue: "Venue 1",
      section: "Junior",
    },
    {
      id: 7,
      name: "PENCIL DRAWING",
      date: "Sep 10, 2025",
      time: "09:45 PM - 10:30 PM",
      duration: "45 min",
      venue: "Venue 1",
      section: "Sub Junior",
    },
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
                  No description available
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
