import { CircularProgress, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../hooks/useAuth';
import MyBooking from './MyBooking/MyBooking';

const MyOrders = () =>  {
    const {user} = useAuth();
    const [userBookings, setUserBookings] = useState([]);

    useEffect( () =>{
        const url = `https://the-niketan-server.herokuapp.com/bookings?email=${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setUserBookings(data));
    }, [])

    const {isLoading} = useAuth();
    if(isLoading){return <CircularProgress></CircularProgress>}

    return (
        <Box style={{backgroundColor: '#262626', padding: '20px', color: 'white'}}>
            <Container>
                <Typography variant="h3" style={{marginTop: '10px'}} gutterBottom component="div">
                    All Bookings of {user.displayName}
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                    Total Bookings: {userBookings.length}
                </Typography>
                <Box>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Apartment Id</TableCell>
                                <TableCell align="right">Apartment Location</TableCell>
                                <TableCell align="center">Client Name</TableCell>
                                <TableCell align="center">Client Email</TableCell>
                                <TableCell align="center">Client's Address</TableCell>
                                <TableCell align="center">Client's Contact</TableCell>
                                <TableCell align="center">Booking Status</TableCell>
                                <TableCell align="center">Booking Cancel</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    userBookings.map(userBooking =>
                                        <MyBooking
                                            key = {userBooking._id}
                                            userBooking = {userBooking}
                                        ></MyBooking>    
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

export default MyOrders;