import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

// Register necessary elements
Chart.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BarChart = ({ data }) => {
  const chartData = {
    labels: ['January', 'February', 'March'],
    datasets: [
      {
        label: 'Sales',
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)', // Pink
          'rgba(54, 162, 235, 0.6)', // Blue
          'rgba(255, 206, 86, 0.6)', // Yellow
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 2,
        data: data || [65, 59, 80],
        borderRadius: 15,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Prevent fixed aspect ratio for better control
    animation: {
      duration: 1500,
      easing: 'easeInOutElastic',
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#333',
          font: {
            size: 14,
            weight: 'bold',
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          beginAtZero: true,
        },
        grid: {
          color: 'rgba(200, 200, 200, 0.3)',
        },
      },
    },
  };

  return (
    <div style={{ width: '600px', height: '400px' }}> {/* Adjust size here */}
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
