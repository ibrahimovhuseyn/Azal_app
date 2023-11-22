import React from 'react'
import { Link } from 'react-router-dom'

function AzalMiles() {
  return (
    <div className='azalMiles'>
      <h3 className='text-center'>AZAL Miles</h3>
      <ul>
        <li>
          <Link>Proqram haqqında</Link>
        </li>
        <li>
          <Link>Balların toplanması və istifadəsi</Link>
        </li>
        <li>
          <Link>Üzv olmaq</Link>
        </li>
        <li>
          <Link>Profilə daxil olmaq</Link>
        </li>
        <li>
          <Link>Qaydalar və Şərtlər</Link>
        </li>
        <li>
          <Link>F.A.Q </Link>
        </li>
      </ul>
    </div>
  )
}

export default AzalMiles