import React from 'react'
import Switch from './Switch'
import Language from './Language'
import { useSelector } from 'react-redux'
import Admin from '../Pages/Admin'
import SignInLogo from './SignInLogo'

function Nav() {

  return (
    <div className='navBar'>
      <Switch />
      <Language />
      <SignInLogo />
    </div>
  )
}

export default Nav