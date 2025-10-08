import React, { useState } from 'react';


const Schedule = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const events = [
    {
      id: 1,
      name: "Story Completion KND",
      date: "Sep 11, 2025",
      time: "9:50 PM",
      duration: "30 min",
      venue: "Main Hall",
      section: "THANIYA"
    },
    {
      id: 2,
      name: "News Report ENG",
      date: "Sep 12, 2025",
      time: "7:50 PM",
      duration: "30 min",
      venue: "Auditorium",
      section: "THANIYA"
    },
    {
      id: 3,
      name: "Hand Writing HND",
      date: "Sep 12, 2025",
      time: "9:50 PM",
      duration: "30 min",
      venue: "Room 204",
      section: "THANIYA"
    },
    {
      id: 4,
      name: "Sentence Translation",
      date: "Sep 12, 2025",
      time: "7:50 PM",
      duration: "30 min",
      venue: "Room 108",
      section: "THANIYA"
    }
  ];

  // Filter events based on search term (case-insensitive)
  const filteredEvents = events.filter(event => {
    const term = searchTerm.toLowerCase();
    return (
      event.name.toLowerCase().includes(term) ||
      event.venue.toLowerCase().includes(term) ||
      event.section.toLowerCase().includes(term)
    );
  });

  return (
    <section className="min-h-screen bg-[#fef9f6] dark:bg-[#0e0e0e] text-gray-800 dark:text-white px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-2 text-center">📅 Event Schedule</h1>
        <p className="text-center mb-6 text-gray-600 dark:text-gray-300">
          Find the full list of events, their times, and where they'll take place.
        </p>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <input
            type="text"
            placeholder="Search events by name, venue or section..."
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            aria-label="Search events"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {filteredEvents.length > 0 ? (
            filteredEvents.map(event => (
              <div
                key={event.id}
                className="bg-blue-100 dark:bg-blue-900 rounded-lg p-6 shadow-md"
              >
                <h2 className="text-xl font-semibold mb-3">{event.name}</h2>
                <p><span role="img" aria-label="calendar">📅</span> <strong>Date:</strong> {event.date}</p>
                <p><span role="img" aria-label="alarm clock">⏰</span> <strong>Time:</strong> {event.time}</p>
                <p><span role="img" aria-label="clock">🕒</span> <strong>Duration:</strong> {event.duration}</p>
                <p><span role="img" aria-label="location pin">📍</span> <strong>Venue:</strong> {event.venue}</p>
                <p><span role="img" aria-label="section">⏲️</span> <strong>Section:</strong> <span className="text-yellow-700 font-bold">{event.section}</span></p>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 dark:text-gray-400">
              No events match your search.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
