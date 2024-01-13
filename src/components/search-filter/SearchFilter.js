import React from 'react'
import './SearchFilter.css'

export default function SearchFilter({setSearch}) {
  return (
    <div className='searchFilterwrapper'>
      
      <div className='search'>
      <img src={require('../../img/icons/search.png')}/>
      <input type='search' onChange={(e)=>setSearch(e.target.value)} name='search' placeholder='Qaimə nömrəsi, müştəri adı üzrə axtar'/>
      </div>


      <div className='searchFilterbuttoons'>
      <button className='filter'><img src={require('../../img/icons/filter.png')}/>Filter</button>
      <button className='qaime'>+ Yeni qaimə</button>
      </div>


    </div>
  )
}
