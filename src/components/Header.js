import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar 
      position="static"
      sx={{
        backgroundColor: '#333',  
        maxHeight: '30px',       
      }}
    >
      <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography variant="h6" component="div" sx={{color: '#fff'}}>
          Sam Jones
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/about">About Me</Button>
          <Button color="inherit" component={Link} to="/portfolio">Portfolio</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
          <Button color="inherit" component={Link} to="/resume">Resume</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
