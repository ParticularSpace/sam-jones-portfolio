import { Box, AppBar, Toolbar, Typography, IconButton } from '@mui/material';

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
      <AppBar position="sticky" sx={{ bgcolor: '#fff' }}> 
        <Toolbar>
          <Typography variant="body1" sx={{ flexGrow: 1, color: '#333' }}>Sam Jones</Typography> 
          <IconButton 
            sx={{ 
              color: '#333',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.1)', 
              },
            }} 
            href="https://github.com/ParticularSpace" 
            target="_blank"
          >
            <img src="/assets/icons/github.png" alt="Github Icon" height="24" width="24" />
          </IconButton>
          <IconButton 
            sx={{ 
              color: '#333',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.1)', 
              },
            }} 
            href="https://linkedin.com/in/yourusername" 
            target="_blank"
          >
            <img src="/assets/icons/linkedin.png" alt="LinkedIn Icon" height="24" width="24" />
          </IconButton>
          <IconButton 
            sx={{ 
              color: '#333', 
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.1)', 
              },
            }} 
            href="tel:1234567890"
          >
            <img src="/assets/icons/slack.png" alt="Slack Icon" height="24" width="24" />
          </IconButton>
          <IconButton 
            sx={{ 
              color: '#333',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.1)', 
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
