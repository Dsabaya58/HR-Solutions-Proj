import React from 'react';
import { Container, Grid, Paper, Typography, Button, Box, Divider } from '@mui/material';
import Notifications from '../components/employees/Notifications';
import Attendance from '../components/employees/Attendance';
import Statistics from '../components/employees/Statistics';
import WorkingHours from '../components/employees/WorkingHours';
import Holidays from '../components/employees/Holidays';
import Meetings from '../components/employees/Meetings';

const App = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ mt: 2 }}>
        <Paper elevation={3} sx={{ p: 2, mb: 2, backgroundColor: '#e6ffe6', borderRadius: '12px' }}>
          <Typography variant="subtitle1" color="success.main">
            Your Leave Request on "24th April 2024" has been Approved!!!
          </Typography>
        </Paper>
        <Grid container spacing={2}>
        <Grid item xs={12}>
          <Meetings />
          </Grid>
          <Grid item xs={12} md={8}>
            <WorkingHours />
          </Grid>
          <Grid item xs={12} md={4}>
            <Notifications />
          </Grid>
          <Grid item xs={12} md={4}>
            <Statistics />
          </Grid>
          <Grid item xs={12} md={4}>
            <Attendance />
          </Grid>
          <Grid item xs={12} md={4}>
            <Holidays />
          </Grid>
          
        </Grid>
      </Box>
    </Container>
  );
};

export default App;