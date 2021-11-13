import { Card, CardActionArea, CardContent, Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Container } from 'react-bootstrap';
import SubjectRoundedIcon from '@mui/icons-material/SubjectRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

import './WhyWeAre.css';
import book from '../../../images/home/book.png';

const WhyWeAre = () => {
    return (
        <Container>
            <Grid container spacing={2}  sx={{p:4}}>
                <Grid item xs={10} md={8}>
                    <Box 
                        className="why-we-are-text"
                        // style={{margin: '30px'}}
                    >
                        <Box>
                            <Typography variant="h2">
                                <b>So, why the Niketan?</b>
                            </Typography>
                            <Typography variant="h5">
                                <p>
                                    The Niketan is a name of trust of more than millions of renters or buyers to get a house, room or apartments.
                                </p>
                            </Typography>

                            <Divider/>

                            <Card sx={{maxWidth: '80%', border:'0px', margin: 'auto'}}>
                                <CardActionArea sx={{border: '0px'}}>
                                    <CardContent sx={{border: '0px'}}>
                                        <Typography gutterBottom variant="h5" component="div">
                                        <SubjectRoundedIcon></SubjectRoundedIcon> Apply Online
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Submit digital rental applications and credit reports with Niketan's screening service, powered by TransUnion™.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card> 
                            <br />
                            <Card sx={{maxWidth: '80%', border:'0px', margin: 'auto'}}>
                                <CardActionArea sx={{border: '0px'}}>
                                    <CardContent sx={{border: '0px'}}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            <CheckCircleOutlineRoundedIcon ></CheckCircleOutlineRoundedIcon> Quality listings
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Our inventory is updated in real-time, so you'll always see new rentals on Zumper first.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <br />
                            <Card sx={{maxWidth: '80%', border:'0px', margin: 'auto'}}>
                                <CardActionArea sx={{border: '0px'}}>
                                    <CardContent sx={{border: '0px'}}>
                                        <Typography gutterBottom variant="h5" component="div">
                                           <NotificationsActiveIcon></NotificationsActiveIcon> Realtime alerts
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Filter by location, price range, bedroom count, pet-friendly, or amenity and set an alert to get notifications when a new listing is posted.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>

                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={10} md={4}>
                    <Box className="why-we-are-text">
                        <img style={{width: '70%'}} src={book} alt="" />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default WhyWeAre;