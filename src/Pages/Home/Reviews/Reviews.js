import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container} from '@mui/material';
import ReviewContent from './ReviewContent/ReviewContent';


const Reviews = () => {
    const [reviews,setReviews]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/reviews")
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])

    return (
        <Box sx={{ flexGrow: 1,m:5}}>
            <Container>
                <Typography sx={{ fontWeight: 500, mt: 5, color: '#2a2e32' }} variant="h4" component="div">
                    Clients' Reviews
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 5, color: '#2a2e32' }} variant="h6" component="div">
                   Happy clients give us some comments 
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{paddingBottom:"20px"}}>
                    {
                        reviews.map(review=><ReviewContent
                        key={review._id}
                        content={review}
                        ></ReviewContent>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Reviews;