import React from 'react'
import './ProfileSite.css';

export default function ProfileSite() {
  return (
    <div className='profileSiteWrapper'>
      <h1 className='profileSiteheader'>Company Logo</h1>
      <img src={require('../../img/icons/bell.png')}/>
      <img src={require('../../img/Users.png')}/>
    </div>
  )
}
