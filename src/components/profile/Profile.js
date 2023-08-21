import React from 'react'
import './Profile.css'

import { ReactComponent as Logo } from '../../img/icons/logo.svg'
import { ReactComponent as Bell } from '../../img/icons/bell.svg'

export default function Profile() {
  return (
    <div>
      <div className='logowrapper'>
        <Logo className='logo' />
        <h3>Bank Company</h3>
      </div>
      <Bell />
      <img src={require('../../img/Users.png')}/>
    </div>
  )
}
