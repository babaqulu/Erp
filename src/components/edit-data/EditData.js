import React from 'react'

function EditData({check,name,productcount,totalamount}) {
  console.log('salaam');
  return (
    <form className='editDataForm'>
      <input type='text' value={check} placeholder='Yeni qaiməni daxil edin'/>
      <input type='text' value={name} placeholder='Müştəri adı'/>
      <input type='number' value={productcount} placeholder='Məhsul sayı'/>
      <input type='number' value={totalamount} placeholder='Məbləğ'/>
      <input type='submit'/>
    </form>
  )
}

export default EditData
