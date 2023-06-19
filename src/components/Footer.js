import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';

function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
      }}
    >
      <Box sx={{ flex: '1 0 auto' }} />
      <AppBar position="sticky" sx={{ bgcolor: '#333' }}>
        <Toolbar>
          <Typography variant="body1" sx={{ flexGrow: 1 }}>Sam Jones</Typography>
          <IconButton 
            sx={{ 
              color: '#fff', 
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)', 
              },
            }} 
            href="https://github.com/ParticularSpace" 
            target="_blank"
          >
            <img src="/assets/icons/github.png" alt="Github Icon" height="24" width="24" />
          </IconButton>
          <IconButton 
            sx={{ 
              color: '#fff', 
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)', 
              },
            }} 
            href="https://linkedin.com/in/yourusername" 
            target="_blank"
          >
            <img src="/assets/icons/linkedin.png" alt="LinkedIn Icon" height="24" width="24" />
          </IconButton>
          <IconButton 
            sx={{ 
              color: '#fff', 
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)', // Change this to the color you want when hovering
              },
            }} 
            href="tel:1234567890"
          >
            <img src="/assets/icons/slack.png" alt="Slack Icon" height="24" width="24" />
          </IconButton>
          <IconButton 
            sx={{ 
              color: '#fff', 
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)', // Change this to the color you want when hovering
              },
            }} 
            href="tel:1234567890"
          >
            <img src="/assets/icons/twitter.png" alt="Twitter Icon" height="24" width="24" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Footer;
