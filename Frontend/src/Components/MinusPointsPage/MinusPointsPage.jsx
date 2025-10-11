import React, { useState, useEffect } from 'react';
import './MinusPointsPage.css';

// 🌗 Dark Mode Toggle Component
const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
       
    >
   
    </button>
  );
};

// Sample data
const penaltyRecords = [
  {
    code: 'MP001',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Meem',
    reason: 'Late arrival for Classical Dance competition',
    reporter: 'Judge Committee',
    date: '2025-01-20',
    time: '10:15 AM',
    points: -5,
  },
  {
    code: 'MP002',
    status: 'Applied',
    severity: 'Low Severity',
    teamName: 'Dal',
    reason: 'Incomplete costume requirements for Group Song',
    reporter: 'Event Coordinator',
    date: '2025-01-20',
    time: '11:30 AM',
    points: -3,
  },
  {
    code: 'MP003',
    status: 'Under Review',
    severity: 'Medium Severity',
    teamName: 'Seen',
    reason: 'Violation of stage discipline during Drama Performance',
    reporter: 'Stage Manager',
    date: '2025-01-20',
    time: '2:45 PM',
    points: -8,
  },
  {
    code: 'MP004',
    status: 'Applied',
    severity: 'Serious Violation',
    teamName: 'Qāf',
    reason: 'Unsportsmanlike conduct during results announcement',
    reporter: 'Event Director',
    date: '2025-01-20',
    time: '5:30 PM',
    points: -10,
  },
];

const teamsSummary = [
  { name: 'Meem', totalDeduction: -15, incidents: 2 },
  { name: 'Dal', totalDeduction: -18, incidents: 3 },
  { name: 'Seen', totalDeduction: -8, incidents: 1 },
  { name: 'Qāf', totalDeduction: -10, incidents: 1 },
];

const DetailedPenaltyRecords = () => (
  <div className="penalty-records">
    <h2>Detailed Penalty Records</h2>
    {penaltyRecords.map((record, index) => (
      <div key={index} className="penalty-record">
        <div className="penalty-code">
          <span>{record.code}</span>
          <span className={`status ${record.status.toLowerCase().replace(' ', '-')}`}>
            {record.status}
          </span>
          <span className="severity">{record.severity}</span>
        </div>
        <div className="penalty-description">
          <p className={`team-name ${record.teamName.toLowerCase().replace(' ', '-')}`}>
            <strong>{record.teamName}</strong>
          </p>
          <p>{record.reason}</p>
          <p>
            <small><i>Reported by:</i> {record.reporter}</small>
          </p>
          <p>
            <small><i>Date:</i> {record.date} at {record.time}</small>
          </p>
        </div>
        <div className="points">
          <span className="deduction-points">{record.points}</span>
          <br />
          <small>points</small>
        </div>
      </div>
    ))}
  </div>
);

const PenaltyGuidelines = () => (
  <section className="penalty-guidelines">
    <h2>Penalty Guidelines</h2>
    <div className="guidelines-container">
      <div className="common-violations">
        <h3 style={{ color: '#d9534f' }}>Common Violations</h3>
        <ul>
          <li>Late arrival: -2 to -5 points</li>
          <li>Incomplete requirements: -3 to -8 points</li>
          <li>Time limit violations: -2 to -5 points</li>
          <li>Uniform/costume violations: -3 to -6 points</li>
          <li>Stage discipline issues: -5 to -10 points</li>
        </ul>
      </div>
      <div className="serious-violations">
        <h3 style={{ color: '#d4a017' }}>Serious Violations</h3>
        <ul>
          <li>Use of prohibited materials: -10 to -15 points</li>
          <li>Unsportsmanlike conduct: -10 to -20 points</li>
          <li>Disruption of events: -15 to -25 points</li>
          <li>Violation of safety rules: -20 to -30 points</li>
          <li>Disrespect to judges/staff: -15 to -25 points</li>
        </ul>
      </div>
    </div>
    <div className="appeal-process">
      <h3>Appeal Process</h3>
      <p>
        Teams can appeal any penalty within 2 hours of notification. Appeals should be submitted to
        the Event Director with supporting evidence. The organizing committee will review and
        respond within 1 hour.
      </p>
    </div>
  </section>
);

const MinusPointsPage = () => (
  <div className="minus-points-page">
    <ThemeToggle />

    <section className="warning">
      <p>
        All minus points are subject to review and appeal process. Teams can contact the organizing
        committee for clarifications.
      </p>
    </section>

    <section className="team-penalty-summary">
      {teamsSummary.map((team, index) => (
        <div key={index} className={`team ${team.name.toLowerCase().replace(' ', '-')}`}>
          <h3>{team.name}</h3>
          <p>Total Deduction: {team.totalDeduction} pts</p>
          <p>Incidents: {team.incidents}</p>
        </div>
      ))}
    </section>

    <DetailedPenaltyRecords />
    <PenaltyGuidelines />
  </div>
);

export default MinusPointsPage;
