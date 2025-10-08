import React, { useState } from 'react';

const EventSchedule = () => {
  const events = [
    { name: "Story Completion KND", date: "Sep 11, 2025", time: "9:50 PM", duration: "30 min", venue: "TBA", section: "THANIYA" },
    { name: "News Report ENG", date: "Sep 12, 2025", time: "7:50 PM", duration: "30 min", venue: "TBA", section: "THANIYA" },
    { name: "Hand Writing HND", date: "Sep 12, 2025", time: "9:50 PM", duration: "30 min", venue: "TBA", section: "THANIYA" },
    { name: "Sentence Translation", date: "Sep 12, 2025", time: "7:50 PM", duration: "30 min", venue: "TBA", section: "THANIYA" }
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="event-schedule">
      <header>
        <h1>Event Schedule</h1>
        <p>View the complete schedule of all programs and events</p>
      </header>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="events-list">
        {filteredEvents.map((event, index) => (
          <div key={index} className="event-card">
            <h3>{event.name}</h3>
            <p>{event.date} - {event.time}</p>
            <p>Duration: {event.duration}</p>
            <p>Venue: {event.venue}</p>
            <p>Section: {event.section}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventSchedule;
