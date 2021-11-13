import { Box } from '@mui/system';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import OurHotestCities from '../OurHotestCities/OurHotestCities';
import PremiumApartments from '../PremiumApartments/PremiumApartments/PremiumApartments';
import Reviews from '../Reviews/Reviews';
import WhyWeAre from '../WhyWeAre/WhyWeAre';

const Home = () => {
    return (
        <>

            <Header/>
            <Banner/>
            <WhyWeAre/>
            <Box id="premium-apartments">
                <PremiumApartments/>
            </Box>
            <Box id="our-hotest-cities">
                <OurHotestCities/>
            </Box>
            <Box id="reviews">
                <Reviews/>
            </Box>
            <Footer/>
        </>
    );
};

export default Home;