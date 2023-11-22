import React from 'react'
import SearchTicket from '../Layout/FliesRegistration/SearchTicket'
import AboutFlyRegistration from '../Layout/FliesRegistration/AboutFlyRegistration'
import Roots from '../Layout/Roots/Roots'

function FlyRegistration() {
  return (
    <div>
      <Roots/>
      <div className='flyRegistration container'>
      <SearchTicket />
      <AboutFlyRegistration />
    </div>
    </div>
  )
}

export default FlyRegistration