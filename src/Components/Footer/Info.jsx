import React from 'react'
import { Link } from 'react-router-dom'

function Info() {
    return (
        <div className='info'>
            <h3 className='text-center'>Məlumat</h3>
            <ul>
                <li>
                    <Link>Baqaj haqqında məlumat</Link>
                </li>
                <li>
                    <Link>Tariflərin qaydaları</Link>
                </li>
                <li>
                    <Link>Uşaqlar və hamilə qadınlarla səyahət</Link>
                </li>
                <li>
                    <Link>Heyvanlarla səyahət</Link>
                </li>
                <li>
                    <Link>Arzuolunmaz sərnişinlər</Link>
                </li>
                <li>
                    <Link>Overbooking</Link>
                </li>
                <li>
                    <Link>Təhlükəli əşyalar</Link>
                </li>
                <li>
                    <Link>Daşınma qaydaları</Link>
                </li>
                <li>
                    <Link>Qiymət siyasəti</Link>
                </li>
            </ul>
        </div>
    )
}

export default Info