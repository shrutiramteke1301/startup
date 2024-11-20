import React, { useEffect, useState } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2'; // Import necessary chart components
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Tooltip, Legend } from 'chart.js';

// Register necessary chart elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement, // Register Bar chart element
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

const Tracking = () => {
  const [startupData, setStartupData] = useState([]);

  useEffect(() => {
    // Fetch dummy data (replace with actual API calls)
    fetch('/api/startup-data')
      .then((response) => response.json())
      .then((data) => {
        setStartupData(data);
      })
      .catch((error) => console.error('Error fetching startup data:', error));
  }, []);

  // Dummy monthly data for financial metrics
  const financialData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Revenue ($)',
        data: [5000, 7000, 8000, 10000, 12000, 15000, 17000],
        fill: false,
        borderColor: '#4caf50',
        tension: 0.1,
      },
      {
        label: 'Burn Rate ($)',
        data: [2000, 2500, 3000, 3500, 4000, 4500, 5000],
        fill: false,
        borderColor: '#f44336',
        tension: 0.1,
      },
    ],
  };

  // Dummy monthly data for customer metrics (MAU, CAC, Churn Rate)
  const customerMetrics = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Monthly Active Users (MAU)',
        data: [1000, 1200, 1500, 1800, 2200, 2500, 3000],
        backgroundColor: '#2196f3',
      },
      {
        label: 'Customer Acquisition Cost (CAC)',
        data: [50, 55, 60, 65, 70, 75, 80],
        backgroundColor: '#9c27b0',
      },
      {
        label: 'Churn Rate (%)',
        data: [5, 6, 4, 3, 2, 1, 1],
        backgroundColor: '#ff9800',
      },
    ],
  };

  // Dummy data for market position (Pie chart)
  const marketPosition = {
    labels: ['Market Share', 'Competitors'],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ['#4caf50', '#f44336'],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="tracking-page p-8">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Startup Progress Tracker</h2>

      {/* Financial Metrics Section */}
      <div className="mb-8">
        <h3 className="text-3xl font-semibold mb-4 text-gray-800">Financial Metrics</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-green-600">Revenue ($)</h3>
            <Line data={financialData} />
          </div>
          <div className="card bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-red-600">Burn Rate ($)</h3>
            <Line data={financialData} />
          </div>
          <div className="card bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Funding Raised</h3>
            <Pie data={marketPosition} />
          </div>
        </div>
      </div>

      {/* Customer Metrics Section */}
      <div className="mb-8">
        <h3 className="text-3xl font-semibold mb-4 text-gray-800">Customer Metrics</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Monthly Active Users (MAU)</h3>
            <Bar data={customerMetrics} />
          </div>
          <div className="card bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-purple-600">Customer Acquisition Cost (CAC)</h3>
            <Bar data={customerMetrics} />
          </div>
          <div className="card bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-orange-600">Churn Rate</h3>
            <Bar data={customerMetrics} />
          </div>
        </div>
      </div>

      {/* Market Position Section */}
      <div className="mb-8">
        <h3 className="text-3xl font-semibold mb-4 text-gray-800">Market Position</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-green-600">Market Share</h3>
            <Pie data={marketPosition} />
          </div>
        </div>
      </div>

      {/* Financial Metrics Comparison - Monthly */}
      <div className="mb-8">
        <h3 className="text-3xl font-semibold mb-4 text-gray-800">Financial Comparison (Monthly)</h3>
        <div className="card bg-white shadow-lg rounded-lg p-6">
          <Line data={financialData} />
        </div>
      </div>
    </div>
  );
};

export default Tracking;