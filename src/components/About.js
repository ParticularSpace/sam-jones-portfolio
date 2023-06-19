import { Typography, Avatar, Button, Box } from '@mui/material';

function About() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minHeight: '100vh',
                backgroundColor: '#f0f0f0', 
                color: '#003366' 
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '20px',
                    marginBottom: '20px', 
                    backgroundColor: '#ffffff', 
                    width: '100vw',
                    minHeight: '20vh', 
                    color: '#003366',
                }}
            >
                <Avatar
                    alt="Sam Jones"
                    src="../assets/profilePic.jpeg"
                    sx={{ width: '150px', height: '150px', marginTop: '20px' }}
                />
                <hr />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '20px',
                    backgroundColor: '#f0f0f0',
                    width: '100vw',
                    minHeight: '60vh', 
                    color: '#003366',
                }}
            >
                <Typography variant="body1" align="center">
                    I am a dynamic full-stack web developer with a relentless passion for learning and expanding my technical skill set. I proudly hold a certificate in Full Stack Web Development from the University of Berkeley, where I honed key skills in HTML, CSS, JavaScript, Node.js, Express.js, React.js, MySQL, and Mongoose.
                    <br />
                    <br />
                    However, my journey of learning didn't stop there. I continually strive to stay at the forefront of technological advancements by proactively exploring new languages and digital tools. This ongoing pursuit allows me to stay versatile, adapt to changing landscapes, and be more productive in my role.
                    <br />
                    <br />
                    I am eager to bring my technical prowess, dedication, and drive to a fast-paced, quality-driven team, where I can contribute to creating more effective, engaging, and intuitive web experiences. I believe that the union of technology, creativity, and collaboration can lead to the digital solutions of tomorrow.
                </Typography>
                <Box>
                    <Button
                        variant="contained"
                        sx={{
                            color: '#ffffff',
                            backgroundColor: '#003366',
                            '&:hover': {
                                backgroundColor: '#336699',
                            },
                        }}
                        href="/portfolio"
                    >
                        Check out my work
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default About;
