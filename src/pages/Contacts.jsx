import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Chip,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Tooltip,
  Typography,
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  Facebook as FacebookIcon,
  MoreVert as MoreVertIcon,
  Star as StarIcon,
  StarBorder as StarBorderIcon,
} from '@mui/icons-material';

const contacts = [
  {
    name: 'Darlee Robertson',
    phone: '+1 875455453',
    email: 'robertson@example.com',
    tags: 'Promotion',
    location: 'Germany',
    rating: 4.2,
    owner: 'Hendry',
    status: 'Active',
    starred: true,
    avatar: 'https://i.pravatar.cc/300?img=1',
  },
  {
    name: 'Sharon Roy',
    phone: '+1 989757485',
    email: 'sharon@example.com',
    tags: 'Rated',
    location: 'USA',
    rating: 5,
    owner: 'Guillory',
    status: 'Active',
    starred: false,
    avatar: 'https://i.pravatar.cc/300?img=2',
  },
  {
    name: 'Vaughan Senior',
    phone: '+1 546555455',
    email: 'vaughan12@example.com',
    tags: 'Promotion',
    location: 'Canada',
    rating: 3.5,
    owner: 'Jami',
    status: 'Inactive',
    starred: false,
    avatar: 'https://i.pravatar.cc/300?img=3',
  },
  {
    name: 'Jessica',
    phone: '+1 454478787',
    email: 'jessica13@example.com',
    tags: 'Rated',
    location: 'India',
    rating: 4.5,
    owner: 'Theresa',
    status: 'Active',
    starred: false,
    avatar: 'https://i.pravatar.cc/300?img=4',
  },
  {
    name: 'Carol ThomasUI',
    phone: '+1 124547845',
    email: 'carolTho3@example.com',
    tags: 'Rejected',
    location: 'China',
    rating: 4.7,
    owner: 'Espinosa',
    status: 'Active',
    starred: false,
    avatar: 'https://i.pravatar.cc/300?img=5',
  },
  {
    name: 'Dawn Mercha',
    phone: '+1 478484547',
    email: 'dawnmercha@example.com',
    tags: 'Rated',
    location: 'Japan',
    rating: 5,
    owner: 'Martin',
    status: 'Active',
    starred: true,
    avatar: 'https://i.pravatar.cc/300?img=6',
  },
  {
    name: 'Rachel Hampton',
    phone: '+1 215544845',
    email: 'rachel@example.com',
    tags: 'Rejected',
    location: 'Indonesia',
    rating: 3.1,
    owner: 'Newell',
    status: 'Active',
    starred: false,
    avatar: 'https://i.pravatar.cc/300?img=7',
  },
  {
    name: 'Jonelle',
    phone: '+1 121145471',
    email: 'jonelle@example.com',
    tags: 'Calls',
    location: 'Cuba',
    rating: 5,
    owner: 'Janet',
    status: 'Active',
    starred: false,
    avatar: 'https://i.pravatar.cc/300?img=8',
  },
  {
    name: 'Jonathan',
    phone: '+1 321454789',
    email: 'jonathan@example.com',
    tags: 'Calls',
    location: 'Israel',
    rating: 2.7,
    owner: 'Craig',
    status: 'Active',
    starred: false,
    avatar: 'https://i.pravatar.cc/300?img=9',
  },
  {
    name: 'Brook',
    phone: '+1 278907145',
    email: 'brook@example.com',
    tags: 'Calls',
    location: 'Colombia',
    rating: 3,
    owner: 'Daniel',
    status: 'Active',
    starred: false,
    avatar: 'https://i.pravatar.cc/300?img=10',
  },
];

const Contacts = () => {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const sortedContacts = React.useMemo(() => {
    const stabilizedThis = contacts.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = a[0][orderBy] < b[0][orderBy] ? -1 : 1;
      return order === 0 ? a[1] - b[1] : order;
    });
    return order === 'desc' ? stabilizedThis.reverse() : stabilizedThis;
  }, [order, orderBy]);

  console.log('Sorted Contacts:', sortedContacts); // Debugging log

  return (
    <Paper sx={{ margin: 2, padding: 2 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h4">Contacts</Typography>
        <Button variant="contained" color="primary">Add Contact</Button>
      </Box>
      <TableContainer>
        <Table>
          <TableHead sx={{ backgroundColor: '#f5f5f5'}}> 
            <TableRow>
              <TableCell sortDirection={orderBy === 'name' ? order : false}>
                <TableSortLabel
                  active={orderBy === 'name'}
                  direction={orderBy === 'name' ? order : 'asc'}
                  onClick={(event) => handleRequestSort(event, 'name')}
                >
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Tags</TableCell>
              <TableCell>Location</TableCell>
              <TableCell sortDirection={orderBy === 'rating' ? order : false}>
                <TableSortLabel
                  active={orderBy === 'rating'}
                  direction={orderBy === 'rating' ? order : 'asc'}
                  onClick={(event) => handleRequestSort(event, 'rating')}
                >
                  Rating
                </TableSortLabel>
              </TableCell>
              <TableCell>Owner</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedContacts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((contact, index) => {
              console.log('Rendering contact:', contact); // Debugging log
              return (
                <TableRow key={index}>
                  <TableCell sx={{display:'flex', alignItems:'center'}}>
                    {contact[0].starred ? <StarIcon sx={{ color: 'gold', ml: 1 }} /> : <StarBorderIcon sx={{ ml: 1 }} />}
                    <Avatar src={contact[0].avatar} alt={contact[0].name} sx={{ mr: 2 }} />
                    {contact[0].name}
                  </TableCell>
                  <TableCell>{contact[0].phone}</TableCell>
                  <TableCell>{contact[0].email}</TableCell>
                  <TableCell>
                    <Chip label={contact[0].tags} color={
                      contact[0].tags === 'Promotion' ? 'primary' :
                      contact[0].tags === 'Rated' ? 'warning' :
                      contact[0].tags === 'Rejected' ? 'error' : 'default'
                    } />
                  </TableCell>
                  <TableCell>{contact[0].location}</TableCell>
                  <TableCell>
                    <Chip label={contact[0].rating} icon={<StarIcon />} color="default" />
                  </TableCell>
                  <TableCell>{contact[0].owner}</TableCell>
                  <TableCell>
                    <Tooltip title="Email">
                      <IconButton><EmailIcon /></IconButton>
                    </Tooltip>
                    <Tooltip title="Call">
                      <IconButton><PhoneIcon /></IconButton>
                    </Tooltip>
                    <Tooltip title="Facebook">
                      <IconButton><FacebookIcon /></IconButton>
                    </Tooltip>
                  </TableCell>
                  <TableCell>
                    <Chip label={contact[0].status} color={contact[0].status === 'Active' ? 'success' : 'error'} />
                  </TableCell>
                  <TableCell>
                    <IconButton><MoreVertIcon /></IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={contacts.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>Export</Button>
    </Paper>
  );
};

export default Contacts;

