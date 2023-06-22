import React, { useState } from 'react';
import { TextField, Button, Box, Card, CardContent, Typography, Grid } from '@mui/material';
import ComputerIcon from '@mui/icons-material/Computer';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import { styled, keyframes } from '@mui/system';

const Contact = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const validateEmail = () => {
    const re = /\S+@\S+\.\S+/;
    setEmailError(!re.test(email));
  };

  const fadeIn = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  `;

  const FadeInBox = styled(Box)`
    animation: ${fadeIn} 1s;
  `;

  return (
    <FadeInBox
      p={3}
      sx={{
        backgroundColor: '#ffffff',
        color: '#003366',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Card sx={{
        width: '100%',
        maxWidth: '800px',
        backgroundColor: '#f7f7f7',
        borderRadius: '15px',
        boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px'
      }}>
        <Typography variant="h4" component="div" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
          Contact Me
        </Typography>
        <Typography variant="subtitle1" component="div" gutterBottom sx={{ textAlign: 'center' }}>
          I'm currently open to new opportunities. Preferred type of employment: Full-Time, Contract.
        </Typography>
        <Typography variant="subtitle1" component="div" gutterBottom sx={{ textAlign: 'center' }}>
          Location: Seattle, WA (PST)
        </Typography>

        <CardContent>
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
            <Button type="submit" variant="contained" sx={{ backgroundColor: '#555', color: '#fff' }}>
              Submit
            </Button>
          </form>
        </CardContent>

        <Grid container spacing={3} sx={{ marginTop: '20px' }}>
        <Grid item xs={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <ComputerIcon sx={{ fontSize: '50px', color: '#4285F4' }} />
              <Typography variant="h6" component="div" gutterBottom>
                Frontend Development
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <CodeIcon sx={{ fontSize: '50px', color: '#34A853' }} />
              <Typography variant="h6" component="div" gutterBottom>
                Backend Development
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <WebIcon sx={{ fontSize: '50px', color: '#FBBC05' }} />
              <Typography variant="h6" component="div" gutterBottom>
                Web Design
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </FadeInBox>
  );
};

export default Contact;

