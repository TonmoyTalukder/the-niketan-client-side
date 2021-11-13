import { CircularProgress,Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';

import PremiumApartment from '../PremiumApartment/PremiumApartment';
import './PremiumApartments.css';
const PremiumApartments = () => {
    const {user} = useAuth();

    const [apartments, setApartments] = useState([]);

    useEffect( () =>{
        const url = 'https://the-niketan-server.herokuapp.com/apartments'
        fetch(url)
        .then(res => res.json())
        .then(data => setApartments(data));
    }, [])

    const {isLoading} = useAuth();
    if(isLoading){return <CircularProgress></CircularProgress>}

    const newPremiumApartments = apartments.slice(0,6)

    return (
        <div>
            <Box className='premiumApartments'>
                <Typography variant="h3" style={{padding: '20px'}} gutterBottom component="div">
                    <b>Niketan's Premium Apartments</b>
                </Typography>
                <Box style={{paddingTop: '20px', paddingBottom: '30px'}}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} className="specialCenter">
                        {
                            newPremiumApartments.map(newPremiumApartment => <PremiumApartment
                                key = {newPremiumApartment._id}
                                newPremiumApartment = {newPremiumApartment}
                            ></PremiumApartment>)
                        }
                    </Grid>
                </Box>
            </Box>
        </div>
    );
};

export default PremiumApartments;