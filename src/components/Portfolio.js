import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid, Box } from '@mui/material';

const Portfolio = () => {
  const projects = Array(6).fill({
    name: 'Project Name',
    imageUrl: 'project_image_url',
    appUrl: 'deployed_app_url',
    githubUrl: 'github_repo_url',
  });

  return (
    <Box 
      p={3} 
      sx={{
        backgroundColor: '#333', 
        color: '#fff',
        minHeight: '100vh'
      }}
    >
      <Grid container spacing={3} marginBottom={3}>
        <Grid item xs={12}>
          <Card 
            sx={{ 
              maxWidth: 600,
              backgroundColor: '#444',
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
                backgroundColor: '#444',
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.3s',
                }
              }}
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
    </Box>
  );
};

export default Portfolio;
