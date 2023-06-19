import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar className="flex justify-between">
        <Typography variant="h6" component="div">
          Sam Jones
        </Typography>
        <div>
          <Button color="inherit" href="/about">About Me</Button>
          <Button color="inherit" href="/portfolio">Portfolio</Button>
          <Button color="inherit" href="/contact">Contact</Button>
          <Button color="inherit" href="/resume">Resume</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
