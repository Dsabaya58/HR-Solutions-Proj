// src/components/AddUserModal.jsx
import React, { useState } from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Grid, Select, MenuItem, FormControl, InputLabel, Checkbox, FormControlLabel, Typography, Box
} from '@mui/material';
import styled from '@emotion/styled';

const PermissionsGrid = styled(Grid)`
  margin-top: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
`;

const AddUserModal = ({ open, onClose }) => {
  const [formValues, setFormValues] = useState({
    firstName: '', lastName: '', username: '', email: '', password: '', confirmPassword: '',
    phone: '', role: 'Admin', company: 'Global Technologies', employeeId: '', permissions: {
      Employee: { read: true, write: false, create: false, delete: false, import: false, export: false },
      Holidays: { read: true, write: false, create: false, delete: false, import: false, export: false },
      Leaves: { read: true, write: false, create: false, delete: false, import: false, export: false },
      Events: { read: true, write: false, create: false, delete: false, import: false, export: false },
    }
  });

  const handleChange = (field, value) => {
    setFormValues({ ...formValues, [field]: value });
  };

  const handlePermissionChange = (module, permission) => {
    setFormValues({
      ...formValues,
      permissions: {
        ...formValues.permissions,
        [module]: {
          ...formValues.permissions[module],
          [permission]: !formValues.permissions[module][permission]
        }
      }
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formValues);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Add User</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField 
              label="First Name" 
              variant="outlined" 
              fullWidth 
              required 
              value={formValues.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField 
              label="Last Name" 
              variant="outlined" 
              fullWidth 
              required 
              value={formValues.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField 
              label="Username" 
              variant="outlined" 
              fullWidth 
              required 
              value={formValues.username}
              onChange={(e) => handleChange('username', e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField 
              label="Email" 
              variant="outlined" 
              fullWidth 
              required 
              value={formValues.email}
              onChange={(e) => handleChange('email', e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField 
              label="Password" 
              variant="outlined" 
              fullWidth 
              required 
              type="password"
              value={formValues.password}
              onChange={(e) => handleChange('password', e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField 
              label="Confirm Password" 
              variant="outlined" 
              fullWidth 
              required 
              type="password"
              value={formValues.confirmPassword}
              onChange={(e) => handleChange('confirmPassword', e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField 
              label="Phone" 
              variant="outlined" 
              fullWidth 
              value={formValues.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel>Role</InputLabel>
              <Select
                value={formValues.role}
                onChange={(e) => handleChange('role', e.target.value)}
                label="Role"
              >
                <MenuItem value="Admin">Admin</MenuItem>
                <MenuItem value="Client">Client</MenuItem>
                <MenuItem value="Employee">Employee</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField 
              label="Employee ID" 
              variant="outlined" 
              fullWidth 
              required 
              value={formValues.employeeId}
              onChange={(e) => handleChange('employeeId', e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel>Company</InputLabel>
              <Select
                value={formValues.company}
                onChange={(e) => handleChange('company', e.target.value)}
                label="Company"
              >
                <MenuItem value="Global Technologies">Global Technologies</MenuItem>
                <MenuItem value="Dreamguys Technologies">Dreamguys Technologies</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <PermissionsGrid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h6">Module Permission</Typography>
          </Grid>
          {Object.keys(formValues.permissions).map(module => (
            <Grid item xs={12} key={module}>
              <Typography variant="subtitle1">{module}</Typography>
              <Box display="flex" justifyContent="space-around">
                {Object.keys(formValues.permissions[module]).map(permission => (
                  <FormControlLabel
                    key={permission}
                    control={
                      <Checkbox 
                        checked={formValues.permissions[module][permission]} 
                        onChange={() => handlePermissionChange(module, permission)}
                      />
                    }
                    label={permission.charAt(0).toUpperCase() + permission.slice(1)}
                  />
                ))}
              </Box>
            </Grid>
          ))}
        </PermissionsGrid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">Cancel</Button>
        <Button onClick={handleSubmit} color="primary">Submit</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddUserModal;
