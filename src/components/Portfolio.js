import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const Portfolio = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="project_image_url"
        alt="Project name"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Project Name
        </Typography>
      </CardContent>
      <Button size="small" color="primary" href="deployed_app_url">
        View Deployed App
      </Button>
      <Button size="small" color="primary" href="github_repo_url">
        View on GitHub
      </Button>
    </Card>
  );
};

export default Portfolio;
