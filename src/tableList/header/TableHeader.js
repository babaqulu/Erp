import React from 'react'
import './TableHader.css'
import TableCell from '@mui/material/TableCell';

  const headCol = [ "Qaimə №", "Müştəri", "Məhsul sayı", "Məbləğ","Status", "Əmrlər" ]
  
  let TableHeaderComp = ()=>{
      return(<>{headCol.map((col,id) => {
        return(
        <TableCell sx={{
          backgroundColor:'#FAFAFC',
          color:'#6B707C',
          fontFamily:'Open Sans',
          fontWeight: 400,
          fontSize:14,
          ...(id===4?{width:'200px'}:{width:400})
        }} key={id} align="center">{col}</TableCell>
        )})}</>)
  }

  export {TableHeaderComp}
