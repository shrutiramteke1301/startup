import React from 'react';
import UserProfile from './UserProfile';
import Tracking from './Tracking';
import FinalReporting from './FinalReporting';
import Other from './Other';
import Settings from './Settings';

const ContentArea = ({ activeOption }) => {
  const renderContent = () => {
    switch (activeOption) {
      case 'User Profile':
        return <UserProfile />;
      case 'Tracking':
        return <Tracking />;
      case 'Final Reporting':
        return <FinalReporting />;
      case 'Other':
        return <Other />;
      case 'Settings':
        return <Settings />;
      default:
        return <UserProfile />;
    }
  };

  return (
    <div className="bg-white shadow-md p-6 rounded h-full">
      <h3 className="text-xl font-bold mb-4">{activeOption}</h3>
      {renderContent()}
    </div>
  );
};

export default ContentArea;
