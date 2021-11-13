import { TableCell, TableRow, Button } from '@mui/material';
import React from 'react';

const MyBooking = ({userBooking}) => {
    const{_id, name, email, city, status, clientAddress, clientPhoneNumber} = userBooking;

    const handleOrders = id=> {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
        const url = `https://the-niketan-server.herokuapp.com/bookings/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0) {
                alert('deleted successfully');
                window.location.reload(false)
            }
        })}
    }

    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {_id}
            </TableCell>
            <TableCell align="center">{city}</TableCell>
            <TableCell align="center">{name}</TableCell>
            <TableCell align="center">{email}</TableCell>
            <TableCell align="center">{clientAddress}</TableCell>
            <TableCell align="center">{clientPhoneNumber}</TableCell>
            <TableCell align="center">{status}</TableCell>

            <TableRow align="center">
                <Button sx={{width: '80%', m:1, backgroundColor:'red'}} onClick={() => handleOrders(_id)} variant="contained">Cancel</Button>
            </TableRow>
        </TableRow>
    );
};

export default MyBooking;