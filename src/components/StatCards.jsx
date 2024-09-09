import React from 'react';
import { Card, Typography, Box } from '@mui/material';

const StatCards = ({ title, value, onClick }) => {
  return (
    <Card
      onClick={onClick}
      sx={{
        background: 'linear-gradient(45deg, #7B1FA2, #1E88E5)', // Purple to blue gradient
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
        borderRadius: '20px',
        padding: '24px',
        cursor: 'pointer',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0px 15px 25px rgba(0, 0, 0, 0.3)',
        },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: 'white',
          fontWeight: 'bold',
          marginBottom: '8px',
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h3"
        sx={{
          color: 'white',
          fontWeight: '900',
        }}
      >
        {value}
      </Typography>
    </Card>
  );
};

export default StatCards;
