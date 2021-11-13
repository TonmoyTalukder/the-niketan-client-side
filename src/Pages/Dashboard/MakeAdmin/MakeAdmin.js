import { Alert, Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = React.useState('');
    const [success, setSuccess] = React.useState(false);
    const {token} = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    };
    const handleAdminSubmit = e =>{
        const user = {email};
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount){
                console.log(data);
                e.target.reset();
                setSuccess(true);
            }
        })

        e.preventDefault();
    }

    return (
        <Box sx={{ padding: '20px' }}>
            <h1>Make Admin</h1>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{
                        width: '35%',
                        marginBottom: '1rem'
                    }}
                    variant="standard"
                    label="Email"
                    type="email"
                    // value={email}
                    onBlur={handleOnBlur}
                    margin="normal"
                />
                <br />
                <Button sx={{ width: '55%', m: 1, backgroundColor: '#2a2e32' }} type="submit" variant="contained" color="primary">
                    Make Admin
                </Button>
                {success && <Alert severity="success">Made Admin Successfully!</Alert>}
            </form>
        </Box>
    );
};

export default MakeAdmin;