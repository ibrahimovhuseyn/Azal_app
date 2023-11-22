import React from 'react'
import Offers from './Offers'
import Transitions from './Transitions'
import PopularDirections from './PopularDirections'

function About() {
  return (
    <div className='container about'>
      <Offers />
      <Transitions />
      <PopularDirections />
    </div>
  )
}

export default About