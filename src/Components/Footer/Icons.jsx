import React from 'react'
import { GrFacebookOption } from 'react-icons/gr'
import { TiSocialTwitter } from 'react-icons/ti'
import { AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { BsTelegram } from 'react-icons/bs'


function Icons() {
    return (
        <div>
            <GrFacebookOption className='i' />
            <TiSocialTwitter className='i' />
            <AiFillLinkedin className='i' />
            <BsTelegram className='i' />
            <AiFillYoutube className='i'/>
        </div>
    )
}

export default Icons