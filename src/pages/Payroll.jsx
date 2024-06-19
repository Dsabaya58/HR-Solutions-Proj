import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Pagination,
  IconButton,
  Paper,
  Box
} from '@mui/material';
import { Add as AddIcon, Search as SearchIcon, MoreVert as MoreVertIcon } from '@mui/icons-material';
import { styled, useTheme } from '@mui/material/styles';

const PREFIX = 'EmployeeSalaryDashboard';

const classes = {
  container: `${PREFIX}-container`,
  header: `${PREFIX}-header`,
  filterContainer: `${PREFIX}-filterContainer`,
  addButton: `${PREFIX}-addButton`,
  tableContainer: `${PREFIX}-tableContainer`,
  actionButton: `${PREFIX}-actionButton`,
  pagination: `${PREFIX}-pagination`
};

const Root = styled('div')(({ theme }) => ({
  [`& .${classes.container}`]: {
    padding: theme.spacing(3),
    
  },
  [`& .${classes.header}`]: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(3),
  },
  [`& .${classes.filterContainer}`]: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
  [`& .${classes.addButton}`]: {
    backgroundColor: '#ff9800',
    '&:hover': {
      backgroundColor: '#fb8c00',
    },
  },
  [`& .${classes.tableContainer}`]: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  [`& .${classes.actionButton}`]: {
    backgroundColor: '#1976d2',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#1565c0',
    },
  },
  [`& .${classes.pagination}`]: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
}));

const employees = [
  { id: 1, name: "Bernardo Galaviz", role: "Web Developer", email: "bernardogalaviz@example.com", joinDate: "2023-01-14", salary: 76670 },
  { id: 2, name: "Jeffery Lalor", role: "Team Leader", email: "bernardogalaviz@example.com", joinDate: "2023-01-05", salary: 63670 },
  { id: 3, name: "Jeffrey Warden", role: "Web Designer", email: "jeffreywarden@example.com", joinDate: "2023-01-02", salary: 63140 },
  { id: 4, name: "John Doe", role: "Android Developer", email: "johndoe@example.com", joinDate: "2023-01-07", salary: 54840 },
  { id: 5, name: "John Smith", role: "Frontend Developer", email: "johnsmith@example.com", joinDate: "2023-01-17", salary: 69960 },
  { id: 6, name: "Lesley Grauer", role: "Ios Developer", email: "lesleygrauer@example.com", joinDate: "2023-01-20", salary: 50000 },
  { id: 7, name: "Loren Gatlin", role: "Software Engineer", email: "lorengatlin@example.com", joinDate: "2023-01-22", salary: 34900 },
  { id: 8, name: "Mike Litorus", role: "Web Developer", email: "mikelitorus@example.com", joinDate: "2023-01-23", salary: 28700 },
  { id: 9, name: "Richard Miles", role: "Ui/Ux Developer", email: "richardmiles@example.com", joinDate: "2023-01-31", salary: 20450 },
  { id: 10, name: "Tarah Shropshire", role: "Software Tester", email: "tarahshropshire@example.com", joinDate: "2023-01-11", salary: 17250 }
];

const Employees = () => {
  const theme = useTheme();
  const [filter, setFilter] = useState({ name: '', role: '', rejected: '', fromDate: '', toDate: '' });
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const filteredEmployees = employees.filter(employee => {
    return (
      (filter.name === '' || employee.name.toLowerCase().includes(filter.name.toLowerCase())) &&
      (filter.role === '' || employee.role === filter.role)
    );
  });

  const paginatedEmployees = filteredEmployees.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <Root>
      <Container className={classes.container} maxWidth="100%" >
        <h1>Employee Salary</h1>
        <div className={classes.header}>
          <Box display="flex" alignItems="center">
            <TextField
              name="name"
              label="Employee Name"
              value={filter.name}
              onChange={handleFilterChange}
              style={{ marginRight: '10px', marginBottom: '10px' }}
            />
            <FormControl style={{ marginRight: '10px', marginBottom: '10px', minWidth: '150px' }}>
              <InputLabel>Role</InputLabel>
              <Select
                name="role"
                value={filter.role}
                onChange={handleFilterChange}
              >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value="Web Developer">Web Developer</MenuItem>
                <MenuItem value="Team Leader">Team Leader</MenuItem>
                <MenuItem value="Web Designer">Web Designer</MenuItem>
                <MenuItem value="Android Developer">Android Developer</MenuItem>
                <MenuItem value="Frontend Developer">Frontend Developer</MenuItem>
                <MenuItem value="Ios Developer">Ios Developer</MenuItem>
                <MenuItem value="Software Engineer">Software Engineer</MenuItem>
                <MenuItem value="Ui/Ux Developer">Ui/Ux Developer</MenuItem>
                <MenuItem value="Software Tester">Software Tester</MenuItem>
              </Select>
            </FormControl>
            <TextField
              name="rejected"
              label="Rejected"
              value={filter.rejected}
              onChange={handleFilterChange}
              style={{ marginRight: '10px', marginBottom: '10px' }}
            />
            <TextField
              name="fromDate"
              label="From"
              type="date"
              value={filter.fromDate}
              onChange={handleFilterChange}
              InputLabelProps={{
                shrink: true,
              }}
              style={{ marginRight: '10px', marginBottom: '10px' }}
            />
            <TextField
              name="toDate"
              label="To"
              type="date"
              value={filter.toDate}
              onChange={handleFilterChange}
              InputLabelProps={{
                shrink: true,
              }}
              style={{ marginRight: '10px', marginBottom: '10px' }}
            />
            <Button variant="contained" color="primary" startIcon={<SearchIcon />}>
              Search
            </Button>
          </Box>
          <Button variant="contained" color="primary"  startIcon={<AddIcon />}>
            Add Salary
          </Button>
        </div>
        <Paper className={classes.tableContainer}>
          <TableContainer>
            <Table>
              <TableHead sx={{ backgroundColor: '#f5f5f5'}}>
                <TableRow>
                  <TableCell>Employee</TableCell>
                  <TableCell>Employee ID</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Join Date</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Salary</TableCell>
                  <TableCell>Payslip</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedEmployees.map((employee) => (
                  <TableRow key={employee.id}>
                    <TableCell>{employee.name}</TableCell>
                    <TableCell>FT-000{employee.id}</TableCell>
                    <TableCell>{employee.email}</TableCell>
                    <TableCell>{employee.joinDate}</TableCell>
                    <TableCell>{employee.role}</TableCell>
                    <TableCell>${employee.salary.toLocaleString()}</TableCell>
                    <TableCell>
                      <Button variant="contained" className={classes.actionButton}>
                        Generate Slip
                      </Button>
                    </TableCell>
                    <TableCell>
                      <IconButton className={classes.actionButton}>
                        <MoreVertIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <Pagination
          count={Math.ceil(filteredEmployees.length / rowsPerPage)}
          page={page}
          onChange={handlePageChange}
          color="primary"
          className={classes.pagination}
        />
      </Container>
    </Root>
  );
};

export default Employees;
