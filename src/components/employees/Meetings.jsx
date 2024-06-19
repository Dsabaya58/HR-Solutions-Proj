import React from 'react';
import { Box, Button, Typography, Paper, Avatar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Meetings = () => (
  <Paper elevation={3} sx={{ p: 2, height: '100%', backgroundColor: '#fff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    <Box sx={{ display: 'flex', alignItems: 'center'}}>
      <Avatar sx={{ bgcolor: '#ff5722', mr: 2 }}>
        <AccountCircleIcon />
      </Avatar>
      <Box>
        <Typography variant="h6">Welcome Back, Darlee</Typography>
        <Typography variant="body1">You have <strong>4 meetings</strong> today</Typography>
      </Box>
    </Box>
    <Button variant="contained" color="primary" >View Profile</Button>
  </Paper>
);

export default Meetings;
