import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  console.log('Header rendered');
  return (
    <AppBar 
      position="static"
      sx={{
        backgroundColor: '#EAE7DC',  
        maxHeight: '50px',       
        color: '#003366' 
      }}
    >
      <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography variant="h6" component="div" sx={{color: '#333'}}>
          Sam Jones
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Button color="inherit" component={Link} to="/about">About Me</Button>
          <Button color="inherit" component={Link} to="/portfolio">Portfolio</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
          <Button color="inherit" component={Link} to="/resume">Resume</Button>
        </Box>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
      >
        <List>
          <ListItem button component={Link} to="/about" onClick={handleDrawerToggle}>About Me</ListItem>
          <ListItem button component={Link} to="/portfolio" onClick={handleDrawerToggle}>Portfolio</ListItem>
          <ListItem button component={Link} to="/contact" onClick={handleDrawerToggle}>Contact</ListItem>
          <ListItem button component={Link} to="/resume" onClick={handleDrawerToggle}>Resume</ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}

export default Header;
