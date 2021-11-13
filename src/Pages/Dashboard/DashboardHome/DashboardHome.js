import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useAuth from '../../../hooks/useAuth';

import './DashboardHome.css';
import dashboardImg from '../../../images/loginBanner.jpg';

const DashboardHome = () => {
    const {user, admin} = useAuth();
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
                <Box>
                    <Typography variant="h3" gutterBottom component="div">
                        Hi, {user.displayName}!
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom component="div">
                        Your Email: {user.email}
                    </Typography>
                    {
                        admin &&
                        <Box>
                            <Typography variant="subtitle1" gutterBottom component="div">
                                {user.displayName}, You are an Admin of The Niketan.
                                <br/> You can add a new apartment from here.
                                <br/> Also you can review booking, you can cancel them or change the status to processing. 
                                <br/> Even you can also add a new Admin from here.
                                <br/> Please Be Sincere to manage everything.
                            </Typography>
                        </Box>
                    }
                    {
                        !admin &&
                        <Box>
                            <Typography variant="subtitle1" gutterBottom component="div">
                                {user.displayName}, You are a valuable client of The Niketan.
                                <br/> You can cancel your bookings from here.
                                <br/> You can Review us also.
                                <br/> Thank you for staying with us.
                            </Typography>
                        </Box>
                    }
                </Box>
            </Grid>
            <Grid item xs={12} sm={5}>
                    <Box className="dashboardBanner">
                        <img style={{ width: '100%' }} src={dashboardImg} alt="" />
                    </Box>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;