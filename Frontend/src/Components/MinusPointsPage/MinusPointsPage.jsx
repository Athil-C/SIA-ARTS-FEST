import React, { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import './MinusPointsPage.css';

// 🌗 Dark Mode Toggle Component
  const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

    useEffect(() => {
      document.body.classList.toggle("dark", darkMode);
      localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

 
  };

// Sample data
const penaltyRecords = [
  // Sample records can go here
];

const teamsSummary = [
  { name: 'Meem', totalDeduction: -38, incidents: 27 },
  { name: 'Dal', totalDeduction: -42, incidents: 24 },
  { name: 'Seen', totalDeduction: -10, incidents: 9 },
  { name: 'Qāf', totalDeduction: -34, incidents: 17 },
];

// 🔐 Creative Dashboard Portal Section
const PenaltyDashboardPortal = () => (
  <section className="penalty-dashboard-portal">
    <h2>🛡️ Penalty Dashboard Access</h2>
    <div className="dashboard-card">
      <div className="dashboard-header">
        <span className="status-badge">🟢 Online</span>
        <span className="last-sync">Last synced: Oct 19, 2025</span>
      </div>
      <div className="dashboard-body">
        <p className="dashboard-title">Access Live Penalty Sheet</p>
        <p className="dashboard-desc">
          A centralized view of all penalty records and deductions across teams. 
          Ideal for coordinators, leaders, and judges.
        </p>
        <a
          href="https://docs.google.com/spreadsheets/d/1XT7k3Bc9nQ5wk3_h0RrDvmbsdkLGepy8C0078rlvo4c/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="open-dashboard-btn"
        >
          Launch Dashboard ↗
        </a>
        <div className="qr-section">
          <p>📱 Scan to open on your phone:</p>
          <QRCode
            value="https://docs.google.com/spreadsheets/d/1XT7k3Bc9nQ5wk3_h0RrDvmbsdkLGepy8C0078rlvo4c/edit?usp=sharing"
            size={80}
          />
        </div>
      </div>
    </div>
  </section>
);

const DetailedPenaltyRecords = () => (
  <div className="penalty-records">
    <h2> </h2>
    {penaltyRecords.length === 0 ? (
      <p> </p>
    ) : (
      penaltyRecords.map((record, index) => (
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
            <p><small><i>Reported by:</i> {record.reporter}</small></p>
            <p><small><i>Date:</i> {record.date} at {record.time}</small></p>
          </div>
          <div className="points">
            <span className="deduction-points">{record.points}</span>
            <br /><small>points</small>
          </div>
        </div>
      ))
    )}
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
          <p style={{
            color: 'red',
            borderRadius: '8px',
            fontWeight: 700,
          }}>
            Total Deduction: {team.totalDeduction} pts
          </p>
          <p>Incidents: {team.incidents}</p>
        </div>
      ))}
    </section>

    {/* 🔥 Creative Portal Section for Google Sheets */}
    <PenaltyDashboardPortal />

    <DetailedPenaltyRecords />
    <PenaltyGuidelines />
  </div>
);

export default MinusPointsPage;
