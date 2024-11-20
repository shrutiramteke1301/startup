import React from 'react';
import StartupRegistration from './StartupRegistration';  // Import the form component

const Settings = () => {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Settings
      </h1>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Startup Registration
        </h2>
        {/* Include the StartupRegistration Form Component here */}
        <StartupRegistration />
      </div>
    </div>
  );
};

export default Settings;
