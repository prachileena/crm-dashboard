import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';

// Register the necessary elements
Chart.register(ArcElement);

const PieChart = ({ data }) => {
  const chartData = {
    labels: ['Product A', 'Product B', 'Product C'],
    datasets: [
      {
        data: data || [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true, // Keep aspect ratio while resizing
  };

  return (
    <div
      style={{
        width: '350px',
        height: '350px',
        marginLeft: '200px',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '15px',
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.3s ease-in-out',
        cursor: 'pointer',
      }}
      onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
      onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
