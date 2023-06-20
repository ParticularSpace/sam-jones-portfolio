import React, { useState } from 'react';
import { TextField, Button, Box, Card, CardContent, Typography } from '@mui/material';

const Contact = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const validateEmail = () => {
    const re = /\S+@\S+\.\S+/;
    setEmailError(!re.test(email));
  };

  return (
    <Box 
      p={3} 
      sx={{
        backgroundColor: '#ffffff', // Changed to all white
        color: '#003366',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Card sx={{ 
        width: '100%', 
        maxWidth: '500px', 
        backgroundColor: '#f7f7f7',
        borderRadius: '15px', // More rounded edges
        boxShadow: '0px 4px 10px rgba(0,0,0,0.1)', // Subtle shadow
      }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom sx={{ textAlign: 'left' }}>
            Contact Me
          </Typography>
          <form>
            <TextField
              required
              id="name"
              label="Name"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: '20px', borderRadius: '5px' }} 
              InputProps={{ style: { height: '50px' } }} 
            />
            <TextField
              required
              id="email"
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: '20px', borderRadius: '5px' }} 
              InputProps={{ style: { height: '50px' } }} 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
              error={emailError}
              helperText={emailError && "Invalid email address"}
            />
            <TextField
              required
              id="message"
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              sx={{ marginBottom: '20px', borderRadius: '5px' }} 
            />
            <Button type="submit" variant="contained" sx={{backgroundColor: '#555', color: '#fff' }}>
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Contact;
