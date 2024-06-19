import React from 'react';
import { Box, Typography, Button, Select, MenuItem, Paper } from '@mui/material';

const Attendance = () => (
  <Paper elevation={3} sx={{ p: 2, height: '100%', backgroundColor: '#fff', borderRadius: '12px' }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography variant="h6">Attendance & Leaves</Typography>
      <Select defaultValue="2024" variant="outlined" size="small" sx={{ minWidth: 80 }}>
        <MenuItem value="2024">2024</MenuItem>
      </Select>
    </Box>
    <Box sx={{ mt: 2 }}>
      <Typography variant="body2">Total Leaves: <strong>9</strong></Typography>
      <Typography variant="body2">Leaves Taken: <strong>5.5</strong></Typography>
      <Typography variant="body2">Leaves Absent: <strong>4</strong></Typography>
      <Typography variant="body2">Pending Approval: <strong>0</strong></Typography>
      <Typography variant="body2">Working Days: <strong>214</strong></Typography>
      <Typography variant="body2">Loss of Pay: <strong>2</strong></Typography>
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>Apply Leave</Button>
    </Box>
  </Paper>
);

export default Attendance;
