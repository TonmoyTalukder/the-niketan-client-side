import { Divider, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';

import './Banner.css';
import banner from '../../../images/home/banner.png'

const Banner = () => {
    const useStyle = makeStyles({
        bannerBg: {
            backgroundImage: `url(${banner})`,
            // backgroundSize: '1520px 546px',
            height: '546px',
            width: '100%',
            textAlign: 'center',
        },
        bannerText: {

        }
    })
    const {bannerBg, bannerText} = useStyle();
    return (
        <Box className={bannerBg}>
            <Box 
                className="bannerText"
            >
                <Box>
                    <Typography variant="h2">
                        <b>The Niketan</b>
                    </Typography>
                    <Typography variant="h5">
                        <p>Address of Your Sweet Home</p>
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Banner;