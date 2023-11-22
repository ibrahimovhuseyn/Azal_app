import React, { useEffect } from 'react'
import Inputs from '../Layout/Inputs/Inputs'
import Roots from '../Layout/Roots/Roots'
import About from '../Layout/About/About'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
function Home() {
  return (
    <div className='home'>
      <Header/>
      <Roots />
      <Inputs />
      <About />
      <Footer />
    </div>
  )
}

export default Home