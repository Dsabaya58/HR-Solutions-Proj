import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';

const Holidays = () => (
  <Paper elevation={3} sx={{ p: 2, height: '100%', backgroundColor: '#fff', borderRadius: '12px' }}>
    <Typography variant="h6">Upcoming Holidays</Typography>
    <Box sx={{ mt: 2, backgroundColor: '#e0f7fa', p: 2, borderRadius: '8px',display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between' }}>
      <Typography variant="body1">Eid al-Adha</Typography>
      <Typography variant="body2">Mon 17 June 2024</Typography>
      <Button variant="contained" color="primary" sx={{ mt: 0 }}>View All</Button>
    </Box>
  </Paper>
);

export default Holidays;
