import { Typography, Avatar, Button, Box } from '@mui/material';

function About() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        padding: '20px',
        minHeight: '100vh',
      }}
    >
      <Avatar
        alt="Sam Jones"
        src="../assets/profilePic.jpeg"
        sx={{ width: '150px', height: '150px' }}
      />
      <Typography variant="body1" align="center">
        I am a full stack web developer with a background in education and a passion for learning. I recently earned a certificate in full stack web development from the University of Berkeley, where I developed skills in HTML, CSS, JavaScript, Node.js, Express.js, React.js, and MySQL. I am excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web.
      </Typography>
      <Box>
        <Button
          variant="contained"
          sx={{
            color: '#fff',
            backgroundColor: '#3f51b5',
            '&:hover': {
              backgroundColor: '#757de8',
            },
          }}
          href="/portfolio"
        >
          Check out my work
        </Button>
      </Box>
    </Box>
  );
}

export default About;
