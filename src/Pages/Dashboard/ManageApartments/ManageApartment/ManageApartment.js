import { TableCell, TableRow, Button } from '@mui/material';
import React from 'react';

const ManageApartment = ({apartment}) => {
    const{_id, city, rent} = apartment;

    const handleOrders = id=> {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
        const url = `http://localhost:5000/apartments/${id}`;
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
            {/* // Apartment Id, Apartment Location Apartment Rent Action */}

            <TableCell align="center">{_id}</TableCell>
            <TableCell align="center">{city}</TableCell>
            <TableCell align="center">{rent}</TableCell>

            <TableRow align="center">
                <Button sx={{width: '80%', m:1, backgroundColor:'red'}} onClick={() => handleOrders(_id)} variant="contained">Delete</Button>
            </TableRow>
        </TableRow>
    );
};

export default ManageApartment;