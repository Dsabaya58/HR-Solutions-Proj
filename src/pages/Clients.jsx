// src/App.jsx
import React, { useState } from 'react';
import { Container, Grid, TextField, Button, MenuItem, Select, InputLabel, FormControl, Box, Typography, CssBaseline } from '@mui/material';
import ClientCard from '../components/ClientCard';
import BarryImage from '../assets/images/img-1.jpg';
import TresImage from '../assets/images/img-2.jpg'
import RubyImage from '../assets/images/img-3.jpg'
import MishyImage from '../assets/images/img-4.jpg'
import DanielImage from '../assets/images/img-5.jpg'
import WalterImage from '../assets/images/img-6.jpg'
import AmandaImage from '../assets/images/img-1.jpg'
import BrettyImage from '../assets/images/img-1.jpg'

const clients = [
  { id: 1, company: 'Global Technologies', name: 'Barry Cuda', role: 'CEO', image: BarryImage },
  { id: 2, company: 'Delta Infotech', name: 'Tressa Wexler', role: 'Manager', image: TresImage },
  { id: 3, company: 'Cream Inc', name: 'Ruby Bartlett', role: 'CEO', image: RubyImage },
  { id: 4, company: 'Wellware Company', name: 'Misty Tison', role: 'CEO', image: MishyImage },
  { id: 5, company: 'Mustang Technologies', name: 'Daniel Deacon', role: 'CEO', image: DanielImage },
  { id: 6, company: 'International Software', name: 'Walter Weaver', role: 'CEO', image: WalterImage },
  { id: 7, company: 'Mercury Software Inc', name: 'Amanda Warren', role: 'CEO', image: AmandaImage },
  { id: 8, company: 'Carlson Technologies', name: 'Bretty Carlson', role: 'CEO', image: BrettyImage },
];

const Clients = () => {
  const [filteredClients, setFilteredClients] = useState(clients);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');

  const handleSearch = () => {
    let filtered = clients.filter(client => 
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
      (selectedCompany ? client.company === selectedCompany : true)
    );
    setFilteredClients(filtered);
  };

  const handleAddClient = () => {
    // Handle add client logic here
    console.log('Add new client');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <CssBaseline />
      <Box sx={{ flexGrow: 0, padding: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h4">Clients</Typography>
          <Button variant="contained" color="primary" onClick={handleAddClient}>
            Add New Client
          </Button>
        </Box>
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ marginBottom: 2 }}>
          <Grid item xs={3}>
            <TextField
              fullWidth
              label="Client Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <InputLabel>Company</InputLabel>
              <Select
                value={selectedCompany}
                label="Company"
                onChange={(e) => setSelectedCompany(e.target.value)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {clients.map(client => (
                  <MenuItem key={client.id} value={client.company}>{client.company}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <Button fullWidth variant="contained" color="primary" onClick={handleSearch}>
              Search
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, overflow: 'auto', padding: 2 }}>
        <Grid container spacing={2}>
          {filteredClients.map(client => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={client.id}>
              <ClientCard client={client} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Clients;
