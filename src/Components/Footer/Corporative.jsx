import React from 'react'
import { Link } from 'react-router-dom'

function Corporative() {
  return (
    <div className='corporative'>
      <h3 className='text-center'>Korporativ məlumat</h3>
      <ul>
        <li>
          <Link>Qrup şəklində daşımalar</Link>
        </li>
        <li>
          <Link>Satış ofisləri</Link>
        </li>
        <li>
          <Link>Ofis və nümayəndəliklər</Link>
        </li>
        <li>
          <Link>Qəbul günləri</Link>
        </li>
        <li>
          <Link>Mətbuat xidməti</Link>
        </li>
        <li>
          <Link>Struktur bölmələri</Link>
        </li>
        <li>
          <Link>Maliyyə hesabatları</Link>
        </li>
        <li>
          <Link>Agentlər üçün məlumat</Link>
        </li>
        <li>
          <Link>İnsan alverinə qarşı məlumat</Link>
        </li>
      </ul>
    </div>
  )
}

export default Corporative