import React from 'react'

function Logo() {

    const imgUrl = 'https://upload.wikimedia.org/wikipedia/az/thumb/4/4d/Azerbaijan_Airlines_logo.svg/2560px-Azerbaijan_Airlines_logo.svg.png'
    return (
        <div className='container'>
            <div className="img-wrapper">
                <img src={imgUrl} alt="" />
            </div>
        </div>
    )
}

export default Logo