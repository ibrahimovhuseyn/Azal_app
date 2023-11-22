import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {

    const imgUrl = 'https://upload.wikimedia.org/wikipedia/az/thumb/4/4d/Azerbaijan_Airlines_logo.svg/2560px-Azerbaijan_Airlines_logo.svg.png'
    return (
        <div className='container'>
            <div className="img-wrapper">
                <Link to={'/'}>
                    <img src={imgUrl} alt="" />
                </Link>
            </div>
        </div>
    )
}

export default Logo