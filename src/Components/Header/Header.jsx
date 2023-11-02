import React from 'react'
import Logo from './Logo'
import Nav from './Nav'

function Header() {
  return (
    <div className='header container'>
      <Logo/>
      <Nav/>
    </div>
  )
}

export default Header