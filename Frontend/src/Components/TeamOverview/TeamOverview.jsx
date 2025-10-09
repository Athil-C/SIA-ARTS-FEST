import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Medal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useResults } from '../../../context/DataContext';
import LiveTicker from "../LiveTicker"; // Correct path

// Define team colors and styling
const TEAM_COLORS = {
  'ALEXANDRIA': { primary: '#4cad4e', gradient: 'from-[#4cad4e] to-[#3d8c3f]', light: '#e8f5e9' },
  'SHATIBIYA': { primary: '#c9194a', gradient: 'from-[#c9194a] to-[#a1143b]', light: '#fce4ec' },
  'SHAMIYA': { primary: '#6b3f24', gradient: 'from-[#6b3f24] to-[#4e2e1a]', light: '#efebe9' },
  'HIJAZIYYA': { primary: '#5a199b', gradient: 'from-[#5a199b] to-[#461477]', light: '#f3e5f5' },
  'QADISIYYA': { primary: '#33658a', gradient: 'from-[#33658a] to-[#254c68]', light: '#e3f2fd' },
  'KAZIMIYYA': { primary: '#ffb703', gradient: 'from-[#ffb703] to-[#cc9202]', light: '#fff8e1' },
  // New teams added with colors
  'QĀF': { primary: '#FF6F61', gradient: 'from-[#FF6F61] to-[#D45746]', light: '#FFD1C5' },
  'MEEM': { primary: '#6B8E23', gradient: 'from-[#6B8E23] to-[#556B2F]', light: '#B8E986' },
  'DAL': { primary: '#FFB84D', gradient: 'from-[#FFB84D] to-[#E29A34]', light: '#FFEBB8' },
  'SEEN': { primary: '#483D8B', gradient: 'from-[#483D8B] to-[#2A2A7A]', light: '#B0C4DE' }
};

const TEAM_NAME_MAP = {
  SHA: 'SHATIBIYA',
  ALE: 'ALEXANDRIA',
  KAZ: 'KAZIMIYYA',
  QAD: 'QADISIYYA',
  HIJ: 'HIJAZIYYA',
  SHM: 'SHAMIYA',
  QĀF: 'QĀF',
  MEE: 'MEEM',
  DAL: 'DAL',
  SEE: 'SEEN'
};

const TeamCard = ({ team, index, totalPoints }) => {
  const getMedalColor = (index) => {
    switch (index) {
      case 0: return '#FFD700'; // Gold
      case 1: return '#C0C0C0'; // Silver
      case 2: return '#CD7F32'; // Bronze
      default: return 'transparent';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="relative group"
    >
      <div
        className={`bg-gradient-to-br ${team.colors.gradient} rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] transform-gpu`}
      >
        <div className="bg-white dark:bg-[#2D2D2D] rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 flex items-center justify-center rounded-lg"
                style={{ backgroundColor: team.colors.light }}
              >
                <span
                  className="text-xl font-bold"
                  style={{ color: team.colors.primary }}
                >
                  {team.teamName.charAt(0)}
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold ">
                    {team.teamName}
                  </h3>
                  {index < 3 && (
                    <Medal
                      className="w-5 h-5"
                      style={{ color: getMedalColor(index) }}
                    />
                  )}
                </div>
                <p className="text-sm text-gray-500">
                  Rank #{index + 1}
                </p>
              </div>
            </div>
            <div className="text-right">
              <span className="font-bold text-lg ">
                {team.totalPoints.toLocaleString()}
              </span>
              <p className="text-xs text-gray-500">points</p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="w-full bg-gray-100 rounded-full h-3">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(team.totalPoints / totalPoints) * 100}%` }}
                className="h-full rounded-full transition-all duration-500"
                style={{ backgroundColor: team.colors.primary }}
              />
            </div>
            <div className="flex justify-between items-center text-xs text-gray-600">
              <span>Progress</span>
              <span className="font-medium">
                {((team.totalPoints / totalPoints) * 100).toFixed(1)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TeamOverview = () => {
  const navigate = useNavigate();
  const { results } = useResults();

  const calculateTeamPoints = () => {
    let currentResults = results;

    if (!currentResults || currentResults.length === 0) {
      const storedResults = localStorage.getItem('teamResults');
      currentResults = storedResults ? JSON.parse(storedResults) : [];
    }

    const teamPoints = {};
    currentResults.forEach((result) => {
      const teamName = TEAM_NAME_MAP[result.teamCode] || result.teamName.toUpperCase();
      if (!teamPoints[teamName]) {
        teamPoints[teamName] = 0;
      }
      teamPoints[teamName] += result.points;
    });

    return Object.entries(teamPoints)
      .map(([teamName, totalPoints]) => ({
        teamName,
        totalPoints,
        colors: TEAM_COLORS[teamName] || {
          primary: '#6B7280',
          gradient: 'from-gray-500 to-gray-600',
          light: '#F9FAFB'
        }
      }))
      .sort((a, b) => b.totalPoints - a.totalPoints);
  };

  const teams = calculateTeamPoints();
  const totalPoints = teams.reduce((sum, team) => sum + team.totalPoints, 0);

  return (
    <section className="min-h-screen w-full flex justify-center flex-col">
      {/* Live Ticker */}
      <LiveTicker />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-7xl p-3 sm:p-4 md:p-6 lg:p-8 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded-lg sm:flex">
              <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg lg:text-xl">Live Results</h3>
              <p className="text-xs sm:text-sm text-gray-500">Real-time team rankings</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {teams.map((team, index) => (
                <TeamCard
                  key={team.teamName}
                  team={team}
                  index={index}
                  totalPoints={totalPoints}
                />
              ))}
            </div>
          </div>

          {/* DistributionChart */}
          <div className="p-12 rounded-lg sm:rounded-xl order-1 lg:order-2 h-[300px] sm:h-[400px] lg:h-auto ">
            <h4 className="text-xs sm:text-sm font-medium text-gray-600 sm:mb-6 ms-[-20px] mt-[-20px] pb-4 mb-4">
              Points Distribution
            </h4>
            <div className="relative h-48 sm:h-60 lg:h-72">
              {teams.map((team, index) => (
                <motion.div
                  key={team.teamName}
                  initial={{ height: 0 }}
                  animate={{ height: `${(team.totalPoints / totalPoints) * 100}%` }}
                  className="absolute bottom-0 rounded-t-lg transition-all duration-300 hover:opacity-100 group"
                  style={{
                    left: `${(index * 100 / (teams.length - 1))}%`,
                    width: '40px',
                    transform: 'translateX(-50%)',
                    backgroundColor: team.colors.primary,
                    opacity: 0.85
                  }}
                >
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {team.teamName}: {team.totalPoints.toLocaleString()} pts
                  </div>

                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    <span className="text-xs font-medium text-gray-600 whitespace-nowrap">
                      {team.totalPoints.toLocaleString()}
                    </span>
                  </div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-center">
                    <span className="text-[10px] sm:text-xs font-medium text-gray-600 whitespace-nowrap">
                      {team.teamName.slice(0, 3)}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TeamOverview;
