import { Container, Typography, TextField, Button, CircularProgress, Alert, Divider } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import login from '../../../images/loginBanner.jpg';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import './Register.css';
import { Box } from '@mui/system';

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const {user, registerUser, isLoading, authError, signinWithGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData, field, value);
    }
    const handleLoginSubmit = e => {
        if(loginData.password !== loginData.password2){
            alert('Passwords do not match');
            return;
        }

        registerUser(loginData.email, loginData.password, loginData.name, history);

       e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signinWithGoogle(location, history)
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Box className="loginBanner">
                        <img style={{ width: '100%' }} src={login} alt="" />
                    </Box>
                </Grid>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="h2" gutterBottom>Register</Typography>
                    { !isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            type="text"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Confirm Your Password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <Button sx={{ width: '55%', m: 1 }} type="submit" variant="contained">Register</Button> <br />
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button variant="text">Already registered? Please Login</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Login successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                    <Divider/> <br />
                    <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;