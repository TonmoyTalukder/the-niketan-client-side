import { CircularProgress, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ManageApartment from './ManageApartment/ManageApartment';

const ManageApartments = () => {
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

    return (
        <Box style={{backgroundColor: '#262626', padding: '20px', color: 'white'}}>
            <Container>
                <Typography variant="h3" style={{marginTop: '10px'}} gutterBottom component="div">
                    Manage Apartments
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                    Total Apartments: {apartments.length}
                </Typography>
                <Box>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Apartment Id</TableCell>
                                <TableCell align="right">Apartment Location</TableCell>
                                <TableCell align="right">Apartment Rent</TableCell>
                                <TableCell align="center">Action</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    apartments.map(apartment =>
                                        <ManageApartment
                                            key = {apartment._id}
                                            apartment = {apartment}
                                        ></ManageApartment>    
                                    )
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {/* <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        
                    </Grid> */}
                </Box>
            </Container>
            </Box>
    );
};

export default ManageApartments;