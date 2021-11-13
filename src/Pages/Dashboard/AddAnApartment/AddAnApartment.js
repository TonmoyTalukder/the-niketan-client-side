import { Alert, Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

import './AddAnApartment.css';
import apartmentBanner from '../../../images/loginBanner.jpg';
import useAuth from '../../../hooks/useAuth';

const AddAnApartment = () => {
    const {user} = useAuth();
    const [addingSuccess, setAddingSuccess] = useState(false);

    const initialInfo = {img: '', city: '', type: '', address: '', rent: '', description: ''};

    const [addingInfo, setAddingInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...addingInfo};
        newInfo[field] = value;
        // console.log(newInfo);
        setAddingInfo(newInfo);
    }

    const handleAddApartmentSubmit = e =>{
        // Collect Data
        const apartment = {
            ...addingInfo
        }
        // Send to the Server
        // console.log(apartment);
        fetch('https://the-niketan-server.herokuapp.com/apartments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(apartment)
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
        <Container>
            <Typography variant="h3" gutterBottom component="div">
                Add An Apartment
            </Typography>
            <Grid container spacing={2} className="addAnApartment">
                <Grid item xs={12} sm={12} md={12} lg={6}>
                    <Box>
                        <form onSubmit={handleAddApartmentSubmit}>
                            <TextField id="standard-basic" onBlur={handleOnBlur} name="img" label="Apartment's Photo Url" variant="standard" sx={{width: '90%'}} />
                            <TextField id="standard-basic" onBlur={handleOnBlur} name="city" label="City" variant="standard" sx={{width: '90%'}} />
                            <TextField id="standard-basic" onBlur={handleOnBlur} name="type" label="Apartment's Type" variant="standard" sx={{width: '90%'}} />
                            <TextField id="standard-basic" onBlur={handleOnBlur} name="address" label="Address" variant="standard" sx={{width: '90%'}} />
                            <TextField id="standard-basic" onBlur={handleOnBlur} name="rent" label="Rent" variant="standard" sx={{width: '90%'}} />
                            <TextField id="standard-basic" onBlur={handleOnBlur} name="description" label="Description" variant="standard" sx={{width: '90%'}} />
                            <Button sx={{ width: '55%', m: 1, backgroundColor: '#2a2e32' }} type="submit" variant="contained">Add Apartment</Button>
                            {addingSuccess && <Alert severity="success">Added successfully!</Alert>}
                        </form>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6}>
                    <Box className="addApartmentBanner">
                        <img className="addApartmentBannerImg" style={{ width: '100%' }} src={apartmentBanner} alt="" />
                    </Box>
                </Grid>
            </Grid>
            
        </Container>
    );
};

export default AddAnApartment;