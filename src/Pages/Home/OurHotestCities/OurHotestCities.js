import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Container } from 'react-bootstrap';

import './OurHotestCities.css';

import atlanta from '../../../images/home/hotestCities/atlanta.jpg';
import austin from '../../../images/home/hotestCities/austin.jpg';
import charlotte from '../../../images/home/hotestCities/charlotte.jpg';
import chikago from '../../../images/home/hotestCities/chikago.jpg';
import cincinnati from '../../../images/home/hotestCities/cincinnati.jpg';
import denver from '../../../images/home/hotestCities/denver.jpg';
import houston from '../../../images/home/hotestCities/houston.jpg';
import losangeles from '../../../images/home/hotestCities/losangeles.jpg';

const OurHotestCities = () => {
    return (
        <div className="OurHottestCities" >
            <h2 style={{padding: '10px', margin: '0px', marginTop:'-8px', color:'white'}}>Our Hottest Cities</h2>
        <Container>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}  sx={{ }}>
                
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="hotestCities">
                        <img style={{width: '250px', height: '170px', borderRadius: '10px'}} src={atlanta} alt="" /> 
                        <h4>Atlanta</h4>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="hotestCities">
                        <img style={{width: '250px', height: '170px', borderRadius: '10px'}} src={austin} alt="" /> 
                        <h4>Austin</h4>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="hotestCities">
                        <img style={{width: '250px', height: '170px', borderRadius: '10px'}} src={charlotte} alt="" />
                        <h4>Charlotte</h4>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="hotestCities">
                        <img style={{width: '250px', height: '170px', borderRadius: '10px'}} src={chikago} alt="" /> 
                        <h4>Chikago</h4>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="hotestCities">
                        <img style={{width: '250px', height: '170px', borderRadius: '10px'}} src={cincinnati} alt="" /> 
                        <h4>Cincinnati</h4>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="hotestCities">
                        <img style={{width: '250px', height: '170px', borderRadius: '10px'}} src={denver} alt="" /> 
                        <h4>Denver</h4>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="hotestCities">
                        <img style={{width: '250px', height: '170px', borderRadius: '10px'}} src={houston} alt="" /> 
                        <h4>Houston</h4>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="hotestCities">
                        <img style={{width: '250px', height: '170px', borderRadius: '10px' }} src={losangeles} alt="" />
                        <h4>Los Angeles</h4>
                    </Box>
                </Grid>
            </Grid>
        </Container>
        </div>
    );
};

export default OurHotestCities;