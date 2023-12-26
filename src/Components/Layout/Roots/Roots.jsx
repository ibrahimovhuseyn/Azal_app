import React from 'react'
import { NavLink } from 'react-router-dom'
import Inputs from '../Inputs/Inputs'

function Roots() {

  return (
    <div className='roots container pt-5'>
      <ul>
        <li className=''>
          <NavLink
            to={'/'}
          >Aviabilet almaq
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/flyregistration'}
          >Uçuşa qeydiyyat
          </NavLink>
        </li>
       
      </ul>




    </div>
  )
}

export default Roots