import React from 'react'
import { NavLink } from 'react-router-dom'

function Roots() {
  return (
    <div className='roots container'>
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
        <li>
          <NavLink
            to={'/flystatus'}
          >Uçuşun statusu
          </NavLink>
        </li>
      </ul>


      

    </div>
  )
}

export default Roots