// src/ClientCard.jsx
import React from 'react';
import { Card, CardContent, CardActions, Button, Typography, Avatar, Grid, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ClientCard = ({ client }) => {
  return (
    <Card sx={{ minWidth: 275, padding: 2, backgroundColor: '#f9f9f9' }}>
      <CardContent>
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <Avatar src={client.image} alt={client.name} sx={{ width: 56, height: 56 }} />
          </Grid>
          <Grid item xs>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{client.company}</Typography>
            <Typography variant="subtitle1">{client.name}</Typography>
            <Typography variant="subtitle2">{client.role}</Typography>
          </Grid>
          <Grid item>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button fullWidth variant="outlined" size="small">Message</Button>
        <Button fullWidth variant="outlined" size="small">View Profile</Button>
      </CardActions>
    </Card>
  );
};

export default ClientCard;
