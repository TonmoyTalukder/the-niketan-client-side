import { Grid, Button, Card, CardMedia, CardContent, Typography, List, ListItem, CardActions  } from '@mui/material';
import { Box} from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ApartmentIcon from '@mui/icons-material/Apartment';
import DescriptionIcon from '@mui/icons-material/Description';

const PremiumApartment = ({newPremiumApartment}) => {
    const{_id, img, city, type, address, rent, description} = newPremiumApartment;
    return (
        <>
            <Grid item xs={12} sm={5} md={4} lg={3} className="specialCenter">
            <Card sx={{ width: 345, backgroundColor: '#4a4a4a', color: 'white' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={img}
                            alt={city}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                <LocationCityIcon></LocationCityIcon> {city}
                            </Typography>
                            <Box>
                                <List>
                                    <ListItem>
                                        <Typography gutterBottom variant="subtitle1" component="div">
                                           <ApartmentIcon></ApartmentIcon> {type}
                                        </Typography>
                                        &emsp;&emsp;&emsp;&emsp;
                                        <Typography gutterBottom variant="h6" component="div">
                                            $ {rent}
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography gutterBottom variant="body1" component="div">
                                           <LocationOnIcon></LocationOnIcon> {address.substring(0, 15)}...
                                        </Typography>   
                                    </ListItem>
                                    <ListItem>
                                        <Typography gutterBottom variant="body1" component="div">
                                            <DescriptionIcon></DescriptionIcon> {description.substring(0, 25)}...
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Link to={`/apartment-details/${_id}`}>
                                            <Button style={{backgroundColor: '#4a4a4a', color: 'white'}}>Details Before Booking...</Button>
                                        </Link>
                                    </ListItem>
                                </List>
                            </Box>
                        </CardContent>
                    </Card>
                {/* <img style={{width: '300px'}} src={img} alt="" />
                <Box>
                    <h4>{city}</h4>
                    <h5>{type}</h5>
                    <h5>{address}</h5>
                    <h3>{rent}</h3>
                    <p>{description}</p>
                    <Link to={`/apartment-details/${_id}`}>
                        <Button>Details Before Booking...</Button>
                    </Link>
                </Box> */}
            </Grid>
            

        </>
    );
};

export default PremiumApartment;