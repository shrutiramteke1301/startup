import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import ContentArea from './components/ContentArea';
import './index.css'; // Assuming you have Tailwind setup here

const App = () => {
  const [activeOption, setActiveOption] = React.useState('User Profile');

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        {/* Left Sidebar */}
        <div className="w-64 bg-blue-600 text-white h-full p-4 fixed left-0 top-0">
          <LeftSidebar
            activeOption={activeOption}
            setActiveOption={setActiveOption}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-64 mr-64 p-4">
          <ContentArea activeOption={activeOption} />
        </div>

        {/* Right Sidebar */}
        <div className="w-64 bg-gray-800 text-white h-full p-4 fixed right-0 top-0">
          <RightSidebar />
        </div>
      </div>
    </Router>
  );
};

export default App;
