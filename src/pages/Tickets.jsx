// src/App.jsx
import React from 'react';
import { Container, Typography, Box, Button, Grid, TextField, MenuItem, Card, CardContent } from '@mui/material';
import styled from '@emotion/styled';
import TicketList from '../components/TicketList'

const ContainerStyled = styled(Container)`
  margin-top: 24px;
`;

const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const CardStyled = styled(Card)`
  text-align: center;
  padding: 16px;
  background-color: #f5f5f5;
`;

const CardTitle = styled(Typography)`
  font-size: 1rem;
  font-weight: bold;
`;

const CardCount = styled(Typography)`
  font-size: 2rem;
  font-weight: bold;
`;

const CardChange = styled(Typography)`
  font-size: 0.875rem;
`;

const FilterContainer = styled(Box)`
  margin-top: 24px;
`;

const FilterItem = styled(Grid)`
  margin-bottom: 16px;
`;

const ButtonStyled = styled(Button)`
  background-color: #4caf50;
  color: #fff;

  &:hover {
    background-color: #45a049;
  }
`;

const stats = [
  { title: 'New Tickets', count: 112, change: '+10%', color: 'green' },
  { title: 'Solved Tickets', count: 70, change: '+12.5%', color: 'green' },
  { title: 'Open Tickets', count: 100, change: '-2.8%', color: 'red' },
  { title: 'Pending Tickets', count: 125, change: '-75%', color: 'red' },
];

function App() {
  return (
    <ContainerStyled maxWidth="100%">
      <Header>
        <Typography variant="h4" component="h1">
          Tickets
        </Typography>
        <Button variant="contained" backgroundColor='#1e88e5'>Add Ticket</Button>
      </Header>
      <Grid container spacing={2}>
        {stats.map((stat, index) => (
          <Grid item xs={3} key={index}>
            <CardStyled sx={{ backgroundColor: '#e3f2fd', borderLeft: '5px solid #1e88e5' }}>
              <CardContent>
                <CardTitle>{stat.title}</CardTitle>
                <CardCount>{stat.count}</CardCount>
                <CardChange style={{ color: stat.color }}>{stat.change}</CardChange>
              </CardContent>
            </CardStyled>
          </Grid>
        ))}
      </Grid>
      <FilterContainer>
        <Grid container spacing={2}>
          <Grid item xs={3} className={FilterItem}>
            <TextField fullWidth label="Employee Name" variant="outlined" />
          </Grid>
          <Grid item xs={3} className={FilterItem}>
            <TextField select fullWidth label="Status" variant="outlined">
              <MenuItem value="new">New</MenuItem>
              <MenuItem value="open">Open</MenuItem>
              <MenuItem value="solved">Solved</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={3} className={FilterItem}>
            <TextField select fullWidth label="Priority" variant="outlined">
              <MenuItem value="high">High</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="low">Low</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={3} className={FilterItem}>
            <Button variant="contained" fullWidth backgroundColor='#1e88e5'>
              Search
            </Button>
          </Grid>
        </Grid>
      </FilterContainer><br />
      <TicketList />
    </ContainerStyled>
  );
}

export default App;
