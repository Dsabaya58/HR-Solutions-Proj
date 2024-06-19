import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Select, MenuItem, Box, Avatar, Chip, Button, Typography } from '@mui/material';

const CreateProjectModal = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Create Project</DialogTitle>
      <DialogContent>
        <Box component="form" noValidate autoComplete="off" sx={{ display: 'grid', gap: 2 }}>
          <TextField label="Project Name" fullWidth />
          <TextField label="Client" fullWidth defaultValue="Global Technologies" />
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField label="Start Date" type="date" InputLabelProps={{ shrink: true }} fullWidth />
            <TextField label="End Date" type="date" InputLabelProps={{ shrink: true }} fullWidth />
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField label="Rate" defaultValue="$50" fullWidth />
            <Select defaultValue="Hourly" fullWidth>
              <MenuItem value="Hourly">Hourly</MenuItem>
              <MenuItem value="Daily">Daily</MenuItem>
              <MenuItem value="Weekly">Weekly</MenuItem>
              <MenuItem value="Monthly">Monthly</MenuItem>
            </Select>
            <Select defaultValue="High" fullWidth>
              <MenuItem value="High">High</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Low">Low</MenuItem>
            </Select>
          </Box>
          <TextField label="Add Project Leader" fullWidth />
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Typography variant="body1">Team Leader</Typography>
            <Avatar src="/images/avatar1.png" />
          </Box>
          <TextField label="Add Team" fullWidth />
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Typography variant="body1">Team Members</Typography>
            <Avatar src="/images/avatar2.png" />
            <Avatar src="/images/avatar3.png" />
            <Avatar src="/images/avatar4.png" />
            <Avatar src="/images/avatar5.png" />
            <Chip label="+2" />
          </Box>
          <TextField label="Description" multiline rows={4} fullWidth />
          <Button variant="contained" component="label">
            Choose File
            <input type="file" hidden />
          </Button>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" variant="contained">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateProjectModal;
