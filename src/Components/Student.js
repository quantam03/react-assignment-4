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
  createData('Shailesh', 26, 'MERN', 'October',<NavLink to='edit'>Edit</NavLink>),
  createData('Ash', 25, 'MERN', 'November',<NavLink to='edit'>Edit</NavLink>),
  createData('Sam', 25, 'MERN', 'September',<NavLink to='edit'>Edit</NavLink>),
  createData('John', 22, 'MERN', 'September',<NavLink to='edit'>Edit</NavLink>),
  createData('Christ', 23, 'MERN', 'October',<NavLink to='edit'>Edit</NavLink>),
  createData('Bob', 24, 'MERN', 'November',<NavLink to='edit'>Edit</NavLink>),

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