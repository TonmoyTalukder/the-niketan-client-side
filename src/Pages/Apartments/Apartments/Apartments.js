import { CircularProgress,Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Apartment from '../Apartment/Apartment';

const Apartments = () => {
    const {user} = useAuth();

    const [apartments, setApartments] = useState([]);

    useEffect( () =>{
        const url = 'http://localhost:5000/apartments'
        fetch(url)
        .then(res => res.json())
        .then(data => setApartments(data));
    }, [])

    const {isLoading} = useAuth();
    if(isLoading){return <CircularProgress></CircularProgress>}
    return (
        <div>
            <Header/>
            <Box style={{backgroundColor: '#262626', padding: '20px', color: 'white'}}>
            <Container>
                <Typography variant="h3" style={{marginTop: '10px'}} gutterBottom component="div">
                    Our All Apartments
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                    Total Apartments: {apartments.length}
                </Typography>
                <Box
                     direction="column"
                     alignItems="center"
                     justifyContent="center"
                >
                    <Grid container 
                        spacing={{ xs: 2, md: 3 }} 
                        columns={{ xs: 4, sm: 8, md: 12 }}
                        className="specialCenter"
                    >
                        {
                            apartments.map(apartment => <Apartment
                                key = {apartment._id}
                                apartment = {apartment}
                            ></Apartment>)
                        }
                    </Grid>
                </Box>
            </Container>
            </Box>
            <Footer/>
        </div>
    );
};

export default Apartments;