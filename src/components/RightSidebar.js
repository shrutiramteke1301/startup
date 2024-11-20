import React from 'react';

const RightSidebar = () => {
  return (
    <div className="p-4 h-full">
      <h2 className="text-xl font-bold mb-4">Details</h2>
      <div className="mb-4 bg-white p-4 shadow-md rounded">
        <h3 className="text-lg font-semibold">Ongoing Achievements</h3>
        <p className="text-sm text-gray-600 mt-2">
          Current milestones and progress.
        </p>
      </div>
      <div className="mb-4 bg-white p-4 shadow-md rounded">
        <h3 className="text-lg font-semibold">Notifications</h3>
        <p className="text-sm text-gray-600 mt-2">
          Alerts and updates about tasks and achievements.
        </p>
      </div>
      <div className="bg-white p-4 shadow-md rounded">
        <h3 className="text-lg font-semibold">History</h3>
        <p className="text-sm text-gray-600 mt-2">
          Log of previous activities and reports.
        </p>
      </div>
    </div>
  );
};

export default RightSidebar;
