// src/components/AddActivityModal.js
import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, MenuItem, IconButton, Box, Grid } from '@mui/material';
import { Close } from '@mui/icons-material';
import Autocomplete from '@mui/material/Autocomplete';

const AddActivityModal = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    dueDate: '',
    time: '',
    reminder: '',
    owner: '',
    guests: [],
    description: '',
    deals: '',
    contacts: '',
    company: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGuestsChange = (event, newValue) => {
    setFormData({ ...formData, guests: newValue });
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        Add New Activity
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Box component="form" noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                margin="dense"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                type="date"
                label="Due Date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
                margin="dense"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                type="time"
                label="Time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
                margin="dense"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Reminder"
                name="reminder"
                value={formData.reminder}
                onChange={handleChange}
                required
                margin="dense"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                select
                fullWidth
                label="Owner"
                name="owner"
                value={formData.owner}
                onChange={handleChange}
                required
                margin="dense"
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="Owner1">Owner1</MenuItem>
                <MenuItem value="Owner2">Owner2</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                multiple
                options={['Promotion', 'Rated']}
                getOptionLabel={(option) => option}
                value={formData.guests}
                onChange={handleGuestsChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    label="Guests"
                    name="guests"
                    required
                    margin="dense"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                margin="dense"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                select
                fullWidth
                label="Deals"
                name="deals"
                value={formData.deals}
                onChange={handleChange}
                required
                margin="dense"
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="Deal1">Deal1</MenuItem>
                <MenuItem value="Deal2">Deal2</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                select
                fullWidth
                label="Contacts"
                name="contacts"
                value={formData.contacts}
                onChange={handleChange}
                required
                margin="dense"
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="Contact1">Contact1</MenuItem>
                <MenuItem value="Contact2">Contact2</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                select
                fullWidth
                label="Company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                margin="dense"
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="Company1">Company1</MenuItem>
                <MenuItem value="Company2">Company2</MenuItem>
              </TextField>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Reset</Button>
        <Button variant="contained" color="primary">Save Activity</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddActivityModal;
