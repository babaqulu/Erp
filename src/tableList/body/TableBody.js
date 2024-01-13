import React,{useState,useEffect} from 'react'
import './TableBody.css'
import Table from '../../components/table/TableComp'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DropDown from '../../components/drop-down/DropDown';
import ThreeDots from '../../components/threedots/ThreeDots'
import EditData from '../../components/edit-data/EditData';
import Options from '../../components/threedots/options/Options';

function TableBody({data,search,getData}) {
        
    const [openStatus,setOpenStatus]=useState()
    const [checkStatus,setCheckStatus]=useState(true)
    const [checkOptions,setCheckOptions]=useState(true)
    const [openOptions,setOpenOptions]=useState()
    const [UIData,setUIData]=useState([])

    useEffect(()=>{
        search?setUIData(data.filter((item)=>item?.client?.toLowerCase().includes(search.toLowerCase()))):setUIData(data)
    },[data,search])

    function handleStatusOpen(id){
      setOpenStatus(id)
      setCheckStatus((prev)=>!prev)
    }

    function handleOptionsOpen(id){
      setOpenOptions(id)
      setCheckOptions((prev)=>!prev)
    }
    

    return(
        <>
        {UIData
        .map((row) => {
            return(
            <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0,},
          }}>
            <TableCell align="center">{row.check}
            </TableCell>
            <TableCell align="center">
              <div className='clientSite'>
              {/* <img src={require('../img/Ellipse 23.png')} alt='Profile picture'/> */}
              <p>{row.client}</p>
              </div>
              </TableCell>
            <TableCell align="center">{row.productcount}</TableCell>
            <TableCell align="center">$ {row.totalamount}</TableCell>
      
            <div className='statusWrapper'>
            <button className='statusButton' key={row.id} onClick={()=>handleStatusOpen(row.id)}>
            <TableCell align="center"
            key={row.id}
            sx={{
              width:'150px',
              borderRadius:'25px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor:'tr',
              ...(row.statusList.statusId==="S1"?{
              backgroundColor:'#ECFDF3',
              color:'#488C6E',
              }:''),
              ...(row.statusList.statusId==="S2"?{
                backgroundColor:'#FFFAE8',
                color:'#E0B300',
                }:''),
                ...(row.statusList.statusId==="S3"?{
                  backgroundColor:'#FFF7F6',
                  color:'#FF463D',
                  }:'')
      
            }}
            >{row.statusList.statusLabel}
            </TableCell>
            </button>

            {
                openStatus==row.id && !checkStatus && <DropDown getData={getData} handleStatusOpen={handleStatusOpen} openStatus={openStatus} setCheckStatus={setCheckStatus} /> 

              }
            </div>

            <TableCell align="right"
            key={row.id}
            sx={{
              width: 0.01
            }}>
              <button key={row.id} className='optionsButton' onClick={()=>handleOptionsOpen(row.id)}>
                <img src={require('../../img/icons/threedot.png')}/>
                </button>
                {
                openOptions==row.id && !checkOptions &&
                <div className='optionsContainer'>
                <Options buttonName='Düzəliş et' openOptions={openOptions} buttonImage={require('../../img/icons/pen.png')} />
                </div>
              }
            </TableCell>
        
          </TableRow>
          )}
    )}</>)
}


export default TableBody
