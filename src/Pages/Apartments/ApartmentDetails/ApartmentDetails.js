import { Button, Grid, List, ListItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ApartmentIcon from '@mui/icons-material/Apartment';
import DescriptionIcon from '@mui/icons-material/Description';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import BookingForm from './BookingForm/BookingForm';

const ApartmentDetails = () => {
    const {user} = useAuth();
    const {apartmentId} = useParams();
    const [apartmentDetails, setApartmentDetails] = useState([]);

    useEffect(() => {
        fetch(`https://the-niketan-server.herokuapp.com/apartments/${apartmentId}`)
        .then(res=> res.json())
        .then(data=> setApartmentDetails(data));
    }, []);

    return (
        <Box>
            <Header/>
            <Box style={{backgroundColor: '#262626', padding: '20px', color: 'white'}}>
            <h2>Apartment Details</h2>
            {/* <h2>id: {apartmentDetails._id}</h2> */}
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={12} sm={12} md={6} lg={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Card sx={{ maxWidth: 345, backgroundColor: '#4a4a4a', color: 'white' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={apartmentDetails.img}
                                alt={apartmentDetails.city}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <LocationCityIcon></LocationCityIcon> {apartmentDetails.city}
                                </Typography>
                                <Box>
                                    <List>
                                        <ListItem>
                                            <Typography gutterBottom variant="subtitle1" component="div">
                                            <ApartmentIcon></ApartmentIcon> {apartmentDetails.type}
                                            </Typography>
                                            &emsp;&emsp;&emsp;&emsp;
                                            <Typography gutterBottom variant="h6" component="div">
                                                $ {apartmentDetails.rent}
                                            </Typography>
                                        </ListItem>
                                        <ListItem>
                                            <Typography gutterBottom variant="body1" component="div">
                                            <LocationOnIcon></LocationOnIcon> {apartmentDetails.address}
                                            </Typography>   
                                        </ListItem>
                                        <ListItem>
                                            <Typography gutterBottom variant="body1" component="div">
                                                <DescriptionIcon></DescriptionIcon> {apartmentDetails.description}
                                            </Typography>
                                        </ListItem>
                                    </List>
                                </Box>
                            </CardContent>
                            {/* <CardActions>
                                <Button size="small"></Button>
                            </CardActions> */}
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Box>
                            <BookingForm
                                apartmentDetails={apartmentDetails}
                                key={apartmentDetails._id}
                            ></BookingForm>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Footer/>
        </Box>
    );
};

export default ApartmentDetails;