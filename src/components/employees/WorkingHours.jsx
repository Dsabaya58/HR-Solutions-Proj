import React from 'react';
import { Box, Typography, Paper, Select, MenuItem } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    title: { display: true, text: 'Working Hours' },
  },
};

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    { label: 'Working Hours', data: [200, 220, 210, 230, 240, 250, 260], backgroundColor: 'rgba(75, 192, 192, 0.2)', borderColor: 'rgba(75, 192, 192, 1)', borderWidth: 1 },
    { label: 'Overtime Hours', data: [20, 30, 25, 35, 40, 45, 50], backgroundColor: 'rgba(255, 99, 132, 0.2)', borderColor: 'rgba(255, 99, 132, 1)', borderWidth: 1 },
  ],
};

const WorkingHours = () => (
  <Paper elevation={3} sx={{ p: 2, backgroundColor: '#fff', borderRadius: '12px' }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography variant="h6">Working Hours</Typography>
      <Select defaultValue="This Week" variant="outlined" size="small" sx={{ minWidth: 120 }}>
      <MenuItem value="This Week">This Week</MenuItem>
        <MenuItem value="Last Week">Last Week</MenuItem>
        <MenuItem value="This Month">This Month</MenuItem>
        <MenuItem value="Last 30 Days">Last 30 days</MenuItem>
      </Select>
    </Box>
    <Box sx={{ mt: 2 }}>
      <Bar options={options} data={data} />
    </Box>
  </Paper>
);

export default WorkingHours;
