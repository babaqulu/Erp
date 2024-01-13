import React, {useState} from 'react'
import './DropDown.css'

function DropDown({setCheckStatus,openStatus,getData,handleStatusOpen}) {

  const[buttonStatus,setButtonStatus]=useState()

  function handleStatus(){
    fetch(`http://localhost:3000/users/${openStatus}`,{
      method: "PATCH",
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        statusList:{
          statusLabel:buttonStatus.label,
          statusId: buttonStatus.id
        }
        })
    }).then(()=>{
      getData()
      handleStatusOpen()
    })

  }
  return (
    <div className='statusDropdown'>

    <div className='statusSelection'>

    <button className='first' onClick={()=>setButtonStatus({id:"S1",label:"təsdiqllənib"})}>Təsdiqlənib</button>
    <button className='second' onClick={()=>setButtonStatus({id:"S2",label:"gözləyir"})}>Gözləyir</button>
    <button className='third' onClick={()=>setButtonStatus({id:"S3",label:"xitam olunub"})}>Xitam olunub</button>

    </div>

    <div className='dropdownCheck'>
      <button onClick={()=>setCheckStatus((prev)=>!prev)}>Imtina</button>
      <button onClick={()=>handleStatus()}>Təsdiqlə</button>
    </div>

  </div>
  )
}

export default DropDown
