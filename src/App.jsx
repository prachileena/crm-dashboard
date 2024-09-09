import React, { useEffect, useState } from 'react';
import { Grid, Container, Typography, Select, MenuItem, FormControl, InputLabel, Chip } from '@mui/material';
import StatCards from './components/StatCards';
import PieChart from './components/PieChart';
import BarChart from './components/BarChart';

const App = () => {
  const [data, setData] = useState(null);
  const [timeWindow, setTimeWindow] = useState('1w'); // Default to 1 week

  useEffect(() => {
    // Simulate fetching data based on the selected time window
    const fetchData = (window) => {
      const dummyData = {
        customers: window === '1d' ? 1000 : window === '1w' ? 1200 : 1500,
        sales: window === '1d' ? 50000 : window === '1w' ? 75000 : 100000,
        pieData: [window === '1d' ? 200 : 300, window === '1d' ? 30 : 50, window === '1d' ? 70 : 100],
        barData: [window === '1d' ? 40 : 65, window === '1d' ? 35 : 59, window === '1d' ? 55 : 80],
      };
      setData(dummyData);
    };

    fetchData(timeWindow);
  }, [timeWindow]);

  const handleTimeWindowChange = (event) => {
    setTimeWindow(event.target.value);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ marginBottom: '2rem' }}>
        CRM Statistics Dashboard
      </Typography>
      
      <FormControl fullWidth sx={{ marginBottom: '2rem', borderRadius: '8px', boxShadow: 3 }}>
        <InputLabel id="time-window-select-label" sx={{ color: '#333', fontWeight: 'bold' }}>Time Window</InputLabel>
        <Select
          labelId="time-window-select-label"
          value={timeWindow}
          onChange={handleTimeWindowChange}
          label="Time Window"
          sx={{
            borderRadius: '8px',
            '& .MuiSelect-select': {
              padding: '10px 14px',
              color: '#555',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#ddd',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#bbb',
            },
          }}
        >
          <MenuItem value="1d">Last 1 Day</MenuItem>
          <MenuItem value="1w">Last 1 Week</MenuItem>
          <MenuItem value="1m">Last 1 Month</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCards
            title="Total Customers"
            value={data?.customers || 0}
            onClick={() => handleCardClick('Total Customers', data?.customers || 0)}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCards
            title="Total Sales"
            value={data?.sales || 0}
            onClick={() => handleCardClick('Total Sales', data?.sales || 0)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <PieChart data={data?.pieData} />
        </Grid>
        <Grid item xs={12} md={6}>
          <BarChart data={data?.barData} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
