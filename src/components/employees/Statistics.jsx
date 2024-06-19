import React from 'react';
import { Box, Typography, Button, Select, MenuItem, Paper, Divider } from '@mui/material';

const Statistics = () => (
  <Paper elevation={3} sx={{ p: 2, height: '100%', backgroundColor: '#fff', borderRadius: '12px' }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography variant="h6">Statistics</Typography>
      <Select defaultValue="Today" variant="outlined" size="small" sx={{ minWidth: 80 }}>
        <MenuItem value="Today">Today</MenuItem>
        <MenuItem value="Week">Week</MenuItem>
        <MenuItem value="Month">Month</MenuItem>
        <MenuItem value="Year">Year</MenuItem>
      </Select>
    </Box>
    <Box sx={{ mt: 2 }}>
      <Typography variant="body1">Work Time: <strong>6 Hrs : 54 Min</strong></Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1, flexDirection:'row' }}>
        <Typography variant="body2">Remaining: <strong>2 Hrs 36 Min</strong> </Typography>
        <Typography variant="body2">Overtime: <strong>0 Hrs 00 Min</strong> </Typography>
        <Typography variant="body2">Break: <strong>1 Hrs 20 Min</strong> </Typography>
      </Box>
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>Clock-In</Button>
    </Box><br />
    <Divider />
    <Button variant="text" color="primary" sx={{ mt: 2 }}>View Attendance</Button>
  </Paper>
);

export default Statistics;
