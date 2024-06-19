import React, { useState } from 'react';
import {
  Container, TextField, Button, MenuItem, Select, FormControl, InputLabel, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Menu, MenuItem as MuiMenuItem
} from '@mui/material';
import styled from '@emotion/styled';
import { CSVLink } from 'react-csv';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const initialData = [
  { id: 1, employee: 'John Doe', empId: '#0001', department: 'Design', leaveType: 'Sick Leave', days: 5, remainingLeave: 8, totalLeave: 20, leaveTaken: 12, carryForward: 8 },
  { id: 2, employee: 'John Smith', empId: '#0003', department: 'Android Developer', leaveType: 'Emergency Leave', days: 1, remainingLeave: 9, totalLeave: 20, leaveTaken: 17, carryForward: 3 },
  { id: 3, employee: 'John Doe', empId: '#0001', department: 'Team Leader', leaveType: 'Sick Leave', days: 10, remainingLeave: 7, totalLeave: 20, leaveTaken: 18, carryForward: 2 },
  { id: 4, employee: 'Richard Miles', empId: '#0002', department: 'Web Developer', leaveType: 'Parenting Leave', days: 3, remainingLeave: 8, totalLeave: 20, leaveTaken: 12, carryForward: 5 },
  { id: 5, employee: 'Mike Litoris', empId: '#0004', department: 'IOS Developer', leaveType: 'Sick Leave', days: 15, remainingLeave: 5, totalLeave: 20, leaveTaken: 15, carryForward: 5 },
  { id: 6, employee: 'John Doe', empId: '#0001', department: 'Design', leaveType: 'Sick Leave', days: 5, remainingLeave: 8, totalLeave: 20, leaveTaken: 12, carryForward: 8 },
  { id: 7, employee: 'John Smith', empId: '#0003', department: 'Android Developer', leaveType: 'Emergency Leave', days: 1, remainingLeave: 9, totalLeave: 20, leaveTaken: 17, carryForward: 3 },
  { id: 8, employee: 'John Doe', empId: '#0001', department: 'Team Leader', leaveType: 'Sick Leave', days: 10, remainingLeave: 7, totalLeave: 20, leaveTaken: 18, carryForward: 2 },
  { id: 9, employee: 'Richard Miles', empId: '#0002', department: 'Web Developer', leaveType: 'Parenting Leave', days: 3, remainingLeave: 8, totalLeave: 20, leaveTaken: 12, carryForward: 5 },
  { id: 10, employee: 'Mike Litoris', empId: '#0004', department: 'IOS Developer', leaveType: 'Sick Leave', days: 15, remainingLeave: 5, totalLeave: 20, leaveTaken: 15, carryForward: 5 },
];

const RootContainer = styled(Container)({
  marginTop: '20px',
  marginBottom: '20px',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  backgroundColor: '#fff',
});

const FormControlStyled = styled(FormControl)({
  minWidth: '150px',
  marginRight: '10px',
});

const TableContainerStyled = styled(TableContainer)({
  marginTop: '20px',
});

const PaginationContainer = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '20px',
});

function LeaveReport() {
  const [data, setData] = useState(initialData);
  const [department, setDepartment] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredData = department ? data.filter(item => item.department === department) : data;

  const handleExportClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Leave Report");
    XLSX.writeFile(workbook, "leave_report.xlsx");
    handleClose();
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text("Leave Report", 20, 10);
    doc.autoTable({
      head: [['Employee', 'Department', 'Leave Type', 'No. of Days', 'Remaining Leave', 'Total Leaves', 'Total Leave Taken', 'Leave Carry Forward']],
      body: filteredData.map(row => [row.employee, row.department, row.leaveType, row.days, row.remainingLeave, row.totalLeave, row.leaveTaken, row.carryForward]),
    });
    doc.save('leave_report.pdf');
    handleClose();
  };

  return (
    <RootContainer maxWidth='100%'>
      <h1>Leave Report</h1>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', justifyContent: 'flex-end'}}>
        <Button variant="contained" color="primary" onClick={handleExportClick}>
          Export
        </Button>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <CSVLink data={filteredData} filename={"leave_report.csv"} style={{ textDecoration: 'none', color: 'inherit' }}>
            <MuiMenuItem onClick={handleClose}>Export as CSV</MuiMenuItem>
          </CSVLink>
          <MuiMenuItem onClick={exportToExcel}>Export as Excel</MuiMenuItem>
          <MuiMenuItem onClick={exportToPDF}>Export as PDF</MuiMenuItem>
        </Menu>
      </div>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <TextField label="Employee" variant="outlined" />
        <FormControlStyled variant="outlined">
          <InputLabel>Department</InputLabel>
          <Select value={department} onChange={(e) => setDepartment(e.target.value)} label="Department">
            <MenuItem value="">--Select--</MenuItem>
            <MenuItem value="Design">Design</MenuItem>
            <MenuItem value="Android Developer">Android Developer</MenuItem>
            <MenuItem value="Team Leader">Team Leader</MenuItem>
            <MenuItem value="Web Developer">Web Developer</MenuItem>
            <MenuItem value="IOS Developer">IOS Developer</MenuItem>
          </Select>
        </FormControlStyled>
        <Button variant="contained" color="primary">Search</Button>
      </div>
      <TableContainerStyled component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: '#f5f5f5'}}>
            <TableRow>
              <TableCell>Employee</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Leave Type</TableCell>
              <TableCell>No. of Days</TableCell>
              <TableCell>Remaining Leave</TableCell>
              <TableCell>Total Leaves</TableCell>
              <TableCell>Total Leave Taken</TableCell>
              <TableCell>Leave Carry Forward</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.employee} {row.empId}</TableCell>
                <TableCell>{row.department}</TableCell>
                <TableCell>{row.leaveType}</TableCell>
                <TableCell>{row.days}</TableCell>
                <TableCell>{row.remainingLeave}</TableCell>
                <TableCell>{row.totalLeave}</TableCell>
                <TableCell>{row.leaveTaken}</TableCell>
                <TableCell>{row.carryForward}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <PaginationContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </PaginationContainer>
      </TableContainerStyled>
      
    </RootContainer>
  );
}

export default LeaveReport;
