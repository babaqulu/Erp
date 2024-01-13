import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable({tableHeaderComp,tableBodyComp}) {
  return (
    <TableContainer sx={{
      boxShadow: 0
    }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          {tableHeaderComp}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableBodyComp}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
