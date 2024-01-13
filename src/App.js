
import axios from 'axios'; 
import './App.css';
import MiniDrawer from './components/drawer-comp/DrawerComp'
import Table from './components/table/TableComp'
import {TableHeaderComp} from './tableList/header/TableHeader'
import Pagination from '@mui/material/Pagination';
import SearchFilter from './components/search-filter/SearchFilter';
import ProfileSite from './components/profilesite/ProfileSite';
import { useState,useEffect } from 'react';
import TableBody from './tableList/body/TableBody';
import EditData from './components/edit-data/EditData';



function App() {

  const [search,setSearch]=useState('')
  const [page,setPage]=useState(1)
  const [data,setData]=useState()

  function getData(){
    fetch(`http://localhost:3000/users?_page=${page}&_limit=5`)
    .then(res=> {
      return res.json()
    })
    .then(data=>{
      setData(data)
    })
  }

  useEffect(()=>{
    getData()
    },[page])

  const handleChange=(_,value)=>{
    setPage(value);
  }

  return (

  <div className='wrapper'>

    <MiniDrawer />

    <div className='main'>

      <ProfileSite />

      <div className='tableSection'>

      <h1 className='qaimelerText'>Qaimələr</h1>

    <SearchFilter search={search} setSearch={setSearch}/>

    {data && <Table className='minetable' tableHeaderComp={TableHeaderComp()} 

    tableBodyComp={
    <TableBody getData={getData} data={data} search={search}/>
    }/>}

      </div>

      <Pagination page={page} onChange={()=>handleChange} color="primary" count={5} shape="rounded"
      sx={{
        marginTop: 4,
      }}/> 
    </div>
        </div>
  );
}

export default App;
