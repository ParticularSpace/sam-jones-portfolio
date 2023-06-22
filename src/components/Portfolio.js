import React, { useState, useRef } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid, Box, Modal } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Portfolio = () => {
  const projects = [
    {
      name: 'Weather Dashboard V2.0',
      imageUrl: '/assets/weather.png',
      appUrl: 'https://ancient-taiga-07965-94f43cfbcb43.herokuapp.com/',
      githubUrl: 'https://github.com/ParticularSpace/react-weather',
    },
    {
      name: 'Tech Blog',
      imageUrl: '/assets/techBlog.png',
      appUrl: 'https://mate-blog.herokuapp.com/',
      githubUrl: 'https://github.com/ParticularSpace/tech_blog',
    },
    {
      name: 'Four-leaf Blackjack V1',
      imageUrl: '/assets/blackjack.png',
      // appUrl: 'https://url-to-your-deployed-project-3.com',
      githubUrl: 'https://github.com/ParticularSpace/WP-Cas',
    },
    {
      name: 'Snake Game',
      imageUrl: '/assets/snake_game.png',
      appUrl: 'https://particularspace.github.io/snakeGame/',
      githubUrl: 'https://github.com/ParticularSpace/snakeGame',
    },
    {
      name: 'Emotion Texter',
      imageUrl: 'https://via.placeholder.com/150',
      appUrl: 'https://url-to-your-deployed-project-3.com',
      githubUrl: 'ahttps://github.com/yourusername/project-3',
    },
    {
      name: 'Ecom Back End',
      imageUrl: 'https://via.placeholder.com/150',
      appUrl: 'https://url-to-your-deployed-project-3.com',
      githubUrl: 'ahttps://github.com/yourusername/project-3',
    },
    {
      name: 'Employee Tracker',
      imageUrl: 'https://via.placeholder.com/150',
      appUrl: 'https://url-to-your-deployed-project-3.com',
      githubUrl: 'ahttps://github.com/yourusername/project-3',
    },
    {
      name: 'Weather Dashboard V1.0',
      imageUrl: '/assets/weather-Dashboard.png',
      appUrl: 'https://particularspace.github.io/A6-Weather-Dashboard/',
      githubUrl: 'https://github.com/ParticularSpace/A6-Weather-Dashboard',
    },
    {
      name: 'Random Password Generator',
      imageUrl: 'https://via.placeholder.com/150',
      appUrl: 'https://url-to-your-deployed-project-3.com',
      githubUrl: 'ahttps://github.com/yourusername/project-3',
    },

  ];
  
  const [open, setOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const scrollContainer = useRef(null);

  const handleOpen = (project) => {
    setCurrentProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const scroll = (scrollOffset) => {
    scrollContainer.current.scrollBy(0, scrollOffset);
  };

  const handleScrollUp = () => {
    scroll(-100);
  };

  const handleScrollDown = () => {
    scroll(100);
  };

  return (
    <Box
      p={3}
      sx={{
        backgroundColor: '#ffff', 
        color: '#003366', 
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <Typography variant="h4" component="div" sx={{ marginBottom: '20px' }}>
        My Projects
      </Typography>
      <Button onClick={handleScrollUp}><ArrowUpwardIcon /></Button>
      <Grid container spacing={3} justifyContent="center" alignItems="center" sx={{
        maxHeight: '60vh',
        overflowY: 'auto',
        width: '100%', 
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        '-ms-overflow-style': 'none',
        scrollbarWidth: 'none',
      }} ref={scrollContainer}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                maxWidth: 345,
                backgroundColor: '#f7f7f7', 
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.3s',
                }
              }}
              onClick={() => handleOpen(project)}
            >
              <CardMedia
                component="img"
                height="140"
                image={project.imageUrl}
                alt={project.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Brief description of the project goes here.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button onClick={handleScrollDown}><ArrowDownwardIcon /></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {currentProject ? (
          <Box sx={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            width: 400, 
            bgcolor: 'background.paper', 
            border: '2px solid #000', 
            boxShadow: 24, 
            p: 4 
          }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {currentProject.name}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <img src={currentProject.imageUrl} alt={currentProject.name} style={{ width: '100%' }} />
              <Button size="small" color="primary" href={currentProject.appUrl}>
                View Deployed App
              </Button>
              <Button size="small" color="primary" href={currentProject.githubUrl}>
                View on GitHub
              </Button>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Using Open Weather API, this app allows you to search for a city and get the current weather and a 5-day forecast.
              <br />
              <br />
              Technologies used: React, Node, Express, muicss, Open Weather API
            </Typography>
          </Box>
        ) : (
          <div />
        )}
      </Modal>
    </Box>
  );
};

export default Portfolio;

