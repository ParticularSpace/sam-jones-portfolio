import { Typography, Avatar, Button, Box, Card, CardActionArea, CardMedia, Grid } from '@mui/material';


function About() {
    console.log('About rendered');
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px',
                padding: '20px',
                minHeight: '100vh',
                backgroundColor: '#85DCB', 
                color: '#003366' 
            }}
        >
            {/* Top section */}
            <Grid container spacing={2} sx={{ minHeight: '25vh', backgroundColor: '#85DCB', padding: '20px' }}>
                <Grid item xs={12} sm={6}>
                    <Avatar
                        alt="Sam Jones"
                        src="https://ca.slack-edge.com/T04E091KMGD-U04M12X89HN-a89e6f09bae1-512"
                        sx={{ width: '200px', height: '200px', borderRadius: '5px', marginTop: '20px', marginRight: '20px' }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h4" component="div">
                        About Me
                    </Typography>
                    <hr />
                    <Typography variant="body1" align="left">
                        I am a dynamic full-stack web developer with a relentless passion for learning and expanding my technical skill set.
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            color: '#003366', 
                            backgroundColor: '#fff', 
                            height: '50px',
                            width: '200px',
                            borderRadius: '5px',
                            border: '1px solid #003366', 
                            '&:hover': {
                                backgroundColor: '#85DCB', 
                                border: '0px',
                            },
                        }}
                        href="/sam-jones-portfolio/portfolio"
                    >
                        Check out my work
                    </Button>
                </Grid>
            </Grid>

           {/* Featured project section */}
           <Grid container spacing={2} sx={{ minHeight: '25vh', backgroundColor: '#A0AECD', padding: '20px', borderRadius: '10px' }}>
    <Grid item xs={12} sm={6}>
        <Card sx={{ 
            maxWidth: 445, 
            '&:hover': {
                transform: 'scale(1.05)',
                transition: 'transform 0.3s',
            }
        }}>
            <CardActionArea href="https://ancient-taiga-07965-94f43cfbcb43.herokuapp.com/">
                <CardMedia
                    component="img"
                    height="300"
                    width="400"
                    image={`${process.env.PUBLIC_URL}/assets/weather.png`}
                    alt="Weather Dashboard"
                />
            </CardActionArea>
        </Card>
    </Grid>
    <Grid item xs={12} sm={6}>
        <Typography gutterBottom variant="h5" component="div" color="white">
            Featured Project: Weather Dashboard
            <hr />
        </Typography>
        <Typography variant="body2" color="#fff">
            This is a weather dashboard application that allows users to search for weather forecasts by city name. The application provides current weather information as well as a 5-day forecast. The data includes temperature, humidity, wind speed, and UV index. The application also keeps a history of searched cities for easy access.
        </Typography>
        <Button 
            size="small" 
            color="primary" 
            href="https://github.com/ParticularSpace/react-weather"
            sx={{ marginTop: '10px', backgroundColor: '#fff', margin: '10px', color: '#003366' }}
        >
            View on GitHub
        </Button>
        <Button 
            size="small" 
            color="primary" 
            href="https://ancient-taiga-07965-94f43cfbcb43.herokuapp.com/"
            sx={{ marginTop: '10px', backgroundColor: '#fff', margin: '10px', color: '#003366' }}
        >
            View Live Application
        </Button>
    </Grid>
</Grid>


            {/* More about me section */}
            <Grid container spacing={2} sx={{ minHeight: '25vh', backgroundColor: '#fff', padding: '20px' }}>
                <Grid item xs={12}>
                    <Typography variant="h4" component="div">
                        More About Me
                    </Typography>
                    <hr />
                    <Typography variant="body1" align="left">
                        I proudly hold a certificate in Full Stack Web Development from the University of Berkeley, where I honed key skills in HTML, CSS, JavaScript, Node.js, Express.js, React.js, MySQL, and Mongoose. I continually strive to stay at the forefront of technological advancements by proactively exploring new languages and digital tools.
                        <br />
                        <br />
                        I am eager to bring my technical prowess, dedication, and drive to a fast-paced, quality-driven team, where I can contribute to creating more effective, engaging, and intuitive web experiences.
                    </Typography>
                </Grid>
            </Grid>

            {/* Last section */}
            <Grid container spacing={2} sx={{ minHeight: '25vh', backgroundColor: '#A0AECD', padding: '20px', borderRadius: '10px' }}>
                <Grid item xs={12}>
                    <Typography variant="h4" component="div" color="#fff">
                        Contact Me
                    </Typography>
                    <hr />
                    <Typography variant="body1" align="left" color="#fff">
                        I'm always open to new opportunities and challenges. If you're interested in collaborating or just want to say hi, feel free to get in touch.
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            color: '#003366',
                            backgroundColor: '#fff',
                            height: '50px',
                            width: '200px',
                            borderRadius: '5px',
                            border: '1px solid #003366', 
                            '&:hover': {
                                backgroundColor: '#f7f7f7', 
                                border: '0px',
                            },
                        }}
                        href="/sam-jones-portfolio/contact"
                    >
                        Contact Me
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default About;
