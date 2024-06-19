// src/components/UsersPage.jsx
import React, { useState } from 'react';
import { 
  Container, TextField, Button, Select, MenuItem, Table, TableBody, TableCell, 
  TableContainer, TableHead, TableRow, Paper, Avatar, IconButton, FormControl, InputLabel, TablePagination
} from '@mui/material';
import { Add } from '@mui/icons-material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styled from '@emotion/styled';
import AddUserModal from '../components/AddUserModal';

const initialUsers = [
  { name: "BarryCuda", role: "Android Developer", email: "barrycuda@example.com", company: "Global Technologies", createdDate: "1 Jan 2013", status: "Client" },
  { name: "John Doe", role: "Web Designer", email: "johndoe@example.com", company: "Dreamguys Technologies", createdDate: "1 Jan 2013", status: "Admin" },
  { name: "Richard Miles", role: "Admin", email: "richardmiles@example.com", company: "Dreamguys Technologies", createdDate: "1 Jan 2013", status: "Employee" },
  { name: "John Smith", role: "Android Developer", email: "johnsmith@example.com", company: "Dreamguys Technologies", createdDate: "1 Jan 2013", status: "Employee" },
  { name: "Mike Litorus", role: "IOS Developer", email: "mikelitorus@example.com", company: "Dreamguys Technologies", createdDate: "1 Jan 2013", status: "Employee" },
  { name: "Wilmer Deluna", role: "Team Leader", email: "wilmerdeluna@example.com", company: "Dreamguys Technologies", createdDate: "1 Jan 2013", status: "Employee" },
  { name: "BarryCuda", role: "Team Leader", email: "barrycuda@example.com", company: "Global Technologies", createdDate: "1 Jan 2013", status: "Client" },
  { name: "BarryCuda", role: "Android Developer", email: "barrycuda@example.com", company: "Global Technologies", createdDate: "1 Jan 2013", status: "Client" },
  { name: "John Doe", role: "Web Designer", email: "johndoe@example.com", company: "Dreamguys Technologies", createdDate: "1 Jan 2013", status: "Admin" },
  { name: "Richard Miles", role: "Admin", email: "richardmiles@example.com", company: "Dreamguys Technologies", createdDate: "1 Jan 2013", status: "Employee" }
];

const StyledTableCell = styled(TableCell)`
  font-weight: bold;
`;

const UsersPage = () => {
  const [users, setUsers] = useState(initialUsers);
  const [searchName, setSearchName] = useState('');
  const [filterCompany, setFilterCompany] = useState('');
  const [filterRole, setFilterRole] = useState('');
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSearchChange = (event) => {
    setSearchName(event.target.value);
  };

  const handleCompanyChange = (event) => {
    setFilterCompany(event.target.value);
  };

  const handleRoleChange = (event) => {
    setFilterRole(event.target.value);
  };

  const handleAddUser = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredUsers = users.filter(user => {
    return (
      user.name.toLowerCase().includes(searchName.toLowerCase()) &&
      (!filterCompany || user.company === filterCompany) &&
      (!filterRole || user.role === filterRole)
    );
  });

  return (
    <Container maxWidth='100%'>
      <header style={{ display: 'flex', justifyItems: 'flex-end', justifyContent:'space-between' }}>
      <h2>Users</h2>
      <Button variant="contained" color="primary" onClick={handleAddUser} style={{ height: 40, marginTop: 40 }}>
          <Add /> Add User
        </Button>
      </header>
      
      <div>
        <TextField label="Name" variant="outlined" value={searchName} onChange={handleSearchChange} />
        <FormControl variant="outlined" style={{ minWidth: 120, marginLeft: 20 }}>
          <InputLabel>Company</InputLabel>
          <Select value={filterCompany} onChange={handleCompanyChange} label="Company">
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value="Global Technologies">Global Technologies</MenuItem>
            <MenuItem value="Dreamguys Technologies">Dreamguys Technologies</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" style={{ minWidth: 120, marginLeft: 20 }}>
          <InputLabel>Role</InputLabel>
          <Select value={filterRole} onChange={handleRoleChange} label="Role">
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value="Admin">Admin</MenuItem>
            <MenuItem value="Client">Client</MenuItem>
            <MenuItem value="Employee">Employee</MenuItem>
          </Select>
        </FormControl>
        
      </div>
      <TableContainer component={Paper} style={{ marginTop: 20 }}>
        <Table>
          <TableHead sx={{ backgroundColor: '#f5f5f5'}}>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Company</StyledTableCell>
              <StyledTableCell>Created Date</StyledTableCell>
              <StyledTableCell>Role</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user, index) => (
              <TableRow key={index}>
                <TableCell display='flex'>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Avatar>{user.name[0]}</Avatar>
                    <div>
                      {user.name} <br />
                      {user.role}
                    </div>
                  </div>
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.company}</TableCell>
                <TableCell>{user.createdDate}</TableCell>
                <TableCell>{user.status}</TableCell>
                <TableCell>
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredUsers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
      <AddUserModal open={open} onClose={handleClose} />
    </Container>
  );
};

export default UsersPage;
