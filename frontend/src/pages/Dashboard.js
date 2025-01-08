import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import DashboardHeader from '../components/DashboardHeader';
import CryptoCards from '../components/CryptoCards';
import CryptoChart from '../components/CryptoChart';

const Dashboard = () => {
  const [selectedCoin, setSelectedCoin] = useState('bitcoin'); // Default to Bitcoin

  const onCardClick = (coinId) => {
    if (selectedCoin !== coinId) {
      setSelectedCoin(coinId);
    }
  };

  return (
    <div className="flex bg-darkBlue min-h-screen">
      <Navbar />
      <div className="flex-grow p-4 md:p-6 max-w-7xl mx-auto space-y-6">
        <DashboardHeader />
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-grow">
            <CryptoChart selectedCoin={selectedCoin} />
          </div>
          <div className="w-full md:w-1/3">
            <CryptoCards onCardClick={onCardClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
