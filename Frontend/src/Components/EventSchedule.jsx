import React, { useState } from "react";
import { CalendarDays, Clock, MapPin, Search } from "lucide-react";

const EventSchedule = () => {
n

  const [searchTerm, setSearchTerm] = useState("");

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-gray-900 text-white py-10 px-5 flex flex-col items-center">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-wide mb-2">🎭 Event Schedule</h1>
        <p className="text-gray-300">View the complete schedule of all programs and events</p>
      </header>

      {/* Search Bar */}
      <div className="relative w-full max-w-lg mb-10">
        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-white/10 text-white placeholder-gray-400 pl-10 pr-4 py-2 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none backdrop-blur-md"
        />
      </div>

      {/* Events List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <div
              key={index}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-2xl p-5 border border-white/10 shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
              <div className="flex items-center text-gray-300 text-sm mb-1">
                <CalendarDays className="mr-2" size={16} /> {event.date}
              </div>
              <div className="flex items-center text-gray-300 text-sm mb-1">
                <Clock className="mr-2" size={16} /> {event.time} ({event.duration})
              </div>
              <div className="flex items-center text-gray-300 text-sm mb-1">
                <MapPin className="mr-2" size={16} /> Venue: {event.venue}
              </div>
              <p className="text-gray-400 text-sm mt-2">Section: <span className="text-white">{event.section}</span></p>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center col-span-full">No events found.</p>
        )}
      </div>
    </div>
  );
};

export default EventSchedule;
