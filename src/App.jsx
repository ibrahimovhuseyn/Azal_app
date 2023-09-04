import React from 'react'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/Style/index.scss'
import Home from './Components/Pages/Home'
import { Provider } from 'react-redux'
import { store } from './App/store'
import Header from './Components/Header/Header'
import Roots from './Components/Layout/Roots/Roots'
import FlyRegistration from './Components/Pages/FlyRegistration'
import FlyManagment from './Components/Pages/FlyManagment'
import FlyStatus from './Components/Pages/FlyStatus'
import MultiStep from './Components/Pages/MultiStep'

function App() {
  return (
    <div className='bgImg'>
      <Provider store={store}>
        <Header/>
        <Roots/>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/flyregistration' element={<FlyRegistration/>} />
            <Route path='/flymanagment' element={<FlyManagment/>} />
            <Route path='/flystatus' element={<FlyStatus/>} />
            <Route path='/buyticket' element={<MultiStep/>} />

          </Routes>
        </div>
      </Provider>
    </div>
  )
}

export default App