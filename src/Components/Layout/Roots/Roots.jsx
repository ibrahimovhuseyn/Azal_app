import React from 'react'
import { NavLink } from 'react-router-dom'
import Inputs from '../Inputs/Inputs'

function Roots() {
  return (
    <div className='roots container mt-5'>
      <ul>
        <li>
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
        <li>
          <NavLink
            to={'/flymanagment'}
          >Rezervasiyını idarə edilməsi
          </NavLink>
        </li>
      </ul>




    </div>
  )
}

export default Roots