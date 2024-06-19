import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
  Box, CssBaseline, Drawer, AppBar, Toolbar, List, ListItem, ListItemIcon, ListItemText,
  Typography, IconButton, InputBase, MenuItem, Select, Badge, Avatar, Menu, Button,
  Collapse
} from '@mui/material';
import {
  Dashboard, People, Business, Work, Support, ContactMail, BarChart,
  AccountBalance, ShoppingCart, Notifications, Search, GridView, ExpandLess, ExpandMore
} from '@mui/icons-material';

import logo from '../assets/images/logo.png'; // Import your logo image

const drawerWidth = 240;

const Layout = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [language, setLanguage] = React.useState('English');
  const [reportsOpen, setReportsOpen] = React.useState(false); // State to manage sublist open/close
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleReportsClick = () => {
    setReportsOpen(!reportsOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h5" noWrap component="div">
            HR SOLUTIONS
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: 'background.paper', borderRadius: 1, p: 0.5, mr: 2 }}>
              <Search />
              <InputBase placeholder="Search here" inputProps={{ 'aria-label': 'search' }} />
            </Box>
            <Select
              value={language}
              onChange={handleLanguageChange}
              variant="outlined"
              size="small"
              sx={{ mr: 2 }}
            >
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Spanish">Spanish</MenuItem>
              <MenuItem value="French">French</MenuItem>
            </Select>
            <IconButton color="inherit" sx={{ mr: 2 }}>
              <Badge badgeContent={3} color="secondary">
                <Notifications />
              </Badge>
            </IconButton>
            <IconButton onClick={handleMenuClick} color="inherit">
              <Avatar alt="Admin" src="/static/images/avatar/1.jpg" />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              MenuListProps={{ 'aria-labelledby': 'basic-button' }}
            >
              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
              <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 0, mt: 2 }}>
          <Avatar alt="Logo" src={logo} sx={{ width: 220, height: 80 }} />
        </Box>
        <Toolbar />
        <Box sx={{ overflow: 'auto', p: 2 }}>
          <List>
            {[
              { text: 'Dashboard', icon: <Dashboard />, link: '/' },
              { text: 'Employees', icon: <People />, link: '/employees' },
              { text: 'Clients', icon: <Business />, link: '/clients' },
              { text: 'Projects', icon: <Work />, link: '/projects' },
              { text: 'Tickets', icon: <Support />, link: '/tickets' },
              { text: 'Contacts', icon: <ContactMail />, link: '/contacts' },
              { text: 'Users', icon: <Business />, link: '/users' },
            ].map((item) => (
              <ListItem button key={item.text} component={Link} to={item.link}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
            <ListItem button onClick={handleReportsClick}>
              <ListItemIcon>
                <GridView />
              </ListItemIcon>
              <ListItemText primary="Reports" />
              {reportsOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={reportsOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button sx={{ pl: 4 }} component={Link} to="/reports/leaves">
                  <ListItemText primary="Leave Report" />
                </ListItem>
                <ListItem button sx={{ pl: 4 }} component={Link} to="/reports/detailed">
                  <ListItemText primary="User Report" />
                </ListItem>
                <ListItem button sx={{ pl: 4 }} component={Link} to="/reports/statistics">
                  <ListItemText primary="Payroll Report" />
                </ListItem>
              </List>
            </Collapse>
            {[
              { text: 'Analytics', icon: <BarChart />, link: '/analytics' },
              { text: 'Activities', icon: <AccountBalance />, link: '/activities' },
              { text: 'Payroll', icon: <AccountBalance />, link: '/payroll' },
            ].map((item) => (
              <ListItem button key={item.text} component={Link} to={item.link}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
