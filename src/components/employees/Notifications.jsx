import React from 'react';
import { List, ListItem, ListItemText, Typography, Paper, Tabs, Tab } from '@mui/material';

const notifications = [
  { time: '02:10 PM | 21 Apr 2024', text: 'Your leave request has been' },
  { time: '12:40 PM | 21 Apr 2024', text: 'You’re enrolled in upcom....' },
  { time: '11:00 AM | 21 Apr 2024', text: 'Your annual compliance trai' },
  { time: '10:30 AM | 21 Apr 2024', text: 'Jessica has requested feedba' },
  { time: '09:00 AM | 21 Apr 2024', text: 'Gentle reminder about train' },
  { time: '11:50 AM | 21 Apr 2024', text: 'Our HR system will be down' },
];

const Notifications = () => (
  <Paper elevation={3} sx={{ p: 2, height: '100%', backgroundColor: '#fff', borderRadius: '12px' }}>
    <Typography variant="h6" sx={{ mb: 2 }}>Important</Typography>
    <Tabs value={0} indicatorColor="primary" textColor="primary">
      <Tab label="Notifications" />
      <Tab label="Schedules" />
    </Tabs>
    <List>
      {notifications.map((notification, index) => (
        <ListItem key={index} sx={{ p: 0 }}>
          <ListItemText primary={notification.text} secondary={notification.time} />
        </ListItem>
      ))}
    </List>
  </Paper>
);

export default Notifications;
