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
                backgroundColor: '#fff', // White background
                color: '#003366' // Dark blue text
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row', 
                    alignItems: 'center',
                    gap: '20px',
                    padding: '20px',
                    backgroundColor: '#f7f7f7', 
                    width: '100vw',
                    minHeight: '60vh',
                    color: '#003366', 
                }}
            >
                <Avatar
                    alt="Sam Jones"
                    src="https://ca.slack-edge.com/T04E091KMGD-U04M12X89HN-a89e6f09bae1-512"
                    sx={{ width: '200px', height: '200px', borderRadius: '5px', marginTop: '20px', marginRight: '20px' }}
                />
                <Typography variant="body1" align="center">
                    <Typography variant="h4" component="div">
                        About Me
                    </Typography>
                    <hr />
                    <br />
                    I am a dynamic full-stack web developer with a relentless passion for learning and expanding my technical skill set. I proudly hold a certificate in Full Stack Web Development from the University of Berkeley, where I honed key skills in HTML, CSS, JavaScript, Node.js, Express.js, React.js, MySQL, and Mongoose.
                    <br />
                    <br />
                    However, my journey of learning didn't stop there. I continually strive to stay at the forefront of technological advancements by proactively exploring new languages and digital tools. This ongoing pursuit allows me to stay versatile, adapt to changing landscapes, and be more productive in my role.
                    <br />
                    <br />
                    I am eager to bring my technical prowess, dedication, and drive to a fast-paced, quality-driven team, where I can contribute to creating more effective, engaging, and intuitive web experiences. I believe that the union of technology, creativity, and collaboration can lead to the digital solutions of tomorrow.
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row-reverse', 
                    alignItems: 'center',
                    gap: '20px',
                    padding: '20px',
                    backgroundColor: '#f7f7f7', 
                    width: '100vw',
                    minHeight: '60vh',
                    color: '#003366', 
                }}
            >
                <Avatar
                    alt="Sam Jones"
                    src="/assets/photoofme.jpeg"
                    sx={{ width: '200px', height: '200px', borderRadius: '5px', marginTop: '20px', marginRight: '20px' }}
                />
<Typography variant="body2" align="center">
    <Typography variant="h4" component="div">
        Getting Personal
        <hr />
        <br />
    </Typography>
    <Typography variant="body1" align="center">
        Outside the realm of coding, I'm a keen video game enthusiast who enjoys the occasional hike and climb in the beautiful outdoors of Seattle, WA - the place I call home. If I'm not immersed in the digital world or taking on nature's challenges, you might find me engaged in a riveting game of pool, an activity that I particularly enjoy.
        <br />
        <br />
        On my wishlist is a mountain bike, as I yearn to take my outdoor adventures to the next level. And yes, the coding never really stops. In my free time, I find myself grinding algorithms, always seeking to improve and polish my problem-solving skills. 
        <br />
        <br />
        Lastly, a dog is what I hope to add to my life soon. A loyal companion for both the quiet coding nights and the thrilling outdoor exploits. This is a glimpse into who I am beyond the code and the keyboard.
    </Typography>
</Typography>

            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                    marginTop: '20px'
                }}
            >
                <Button
                    variant="contained"
                    sx={{
                        color: '#003366', // Dark blue text
                        backgroundColor: '#fff', // White background
                        '&:hover': {
                            backgroundColor: '#f7f7f7', // Light grey on hover
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
