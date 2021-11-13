import { Alert, TextField, Button, Typography, Divider } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import { Box } from '@mui/system';

const BookingForm = ({apartmentDetails}) => {
    const {user} = useAuth();
    const {city, _id}=apartmentDetails;
    const [addingSuccess, setAddingSuccess] = useState(false);

    const initialInfo = {name:user.displayName, email:user.email, apartmentId:_id,city:city, status:'Pending'};

    const [addingInfo, setAddingInfo] = useState(initialInfo);

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...addingInfo};
        newInfo[field] = value;
        // console.log(newInfo);
        setAddingInfo(newInfo);
    }

    const handleBooking = e =>{
        // Collect Data
        const booking = {
            ...addingInfo
        }
        // Send to the Server
        console.log(booking);

        fetch('https://the-niketan-server.herokuapp.com/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                setAddingSuccess(true);
                setAddingInfo(initialInfo);
                e.target.reset();
            }
        });

        e.preventDefault();
    }

    return (
        <Box style={{backgroundColor:'white', borderRadius: '20px'}}>
            <Typography style={{color: 'black', padding: '5px'}} variant="h4" gutterBottom component="div">
                Booking Details
            </Typography>
            <form onSubmit={handleBooking} style={{color: 'white'}}>

                <TextField id="outlined-required" onChange={handleOnChange} type="text" name="name" value={user.displayName} sx={{width: '90%', mb:2}}/>
                <TextField id="outlined-required" onChange={handleOnChange} type="email" name="email" value={user.email} sx={{width: '90%', mb:2}} />
                <TextField id="outlined-required" onChange={handleOnChange} type="text" name="apartmentId" value={_id} label="Apartment Id" sx={{width: '90%', mb:2}} />
                <TextField id="outlined-required" onChange={handleOnChange} type="text" name="city" value={city} label="City" sx={{width: '90%', mb:2}} />
                
                <TextField id="outlined-required" onChange={handleOnChange} type="text" name="clientAddress" label="Client Address" sx={{width: '90%', mb:2}} />

                <TextField id="outlined-required" onChange={handleOnChange} name="clientPhoneNumber" label="Client Phone Number" sx={{width: '90%', mb:2}} />

                <Button sx={{ width: '55%', m: 1, backgroundColor: '#2a2e32' }} type="submit" variant="contained">Book</Button>
                {addingSuccess && <Alert severity="success">Booked successfully!</Alert>}
            </form>
        </Box>
    );
};

export default BookingForm;