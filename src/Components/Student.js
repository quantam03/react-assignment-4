import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { NavLink } from 'react-router-dom';


function createData(name, Age, Course, Batch, change) {
  return { name, Age, Course, Batch, change };
}

const rows = [
  createData('Vaibhav', 26, 'MERN', 'October',<NavLink to='edit'>Edit</NavLink>),
  createData('Raj', 27, 'MEAN', 'November',<NavLink to='edit'>Edit</NavLink>),
  createData('Riya', 28, 'MEAN', 'December',<NavLink to='edit'>Edit</NavLink>),
  createData('Dom', 22, 'MEAN', 'August',<NavLink to='edit'>Edit</NavLink>),
  createData('Cook', 23, 'MERN', 'October',<NavLink to='edit'>Edit</NavLink>),
  createData('Hoody', 24, 'MERN', 'January',<NavLink to='edit'>Edit</NavLink>),

];

export default function BasicTable() {
  return (
      <div>
          <h1>STUDENT DETAILS</h1>

       <NavLink to="/student-desc">
            <button className='add-btn'>Add New Student</button>
            </NavLink>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Age</TableCell>
                <TableCell align="right">Course</TableCell>
                <TableCell align="right">Batch</TableCell>
                <TableCell align="right">Change</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.Age}</TableCell>
                <TableCell align="right">{row.Course}</TableCell>
                <TableCell align="right">{row.Batch}</TableCell>
                <TableCell align="right">{row.change}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </div>
  );
}