import React from 'react';
import { Typography, Button, Box } from '@mui/material';

const Resume = () => {
  return (
    <Box 
      p={3} 
      sx={{
        backgroundColor: '#ffff',
        color: '#003366',
        minHeight: '100vh'
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom sx={{color: '#003366', margin: '30px'}}> 
        My Resume
      </Typography>
      <Box
        component="iframe"
        src={`${process.env.PUBLIC_URL}/assets/resume.pdf`}
        width="100%"
        height="600px"
        sx={{
          border: 'none', 
        }}
      />
      <a href="/assets/resume.pdf" download>
  <Button variant="contained" sx={{marginTop: '20px', backgroundColor: '#003366', color: '#ffffff', display: 'flex',}}>
    Download My Resume
  </Button>
</a>

    </Box>
  );
};

export default Resume;
