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
    reason: 'Chest No. 662 is absent for Event D4.',
    reporter: 'Judge Committee',
    date: '2025-10-18',
    time: '10:15 AM',
    points: -1,
  },
  {
    code: 'MP001',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Meem',
    reason: 'Chest No. 636 is absent for Event C20.',
    reporter: 'Judge Committee',
    date: '2025-10-18',
    time: '10:15 AM',
    points: -1,
  },
  {
    code: 'MP001',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Meem',
    reason: 'Chest No. 566 is absent for Event B32.',
    reporter: 'Judge Committee',
    date: '2025-10-18',
    time: '10:15 AM',
    points: -1,
  },
  {
    code: 'MP001',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Meem',
    reason: 'Chest No. 646 is absent for Event A55.',
    reporter: 'Judge Committee',
    date: '2025-10-18',
    time: '10:15 AM',
    points: -1,
  },
  {
    code: 'MP001',
    status: 'Applied',
    severity: 'Serious Violation',
    teamName: 'Meem',
    reason: 'ILLEGAL MOBILE USING',
    reporter: 'FEST Committee',
    date: '2025-10-18',
    time: '10:15 AM',
    points: -5,
  },
  {
    code: 'MP001',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Meem',
    reason: 'Chest No. 665 is absent for Event D8.',
    reporter: 'Judge Committee',
    date: '2025-10-18',
    time: '10:15 AM',
    points: -1,
  },
  {
    code: 'MP001',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Meem',
    reason: 'Chest No. 610 is absent for Event B10.',
    reporter: 'Judge Committee',
    date: '2025-10-18',
    time: '10:15 AM',
    points: -1,
  },
  {
    code: 'MP001',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Meem',
    reason: 'Chest No. 646 is absent for Event A35.',
    reporter: 'Judge Committee',
    date: '2025-10-18',
    time: '10:15 AM',
    points: -1,
  },
  {
    code: 'MP001',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Meem',
    reason: 'Chest No. 671 is absent for Event C5.',
    reporter: 'Judge Committee',
    date: '2025-10-18',
    time: '10:15 AM',
    points: -1,
  },
  {
    code: 'MP001',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Meem',
    reason: 'Chest No. 655 is absent for Event D11.',
    reporter: 'Judge Committee',
    date: '2025-10-18',
    time: '10:15 AM',
    points: -1,
  },
  {
    code: 'MP001',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Meem',
    reason: 'Chest No. 638 is absent for Event C3.',
    reporter: 'Judge Committee',
    date: '2025-10-18',
    time: '10:15 AM',
    points: -1,
  },
 
  {
    code: 'MP001',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Meem',
    reason: 'Chest No. 638 is absent for Event C16.',
    reporter: 'Judge Committee',
    date: '2025-10-18',
    time: '10:15 AM',
    points: -1,
  },
  {
    code: 'MP001',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Meem',
    reason: 'Chest No. 589,710 is absent for Event B28.',
    reporter: 'Judge Committee',
    date: '2025-10-18',
    time: '10:15 AM',
    points: -1,
  },
  {
    code: 'MP001',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Meem',
    reason: 'Chest No. 673 is absent for Event C19.',
    reporter: 'Judge Committee',
    date: '2025-10-18',
    time: '10:15 AM',
    points: -1,
  },
  {
    code: 'MP001',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Meem',
    reason: 'Chest No. 662 is absent for Event D29.',
    reporter: 'Judge Committee',
    date: '2025-10-18',
    time: '10:15 AM',
    points: -1,
  },
  {
    code: 'MP001',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Meem',
    reason: 'Chest No. 581,604 is absent for Event B9.',
    reporter: 'Judge Committee',
    date: '2025-10-18',
    time: '10:15 AM',
    points: -2,
  },
  {
    code: 'MP001',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Meem',
    reason: 'Chest No. 596 is absent for Event B18.',
    reporter: 'Judge Committee',
    date: '2025-10-18',
    time: '10:15 AM',
    points: -4,
  },
  {
    code: 'MP001',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Meem',
    reason: 'Chest No. 695 is absent for Event D27.',
    reporter: 'Judge Committee',
    date: '2025-10-18',
    time: '10:15 AM',
    points: -2,
  },
  {
    code: 'MP001',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Meem',
    reason: 'Chest No. 622 is absent for Event C25.',
    reporter: 'Judge Committee',
    date: '2025-10-18',
    time: '10:15 AM',
    points: -1,
  },
  {
    code: 'MP001',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Meem',
    reason: 'Chest No. 622 is absent for Event C6.',
    reporter: 'Judge Committee',
    date: '2025-10-18',
    time: '10:15 AM',
    points: -1,
  },
  {
    code: 'MP001',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Meem',
    reason: 'Chest No. 587 is absent for Event B16.',
    reporter: 'Judge Committee',
    date: '2025-10-18',
    time: '10:15 AM',
    points: -2,
  },
    {
    code: 'MP002',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Dal',
    reason: 'LATE SUBMISSION OF NON STAGE LIST',
    reporter: 'Event Coordinator',
    date: '2025-10-18',
    time: '11:30 AM',
    points: -2,
  },
    {
    code: 'MP002',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Dal',
    reason: 'Chest No. 592 is absent for Event B68.',
    reporter: 'Event Coordinator',
    date: '2025-10-18',
    time: '11:30 AM',
    points: -1,
  },
    {
    code: 'MP002',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Dal',
    reason: 'Chest No. 576 is absent for Event B60.',
    reporter: 'Event Coordinator',
    date: '2025-10-18',
    time: '11:30 AM',
    points: -1,
  },
    {
    code: 'MP002',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Dal',
    reason: 'Chest No. 617 is absent for Event C18.',
    reporter: 'Event Coordinator',
    date: '2025-10-18',
    time: '11:30 AM',
    points: -1,
  },
    {
    code: 'MP002',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Dal',
    reason: 'Chest No. 618 is absent for Event C31.',
    reporter: 'Event Coordinator',
    date: '2025-10-18',
    time: '11:30 AM',
    points: -1,
  },
    {
    code: 'MP002',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Dal',
    reason: 'Chest No. 611 is absent for Event C12.',
    reporter: 'Event Coordinator',
    date: '2025-10-18',
    time: '11:30 AM',
    points: -1,
  },
    {
    code: 'MP002',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Dal',
    reason: 'Chest No. 549 is absent for Event B8.',
    reporter: 'Event Coordinator',
    date: '2025-10-18',
    time: '11:30 AM',
    points: -1,
  },
    {
    code: 'MP002',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Dal',
    reason: 'Chest No. 664 is absent for Event C3.',
    reporter: 'Event Coordinator',
    date: '2025-10-18',
    time: '11:30 AM',
    points: -2,
  },
    {
    code: 'MP002',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Dal',
    reason: 'Chest No. 668 is absent for Event C3.',
    reporter: 'Event Coordinator',
    date: '2025-10-18',
    time: '11:30 AM',
    points: -2,
  },
    {
    code: 'MP002',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Dal',
    reason: 'Chest No. 501,520 is absent for Event A25.',
    reporter: 'Event Coordinator',
    date: '2025-10-18',
    time: '11:30 AM',
    points: -2,
  },
    {
    code: 'MP002',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Dal',
    reason: 'Chest No. 665 is absent for Event C30.',
    reporter: 'Event Coordinator',
    date: '2025-10-18',
    time: '11:30 AM',
    points: -2,
  },
    {
    code: 'MP002',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Dal',
    reason: 'Chest No. 614 is absent for Event C16.',
    reporter: 'Event Coordinator',
    date: '2025-10-18',
    time: '11:30 AM',
    points: -1,
  },
    {
    code: 'MP002',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Dal',
    reason: 'Chest No. 612 is absent for Event B4.',
    reporter: 'Event Coordinator',
    date: '2025-10-18',
    time: '11:30 AM',
    points: -1,
  },
    {
    code: 'MP002',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Dal',
    reason: 'Chest No. 692 is absent for Event D6.',
    reporter: 'Event Coordinator',
    date: '2025-10-18',
    time: '11:30 AM',
    points: -1,
  },
    {
    code: 'MP002',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Dal',
    reason: 'Chest No.611,653 is absent for Event C25.',
    reporter: 'Event Coordinator',
    date: '2025-10-18',
    time: '11:30 AM',
    points: -4,
  },
    {
    code: 'MP002',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Dal',
    reason: 'Chest No.692,738 is absent for Event D10.',
    reporter: 'Event Coordinator',
    date: '2025-10-18',
    time: '11:30 AM',
    points: -3,
  },
    {
    code: 'MP002',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Dal',
    reason: 'Chest No. 614 is absent for Event C8.',
    reporter: 'Event Coordinator',
    date: '2025-10-18',
    time: '11:30 AM',
    points: -2,
  },
    {
    code: 'MP002',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Dal',
    reason: 'Chest No. 679 is absent for Event A11.',
    reporter: 'Event Coordinator',
    date: '2025-10-18',
    time: '11:30 AM',
    points: -2,
  },
    {
    code: 'MP002',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Dal',
    reason: 'Chest No. 612 is absent for Event B19.',
    reporter: 'Event Coordinator',
    date: '2025-10-18',
    time: '11:30 AM',
    points: -1,
  },
    {
    code: 'MP002',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Dal',
    reason: 'Chest No. 617,629 is absent for Event C6.',
    reporter: 'Event Coordinator',
    date: '2025-10-18',
    time: '11:30 AM',
    points: -3,
  },
    {
    code: 'MP002',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Dal',
    reason: 'Chest No. 517 is absent for Event A10.',
    reporter: 'Event Coordinator',
    date: '2025-10-18',
    time: '11:30 AM',
    points: -2,
  },
    {
    code: 'MP003',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Seen',
    reason: 'Chest No. 667 is absent for Event C69.',
    reporter: 'Stage Manager',
    date: '2025-10-18',
    time: '2:45 PM',
    points: -1,
  },
 
    {
    code: 'MP003',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Seen',
    reason: 'Chest No. 502 is absent for Event A5.',
    reporter: 'Stage Manager',
    date: '2025-10-18',
    time: '2:45 PM',
    points: -1,
  },
    {
    code: 'MP003',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Seen',
    reason: 'Chest No. 506 is absent for Event C30.',
    reporter: 'Stage Manager',
    date: '2025-10-18',
    time: '2:45 PM',
    points: -1,
  },
    {
    code: 'MP003',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Seen',
    reason: 'Chest No. 572 is absent for Event B4.',
    reporter: 'Stage Manager',
    date: '2025-10-18',
    time: '2:45 PM',
    points: -1,
  },
    {
    code: 'MP003',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Seen',
    reason: 'Chest No. 572 is absent for Event B2.',
    reporter: 'Stage Manager',
    date: '2025-10-18',
    time: '2:45 PM',
    points: -1,
  },
    {
    code: 'MP004',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Qāf',
    reason: 'Chest No. 637 is absent for Event C79.',
    reporter: 'Stage Manager',
    date: '2025-10-18',
    time: '5:30 PM',
    points: -1,
  },
    {
    code: 'MP004',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Qāf',
    reason: 'ANZIL, HARSHIL, ASLAM (4*3).',
    reporter: 'Stage Manager',
    date: '2025-10-18',
    time: '5:30 PM',
    points: -12,
  },
    {
    code: 'MP004',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Qāf',
    reason: '654 MUHAMMED RIZWAN.K.',
    reporter: 'Stage Manager',
    date: '2025-10-18',
    time: '5:30 PM',
    points: -1,
  },
    {
    code: 'MP004',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Qāf',
    reason: 'Chest No. 508 is absent for Event A1.',
    reporter: 'Stage Manager',
    date: '2025-10-18',
    time: '5:30 PM',
    points: -1,
  },
    {
    code: 'MP004',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Qāf',
    reason: 'Chest No. 683 is absent for Event D36.',
    reporter: 'Stage Manager',
    date: '2025-10-18',
    time: '5:30 PM',
    points: -1,
  },
    {
    code: 'MP004',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Qāf',
    reason: 'Chest No. 593  is absent for Event B39.',
    reporter: 'Stage Manager',
    date: '2025-10-18',
    time: '5:30 PM',
    points: -1,
  },
    {
    code: 'MP004',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Qāf',
    reason: 'Chest No. 527,552 is absent for Event B5.',
    reporter: 'Stage Manager',
    date: '2025-10-18',
    time: '5:30 PM',
    points: -4,
  },
    {
    code: 'MP004',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Qāf',
    reason: 'Chest No. 658 is absent for Event C12.',
    reporter: 'Stage Manager',
    date: '2025-10-18',
    time: '5:30 PM',
    points: -1,
  },
    {
    code: 'MP004',
    status: 'Applied',
    severity: 'Medium Severity',
    teamName: 'Qāf',
    reason: 'Chest No. 593 is absent for Event B18.',
    reporter: 'Stage Manager',
    date: '2025-10-18',
    time: '5:30 PM',
    points: -2,
  },
     
  /*
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
  */
  

];

const teamsSummary = [
  { name: 'Meem', totalDeduction: -31, incidents: 25 },
  { name: 'Dal', totalDeduction: -36, incidents: 25 },
  { name: 'Seen', totalDeduction: -5, incidents: 5 },
  { name: 'Qāf', totalDeduction: -24, incidents: 9 },
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
        <div  key={index} className={`team ${team.name.toLowerCase().replace(' ', '-')}`}>
          <h3>{team.name}</h3>
          <p  style={{ color: '#ff0800ff', }}>Total Deduction:  { team.totalDeduction} pts</p>
          <p>Incidents: {team.incidents}</p>
        </div>
      ))}
    </section>

    <DetailedPenaltyRecords />
    <PenaltyGuidelines />
  </div>
);

export default MinusPointsPage;
