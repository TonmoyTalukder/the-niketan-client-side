import { TableCell, TableRow, Button } from '@mui/material';
import React from 'react';

const ManageAllBooking = ({customerBooking}) => {
    const{_id, name, email, city, status, clientAddress, clientPhoneNumber} = customerBooking;

    const handleOrders = id=> {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
        const url = `http://localhost:5000/bookings/${id}`;
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

    const handleOrdersUpdate= id =>{
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const status = {status:"Processing"};
            const url = `http://localhost:5000/bookings/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(status)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert('Update Successful');
                        window.location.reload(false)
                    }
                })
        }
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
                <TableCell align="center">
                <Button sx={{width: '80%', m:1, backgroundColor:'red'}} onClick={() => handleOrders(_id)} variant="contained">Delete</Button>

                </TableCell><TableCell align="center">
                <Button sx={{width: '90%', m:1, backgroundColor:'green'}}  onClick={() => handleOrdersUpdate(_id)}variant="contained">Processing</Button>
                </TableCell>
            </TableRow>
        </TableRow>
    );
};

export default ManageAllBooking;