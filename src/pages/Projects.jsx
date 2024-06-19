import React, { useState } from 'react';
import { Container, TextField, Select, MenuItem, Button, Box } from '@mui/material';
import ProjectCard from '../components/ProjectCard';
import AddIcon from '@mui/icons-material/Add';
import CreateProjectModal from '../components/CreateProjectModal';

const Projects = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const projects = [
    {
      title: 'Office Management',
      tasks: { open: 1, completed: 9 },
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
      deadline: '17 Apr 2023',
      projectLeader: { name: 'Damian David', avatar: '/images/avatar1.png' },
      team: [
        { name: 'Alice', avatar: '/images/avatar2.png' },
        { name: 'Bob', avatar: '/images/avatar3.png' },
        { name: 'Charlie', avatar: '/images/avatar4.png' },
        { name: 'David', avatar: '/images/avatar5.png' },
        { name: 'Eve', avatar: '/images/avatar6.png' },
      ],
      progress: 75,
    },
    {
      title: 'Project Management',
      tasks: { open: 1, completed: 9 },
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
      deadline: '17 Apr 2023',
      projectLeader: { name: 'Fabrizio', avatar: '/images/avatar1.png' },
      team: [
        { name: 'Alice', avatar: '/images/avatar2.png' },
        { name: 'Bob', avatar: '/images/avatar3.png' },
        { name: 'Charlie', avatar: '/images/avatar4.png' },
        { name: 'David', avatar: '/images/avatar5.png' },
        { name: 'Eve', avatar: '/images/avatar6.png' },
      ],
      progress: 45,
    },
    {
      title: 'Video Calling App',
      tasks: { open: 1, completed: 9 },
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
      deadline: '17 Apr 2023',
      projectLeader: { name: 'Majisifu', avatar: '/images/avatar1.png' },
      team: [
        { name: 'Alice', avatar: '/images/avatar2.png' },
        { name: 'Bob', avatar: '/images/avatar3.png' },
        { name: 'Charlie', avatar: '/images/avatar4.png' },
        { name: 'David', avatar: '/images/avatar5.png' },
        { name: 'Eve', avatar: '/images/avatar6.png' },
      ],
      progress: 60,
    },
    {
      title: 'Hospital Administration',
      tasks: { open: 1, completed: 9 },
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
      deadline: '17 Apr 2023',
      projectLeader: { name: 'Sabaya', avatar: '/images/avatar1.png' },
      team: [
        { name: 'Alice', avatar: '/images/avatar2.png' },
        { name: 'Bob', avatar: '/images/avatar3.png' },
        { name: 'Charlie', avatar: '/images/avatar4.png' },
        { name: 'David', avatar: '/images/avatar5.png' },
        { name: 'Eve', avatar: '/images/avatar6.png' },
      ],
      progress: 80,
    },
    {
      title: 'Property Management',
      tasks: { open: 1, completed: 9 },
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
      deadline: '17 Apr 2023',
      projectLeader: { name: 'John Mkubwa', avatar: '/images/avatar1.png' },
      team: [
        { name: 'Alice', avatar: '/images/avatar2.png' },
        { name: 'Bob', avatar: '/images/avatar3.png' },
        { name: 'Charlie', avatar: '/images/avatar4.png' },
        { name: 'David', avatar: '/images/avatar5.png' },
        { name: 'Eve', avatar: '/images/avatar6.png' },
      ],
      progress: 30,
    },
    {
      title: 'GDI System',
      tasks: { open: 1, completed: 9 },
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
      deadline: '17 Apr 2023',
      projectLeader: { name: 'Kontawa', avatar: '/images/avatar1.png' },
      team: [
        { name: 'Alice', avatar: '/images/avatar2.png' },
        { name: 'Bob', avatar: '/images/avatar3.png' },
        { name: 'Charlie', avatar: '/images/avatar4.png' },
        { name: 'David', avatar: '/images/avatar5.png' },
        { name: 'Eve', avatar: '/images/avatar6.png' },
      ],
      progress: 47,
    },
    {
      title: 'Contracts Management',
      tasks: { open: 1, completed: 9 },
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
      deadline: '17 Apr 2023',
      projectLeader: { name: 'Omondi', avatar: '/images/avatar1.png' },
      team: [
        { name: 'Alice', avatar: '/images/avatar2.png' },
        { name: 'Bob', avatar: '/images/avatar3.png' },
        { name: 'Charlie', avatar: '/images/avatar4.png' },
        { name: 'David', avatar: '/images/avatar5.png' },
        { name: 'Eve', avatar: '/images/avatar6.png' },
      ],
      progress: 65,
    },
    {
      title: 'Finacle Monitoring Tool',
      tasks: { open: 1, completed: 9 },
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
      deadline: '17 Apr 2023',
      projectLeader: { name: 'Dunga Mawe', avatar: '/images/avatar1.png' },
      team: [
        { name: 'Alice', avatar: '/images/avatar2.png' },
        { name: 'Bob', avatar: '/images/avatar3.png' },
        { name: 'Charlie', avatar: '/images/avatar4.png' },
        { name: 'David', avatar: '/images/avatar5.png' },
        { name: 'Eve', avatar: '/images/avatar6.png' },
      ],
      progress: 95,
    },
    // Add more projects here
  ];

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  };

  const searchBarStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  };

  const projectsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
  };

  return (
    <Container maxWidth='100'>
      <h1>Projects</h1>
      <Box style={headerStyle}>
        <Box style={searchBarStyle}>
          <TextField label="Project Name" variant="outlined" />
          <TextField label="Employee Name" variant="outlined" />
          <Select defaultValue="" displayEmpty>
            <MenuItem value="">
              <em>Select Designation </em>
            </MenuItem>
            <MenuItem value={10}>Web Developer</MenuItem>
            <MenuItem value={20}>Web designer</MenuItem>
            <MenuItem value={30}>Android Developer</MenuItem>
            <MenuItem value={40}>iOS Developer</MenuItem>
          </Select>
          <Button variant="contained" color="primary">Search</Button>
        </Box>
        <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleClickOpen}>
          Create Project
        </Button>
      </Box>
      <Box style={projectsContainerStyle}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </Box>

      <CreateProjectModal open={open} onClose={handleClose} />
    </Container>
  );
};

export default Projects;
