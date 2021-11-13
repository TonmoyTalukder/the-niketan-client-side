import { Card, CardContent, Grid, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';

import React from 'react';

const ReviewContent = (props) => {
    const {name,review,rating}=props.content;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275,boxShadow: 0}}>
                <CardContent>
                    <Typography variant="h5" component="div" sx={{p:2}}>
                        {name}
                    </Typography>
                    <Typography variant="body1" >
                        <Rating
                            name="simple-controlled"
                            value={rating}
                        />
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{p:2}}>
                        {review}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default ReviewContent;