import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid, Box, Modal } from '@mui/material';

const Portfolio = () => {
  const projects = Array(6).fill({
    name: 'Project Name',
    imageUrl: 'https://via.placeholder.com/150',
    appUrl: 'deployed_app_url',
    githubUrl: 'github_repo_url',
  });

  const [open, setOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const handleOpen = (project) => {
    setCurrentProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      p={3}
      sx={{
        backgroundColor: '#ffff', 
        color: '#003366', 
        minHeight: '100vh'
      }}
    >
      <Grid container spacing={3} marginBottom={3}>
        <Grid item xs={12}>
          <Card
            sx={{
              maxWidth: 600,
              backgroundColor: '#f7f7f7', 
              '&:hover': {
                transform: 'scale(1.05)',
                transition: 'transform 0.3s',
              }
            }}
          >
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
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
              </CardContent>
              <Button size="small" color="primary" href={project.appUrl}>
                View Deployed App
              </Button>
              <Button size="small" color="primary" href={project.githubUrl}>
                View on GitHub
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
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
    </Box>
  ) : (
    <div />
  )}
</Modal>


    </Box>
  );
};

export default Portfolio;

