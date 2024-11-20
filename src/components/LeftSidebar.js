import React from 'react';

const LeftSidebar = ({ activeOption, setActiveOption }) => {
  const options = ['User Profile', 'Tracking', 'Final Reporting', 'Other', 'Settings'];

  return (
    <div className="p-4 h-full">
      <h2 className="text-xl font-bold mb-4">Options</h2>
      <ul className="space-y-4">
        {options.map((option) => (
          <li
            key={option}
            className={`p-3 rounded cursor-pointer ${
              activeOption === option ? 'bg-blue-500 text-white' : 'hover:bg-blue-300'
            }`}
            onClick={() => setActiveOption(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSidebar;
