import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const NotFound = () => {
    return (
        <Box style={{ backgroundColor: '#2a2e32'}}>
            <Header/>
            <Box sx={{ width: '100%'}}>
                <Typography  sx={{color: 'red'}} variant="h1" component="div" gutterBottom>
                    <b>404! Not Found</b>
                </Typography>
                <Typography  sx={{color: 'white'}} variant="h4" component="div" gutterBottom>
                    <>You have entered a wrong location. Please go to the right one.</>
                </Typography>
                
            </Box>
            <Footer/>
        </Box>
    );
};

export default NotFound;