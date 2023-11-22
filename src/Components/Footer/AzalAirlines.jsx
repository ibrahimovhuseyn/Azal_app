import React from 'react'
import { Link } from 'react-router-dom'

function AzalAirlines() {
    return (
        <div className='azalAirlines'>
            <h3 className='text-center'>AZAL Aviaşirkəti</h3>
            <ul>
                <li>
                    <Link>HAqqımızda</Link>
                </li>
                <li>
                    <Link>AZAL-ın müşahidə şurası</Link>
                </li>
                <li>
                    <Link>Son xəbərlər</Link>
                </li>
                <li>
                    <Link>Bizim donanma</Link>
                </li>
                <li>
                    <Link>Karyera</Link>
                </li>
                <li>
                    <Link>Məlumat mərkəzi</Link>
                </li>
                <li>
                    <Link>Bizə yazın</Link>
                </li>
                <li>
                    <Link>Mobil əlavə</Link>
                </li>
            </ul>
        </div>
    )
}

export default AzalAirlines