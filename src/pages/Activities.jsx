// src/components/Notifications.js
import React, { useState } from 'react';
import { Box, Button, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, TextField, MenuItem, Toolbar, InputAdornment } from '@mui/material';
import { Add, Email, Phone, Assignment, Event, Search, Refresh, FilterList, ImportExport } from '@mui/icons-material';
import AddActivityModal from '../components/ActivityModal';
const notifications = [
  { title: 'We scheduled a meeting for next week', type: 'Meeting', dueDate: '10 Feb 2024, 09:00 am', owner: 'Hendry', createdAt: '08 Feb 2024, 10:00 am' },
  { title: 'Had conversation with Fred regarding task', type: 'Calls', dueDate: '24 Feb 2024, 12:20 pm', owner: 'Monty Beer', createdAt: '21 Feb 2024, 09:00 am' },
  { title: 'Analysing latest time estimation for new project', type: 'Email', dueDate: '05 Mar 2024, 10:00 am', owner: 'Bradtke', createdAt: '03 Mar 2024, 11:00 am' },
  { title: 'Store and manage contact data', type: 'Task', dueDate: '17 Mar 2024, 02:00 pm', owner: 'Swaniawski', createdAt: '15 Mar 2024, 12:00 pm' },
  { title: 'Call John and discuss about project', type: 'Calls', dueDate: '20 Apr 2024, 03:15 pm', owner: 'Itzel', createdAt: '18 Apr 2024, 01:15 pm' },
  { title: 'Will have a meeting before project start', type: 'Meeting', dueDate: '08 Apr 2024, 11:00 am', owner: 'Sally', createdAt: '05 Apr 2024, 03:20 pm' },
  { title: 'Built landing pages', type: 'Email', dueDate: '12 May 2024, 08:30 am', owner: 'Danny', createdAt: '10 May 2024, 11:30 am' },
  { title: 'Regarding latest updates in project', type: 'Meeting', dueDate: '26 May 2024, 04:10 pm', owner: 'Lynch', createdAt: '23 May 2024, 05:00 pm' },
];

const iconMap = {
    Meeting: <Event />,
    Calls: <Phone />,
    Email: <Email />,
    Task: <Assignment />,
  };
  
  const Activities = () => {
    const [filter, setFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleFilterChange = (event) => {
      setFilter(event.target.value);
    };
  
    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  
    const filteredNotifications = notifications.filter(notification =>
      (filter === 'All' || notification.type === filter) &&
      (notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notification.owner.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  
    return (
      <Box sx={{ padding: 2 }}>
        <Typography variant="h4" gutterBottom>Activities</Typography>
        <Toolbar sx={{ justifyContent: 'space-between', marginBottom: 2 }}>
          <Button variant="contained" startIcon={<Add />} onClick={handleOpenModal}>Add Activity</Button>
          <Box>
            <IconButton><Refresh /></IconButton>
            <IconButton><ImportExport /></IconButton>
            <IconButton><FilterList /></IconButton>
          </Box>
        </Toolbar>
        <Toolbar sx={{ justifyContent: 'space-between', marginBottom: 2 }}>
          <Box>
            <IconButton onClick={() => setFilter('All')} color={filter === 'All' ? 'primary' : 'default'}>All</IconButton>
            <IconButton onClick={() => setFilter('Meeting')} color={filter === 'Meeting' ? 'primary' : 'default'}>{iconMap['Meeting']}</IconButton>
            <IconButton onClick={() => setFilter('Calls')} color={filter === 'Calls' ? 'primary' : 'default'}>{iconMap['Calls']}</IconButton>
            <IconButton onClick={() => setFilter('Email')} color={filter === 'Email' ? 'primary' : 'default'}>{iconMap['Email']}</IconButton>
            <IconButton onClick={() => setFilter('Task')} color={filter === 'Task' ? 'primary' : 'default'}>{iconMap['Task']}</IconButton>
          </Box>
          <TextField
            label="Search"
            value={searchQuery}
            onChange={handleSearchChange}
            sx={{ width: 300 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Toolbar>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Activity Type</TableCell>
                <TableCell>Due Date</TableCell>
                <TableCell>Owner</TableCell>
                <TableCell>Created At</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredNotifications.map((notification, index) => (
                <TableRow key={index}>
                  <TableCell>{notification.title}</TableCell>
                  <TableCell>
                    <IconButton>{iconMap[notification.type]}</IconButton>
                    {notification.type}
                  </TableCell>
                  <TableCell>{notification.dueDate}</TableCell>
                  <TableCell>{notification.owner}</TableCell>
                  <TableCell>{notification.createdAt}</TableCell>
                  <TableCell>
                    <IconButton>...</IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <AddActivityModal open={isModalOpen} handleClose={handleCloseModal} />
      </Box>
    );
};

export default Activities;
