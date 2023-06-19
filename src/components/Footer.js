import { AppBar, Toolbar, Typography, Box } from '@mui/material';

function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Box sx={{ flex: '1 0 auto' }} />
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="body1">Sam Jones</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Footer;
