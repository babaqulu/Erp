import React from 'react'
import './Options.css'
import EditData from '../../edit-data/EditData'
import { useState,useEffect } from 'react'

function Options({buttonName,buttonImage,getCurrentRowData,openOptions}) {
  const [valueList,setValueList]=useState()
  const [editForm,setEditForm]=useState(false)
  const [optionsClass,setOptionsClass]=useState()

  
useEffect(()=>{
  console.log(openOptions);
  if(openOptions){
    fetch(`http://localhost:3000/users/${openOptions}`,{
      method: "GET",
      headers:{
        "Content-Type": "application/json",
      }
    }).then(res=> {
      return res.json()
    }).then((datas)=>{
      setValueList(datas)
  
    })
  }

  
  },[openOptions])

function getCurrentRowData(){
  // setEditForm((prev)=>!prev)
  // setOptionsClass('closeOptionsButtons')
}

  return (
    <div className='optionsWrapper'>
      <div className={optionsClass==='closeOptionsButtons'? 'closeOptionsButtons' :'optionsButtons'}>
      <button onClick={()=>getCurrentRowData()} className='threedotinnerbutton' >
        <img src={require('../../../img/icons/pen.png')} alt='Edit'/>
        <p>Düzəliş et</p>
      </button>

      <button className='threedotinnerbutton'>
        <img src={require('../../../img/icons/trashcan.png')} alt='Edit'/>
        <p>Sil</p>
      </button>
      </div>


      {
        editForm && <EditData check={valueList?.check} name={valueList?.client} productcount={valueList?.productcount} totalamount={valueList?.totalamount} />
      }

    </div>

    
  )
}

export default Options
