import React from 'react';
import { Typography, Button } from '@mui/material';

const Resume = () => {
  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        My Resume
      </Typography>
      <Typography variant="body1" gutterBottom>
        <ul>
          <li>Proficiency 1</li>
          <li>Proficiency 2</li>
          <li>Proficiency 3</li>
          {/* Add as many proficiencies as you have */}
        </ul>
      </Typography>
      <Button variant="contained" href="/path-to-your-resume.pdf" target="_blank">
        Download My Resume
      </Button>
    </div>
  );
};

export default Resume;
