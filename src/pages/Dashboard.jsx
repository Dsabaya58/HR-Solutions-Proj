import React, { useEffect } from 'react';
import { Grid, Paper, Typography, Box, MenuItem, Select, IconButton, Button } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { DataGrid } from '@mui/x-data-grid';
import Divider from '@mui/material/Divider';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Refresh, SaveAlt, Settings } from '@mui/icons-material';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const graphContainerStyle = { height: '400px' }; // Set a fixed height for the graph containers
  const paperStyle = { padding: '20px', marginBottom: '20px' };

  const dataDealsByStage = {
    labels: ['Inpipeline', 'Follow Up', 'Schedule', 'Conversation', 'Won', 'Lost'],
    datasets: [
      {
        label: 'Deals By Stage',
        data: [400, 30, 248, 470, 470, 180],
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
    ],
  };

  const dataLostDealsStage = {
    labels: ['Conversation', 'Follow Up', 'Inpipeline'],
    datasets: [
      {
        label: 'Lost Deals Stage',
        data: [180, 30, 400],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const dataWonDealsStage = {
    labels: ['Conversation', 'Follow Up', 'Inpipeline'],
    datasets: [
      {
        label: 'Won Deals Stage',
        data: [470, 248, 400],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const columns = [
    { field: 'dealName', headerName: 'Deal Name', width: 150 },
    { field: 'stage', headerName: 'Stage', width: 130 },
    { field: 'dealValue', headerName: 'Deal Value', width: 150 },
    { field: 'probability', headerName: 'Probability', width: 130 },
    { field: 'status', headerName: 'Status', width: 130 },
  ];

  const rows = [
    { id: 1, dealName: 'Collins', stage: 'Conversation', dealValue: '$04,51,000', probability: '85%', status: 'Open' },
    { id: 2, dealName: 'Konopelski', stage: 'Pipeline', dealValue: '$03,12,500', probability: '85%', status: 'Lost' },
    { id: 3, dealName: 'Adams', stage: 'Won', dealValue: '$04,14,800', probability: '80%', status: 'Won' },
    { id: 4, dealName: 'Schumm', stage: 'Lost', dealValue: '$9,14,400', probability: '47%', status: 'Lost' },
    { id: 5, dealName: 'Wisozk', stage: 'Follow Up', dealValue: '$11,14,400', probability: '98%', status: 'Lost' },
  ];

  useEffect(() => {
    return () => {
      // Cleanup code if needed
    };
  }, []);

  return (
    <Box>
        <Box>
            <Typography variant="h4" gutterBottom style={{ marginBottom: '20px' }}>
                Deals Dashboard
            </Typography>
            <Box display="flex" justifyContent="flex-end" alignItems="center">
                <IconButton size="small" sx={{ mr: 2 }}>
                    <Refresh />
                </IconButton>
                <IconButton size="small" sx={{ mr: 2 }}>
                    <SaveAlt />
                 </IconButton>
                <Button size="small" variant="outlined">
                    Export
                </Button>
            </Box>
        </Box><br />
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ ...paperStyle }}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h6">Deals By Stage</Typography>
              <Box display="flex" alignItems="center">
                <Select defaultValue="Marketing Pipeline" size="small" sx={{ mr: 2 }}>
                  <MenuItem value="Marketing Pipeline">Marketing Pipeline</MenuItem>
                </Select>
                <Select defaultValue="Last 3 months" size="small" sx={{ mr: 2 }}>
                  <MenuItem value="Last 3 months">Last 3 months</MenuItem>
                </Select>
               
              </Box>
            </Box>
            <div style={graphContainerStyle}>
              <Bar data={dataDealsByStage} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ ...paperStyle }}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h6">Recently Created Contacts</Typography>
              <Select defaultValue="Last 3 months" size="small">
                <MenuItem value="Last 3 months">Last 3 months</MenuItem>
              </Select>
            </Box>
            <div style={graphContainerStyle}>
              <DataGrid rows={rows} columns={columns} pageSize={5} />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ ...paperStyle }}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h6">Lost Deals Stage</Typography>
              <Box display="flex" alignItems="center">
                <Select defaultValue="Marketing Pipeline" size="small" sx={{ mr: 2 }}>
                  <MenuItem value="Marketing Pipeline">Marketing Pipeline</MenuItem>
                </Select>
                <Select defaultValue="Last 3 months" size="small" sx={{ mr: 2 }}>
                  <MenuItem value="Last 3 months">Last 3 months</MenuItem>
                </Select>
              </Box>
            </Box>
            <div style={graphContainerStyle}>
              <Bar data={dataLostDealsStage} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ ...paperStyle }}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h6">Won Deals Stage</Typography>
              <Box display="flex" alignItems="center">
                <Select defaultValue="Marketing Pipeline" size="small" sx={{ mr: 2 }}>
                  <MenuItem value="Marketing Pipeline">Marketing Pipeline</MenuItem>
                </Select>
                <Select defaultValue="Last 3 months" size="small" sx={{ mr: 2 }}>
                  <MenuItem value="Last 3 months">Last 3 months</MenuItem>
                </Select>
              </Box>
            </Box>
            <div style={graphContainerStyle}>
              <Bar data={dataWonDealsStage} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;

