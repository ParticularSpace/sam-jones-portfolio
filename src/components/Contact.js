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
        backgroundColor: '#ffff', 
        color: '#003366',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Card sx={{ width: '100%', maxWidth: '500px', backgroundColor: '#f7f7f7' }}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom align="center">
            Contact Me
          </Typography>
          <form>
            <TextField
              required
              id="name"
              label="Name"
              variant="outlined"
              fullWidth
              style={{ marginBottom: '20px' }}
            />
            <TextField
              required
              id="email"
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              style={{ marginBottom: '20px' }}
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
              style={{ marginBottom: '20px' }}
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
