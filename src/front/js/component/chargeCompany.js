import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, date, role, orientacion, Liquidacion) {
    return { name, date, role, orientacion, Liquidacion };
}

const rows = [
    createData('empresa 1', 10 / 11 / 2023, 'Software Engineer', 'Back End', '$12.000.000'),
    createData('empresa 2', 12 / 8 / 2022, 'Software Engineer', 'Front End', '$14.000.000'),
    createData('empresa 3', 5 / 4 / 2023, 'Software Engineer', 'IOS', '$30.000.000'),
    createData('empresa 4', 28 / 1 / 2023, 'Software Engineer', 'FullStack', '$24.000.000'),
    createData('empresa 5', 16 / 7 / 2022, 'Software Engineer', 'Front End', '$18.000.000'),
];

export default function BasicTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Empresa</TableCell>
                        <TableCell align="right">date</TableCell>
                        <TableCell align="right">role</TableCell>
                        <TableCell align="right">Orientacion</TableCell>
                        <TableCell align="right">Liquidacion</TableCell>
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
                            <TableCell align="right">{row.date}</TableCell>
                            <TableCell align="right">{row.role}</TableCell>
                            <TableCell align="right">{row.orientacion}</TableCell>
                            <TableCell align="right">{row.Liquidacion}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}