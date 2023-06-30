import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Drawer, List, ListItem, ButtonBase, Button } from '@mui/material';
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
          <Button color="inherit" component={Link} to="/sam-jones-portfolio/about">About Me</Button>
          <Button color="inherit" component={Link} to="/sam-jones-portfolio/portfolio">Portfolio</Button>
          <Button color="inherit" component={Link} to="/sam-jones-portfolio/contact">Contact</Button>
          <Button color="inherit" component={Link} to="/sam-jones-portfolio/resume">Resume</Button>
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
          <ListItem>
            <ButtonBase component={Link} to="sam-jones-portfolio/about" onClick={handleDrawerToggle}>About Me</ButtonBase>
          </ListItem>
          <ListItem>
            <ButtonBase component={Link} to="sam-jones-portfolio/portfolio" onClick={handleDrawerToggle}>Portfolio</ButtonBase>
          </ListItem>
          <ListItem>
            <ButtonBase component={Link} to="sam-jones-portfolio/contact" onClick={handleDrawerToggle}>Contact</ButtonBase>
          </ListItem>
          <ListItem>
            <ButtonBase component={Link} to="sam-jones-portfolio/resume" onClick={handleDrawerToggle}>Resume</ButtonBase>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}

export default Header;
