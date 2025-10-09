import React, { useState } from "react";
import { CalendarDays, Clock, MapPin, Timer } from "lucide-react";

const Schedule = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const events = [
    {
      id: 1,
      name: "Story Completion KND",
      date: "Sep 11, 2025",
      time: "9:50 PM",
      duration: "30 min",
      venue: "Main Hall",
      section: "THANIYA",
    },
    {
      id: 2,
      name: "News Report ENG",
      date: "Sep 12, 2025",
      time: "7:50 PM",
      duration: "30 min",
      venue: "Auditorium",
      section: "THANIYA",
    },
    {
      id: 3,
      name: "Hand Writing HND",
      date: "Sep 12, 2025",
      time: "9:50 PM",
      duration: "30 min",
      venue: "Room 204",
      section: "THANIYA",
    },
    {
      id: 4,
      name: "Sentence Translation",
      date: "Sep 12, 2025",
      time: "7:50 PM",
      duration: "30 min",
      venue: "Room 108",
      section: "THANIYA",
    },
    {
      id: 4,
      name: "Sentence Translation",
      date: "Sep 12, 2025",
      time: "7:50 PM",
      duration: "30 min",
      venue: "Room 108",
      section: "super senior",
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
    <section className="min-h-screen bg-[#fffaf5] text-gray-900 px-4 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-extrabold mb-2 text-center">📅 Event Schedule</h1>
        <p className="text-center mb-8 text-gray-600">
          Find the full list of events, their times, and where they'll take place.
        </p>

        {/* Search */}
        <div className="max-w-md mx-auto mb-10">
          <input
            type="text"
            placeholder="Search events..."
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
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
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100"
              >
                {/* Header Row */}
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-lg font-bold">{event.name}</h2>
                  <span className="bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded">
                    {event.section}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-sm mb-4">No description available</p>

                {/* Date & Time */}
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-3">
                  <div className="flex items-center bg-gray-100 px-3 py-1.5 rounded-md">
                    <CalendarDays size={16} className="mr-2 text-orange-500" />
                    {event.date}
                  </div>
                  <div className="flex items-center bg-gray-100 px-3 py-1.5 rounded-md">
                    <Clock size={16} className="mr-2 text-orange-500" />
                    {event.time}
                  </div>
                </div>

                {/* Venue + Duration */}
                <div className="flex justify-between items-center text-sm text-gray-600">
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
            <p className="col-span-full text-center text-gray-500">
              No events found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
