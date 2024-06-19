// src/TicketList.jsx
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Select, MenuItem, TablePagination, IconButton } from '@mui/material';
import { MoreVert as MoreVertIcon } from '@mui/icons-material';
import styled from '@emotion/styled';

const TableContainerStyled = styled(Paper)`
  margin-top: 24px;
`;

const AvatarStyled = styled(Avatar)`
  margin-right: 8px;
`;

const SelectStyled = styled(Select)`
  & .MuiSelect-select {
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

const tickets = [
  { id: '#TKT-001', subject: 'Laptop Issue', assignedTo: 'John Smith', createdDate: '5 Jan 2023 07:21 AM', lastReply: '5 Jan 2023 11:12 AM', priority: 'High', status: 'New' },
  { id: '#TKT-002', subject: 'Laptop Issue', assignedTo: 'Mark Hentry', createdDate: '5 Jan 2023 07:21 AM', lastReply: '5 Jan 2023 11:12 AM', priority: 'Medium', status: 'Open' },
  { id: '#TKT-001', subject: 'Laptop Issue', assignedTo: 'Kontawa Smith', createdDate: '5 Jan 2023 07:21 AM', lastReply: '5 Jan 2023 11:12 AM', priority: 'High', status: 'Solved' },
  { id: '#TKT-002', subject: 'Laptop Issue', assignedTo: 'Dunga Mawe', createdDate: '5 Jan 2023 07:21 AM', lastReply: '5 Jan 2023 11:12 AM', priority: 'Medium', status: 'New' },
  // More tickets here...
];

function TicketList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainerStyled>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Ticket Id</TableCell>
              <TableCell>Ticket Subject</TableCell>
              <TableCell>Assigned Staff</TableCell>
              <TableCell>Created Date</TableCell>
              <TableCell>Last Reply</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tickets.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((ticket, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{ticket.id}</TableCell>
                <TableCell>{ticket.subject}</TableCell>
                <TableCell>
                  <AvatarStyled>{ticket.assignedTo[0]}</AvatarStyled>
                  {ticket.assignedTo}
                </TableCell>
                <TableCell>{ticket.createdDate}</TableCell>
                <TableCell>{ticket.lastReply}</TableCell>
                <TableCell>
                  <SelectStyled value={ticket.priority} disabled>
                    <MenuItem value="High" style={{ color: 'red' }}>High</MenuItem>
                    <MenuItem value="Medium" style={{ color: 'orange' }}>Medium</MenuItem>
                    <MenuItem value="Low" style={{ color: 'green' }}>Low</MenuItem>
                  </SelectStyled>
                </TableCell>
                <TableCell>
                  <SelectStyled value={ticket.status} disabled>
                    <MenuItem value="New">New</MenuItem>
                    <MenuItem value="Open">Open</MenuItem>
                    <MenuItem value="Solved">Solved</MenuItem>
                  </SelectStyled>
                </TableCell>
                <TableCell>
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={tickets.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainerStyled>
  );
}

export default TicketList;
