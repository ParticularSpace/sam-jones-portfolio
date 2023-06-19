import React from 'react';
import { Typography, Button, Box } from '@mui/material';

const Resume = () => {
  return (
    <Box 
      p={3} 
      sx={{
        backgroundColor: '#333', 
        color: '#fff',
        minHeight: '100vh'
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom sx={{color: '#fff', margin: '30px'}}>
        My Resume
      </Typography>
      <Box
        component="iframe"
        src="/assets/resume.pdf"
        width="100%"
        height="600px"
        sx={{
          border: 'none', 
        }}
      />
      <Button variant="contained" href="/assets/resume.pdf" target="_blank" sx={{marginTop: '20px', backgroundColor: '#555', color: '#fff', display: 'flex',}}>
        Download My Resume
      </Button>
    </Box>
  );
};

export default Resume;
