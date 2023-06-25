import { Box, AppBar, Toolbar, Typography, IconButton } from '@mui/material';

function Footer() {
  console.log('Footer rendered');
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
      }}
    >
      <Box sx={{ flex: '1 0 auto' }} />
      <AppBar position="sticky" sx={{ bgcolor: '#EAE7DC' }}> 
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
            <img src="sam-jones-portfolio/assets/icons/github.png" alt="Github Icon" height="24" width="24" />
          </IconButton>
          <IconButton 
            sx={{ 
              color: '#333',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.1)', 
              },
            }} 
            href="https://www.linkedin.com/in/sam-jones-02a6461b7/" 
            target="_blank"
          >
            <img src="sam-jones-portfolio/assets/icons/linkedin.png" alt="LinkedIn Icon" height="24" width="24" />
          </IconButton>
          <IconButton 
            sx={{ 
              color: '#333', 
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.1)', 
              },
            }} 
            href="https://discordapp.com/users/337440214345711616"
          >
            <img src="sam-jones-portfolio/assets/icons/discord.png" alt="Slack Icon" height="24" width="24" />
          </IconButton>
          <IconButton 
            sx={{ 
              color: '#333',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.1)', 
              },
            }} 
            href="https://twitter.com/sam_jjones12"
          >
            <img src="sam-jones-portfolio/assets/icons/twitter.png" alt="Twitter Icon" height="24" width="24" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Footer;
