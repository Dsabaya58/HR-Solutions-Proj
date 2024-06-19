import React from 'react';
import { Card, CardContent, Typography, Avatar, Chip, LinearProgress, Box, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ProjectCard = ({ title, tasks, description, deadline, projectLeader, team, progress }) => {
  const cardStyle = {
    marginBottom: '16px',
    position: 'relative',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
  };

  const iconButtonStyle = {
    position: 'absolute',
    top: '8px',
    right: '8px',
  };

  const teamAvatarsStyle = {
    display: 'flex',
    alignItems: 'center',
    marginTop: '8px',
  };

  const avatarStyle = {
    marginRight: '8px',
  };

  const progressContainerStyle = {
    marginTop: '16px',
  };

  const progressStyle = {
    height: '8px',
    borderRadius: '4px',
  };

  return (
    <Card style={cardStyle}>
      <IconButton style={iconButtonStyle}>
        <MoreVertIcon />
      </IconButton>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {tasks.open} open tasks, {tasks.completed} tasks completed
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
          {description}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
          <strong>Deadline:</strong> {deadline}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
          <strong>Project Leader:</strong> {projectLeader.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
          <strong>Team Members:</strong>
        </Typography>
        <div style={teamAvatarsStyle}>
          {team.slice(0, 4).map((member, index) => (
            <Avatar key={index} alt={member.name} src={member.avatar} style={avatarStyle} />
          ))}
          {team.length > 4 && <Chip label={`+${team.length - 4}`} />}
        </div>
        <Box style={progressContainerStyle}>
          <LinearProgress variant="determinate" value={progress} style={progressStyle} />
          <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
            Progress: {progress}%
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
