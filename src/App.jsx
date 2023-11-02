import React from 'react'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/Style/index.scss'
import Home from './Components/Pages/Home'
import Header from './Components/Header/Header'
import Roots from './Components/Layout/Roots/Roots'
import FlyRegistration from './Components/Pages/FlyRegistration'
import FlyManagment from './Components/Pages/FlyManagment'
import FlyStatus from './Components/Pages/FlyStatus'
import { useSelector } from 'react-redux'
import About from './Components/Layout/About/About'
import Registration from './Components/Pages/Registration'
import SignIn from './Components/Pages/SignIn'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'sweetalert2/src/sweetalert2.scss'
import BuyTicket from './Components/Pages/BuyTicket'
import UserProfile from './Components/Pages/UserProfile'
import Admin from './Components/Pages/Admin'
import AllSoldTickets from './Components/Layout/AdminPages/AllSoldTickets'
import AddElements from './Components/Layout/AdminPages/AddElements'
import TicketRegister from './Components/Layout/FliesRegistration/TicketRegister'

function App() {


  const { mode } = useSelector(store => store.modeSlice)
  const { currentUser } = useSelector(store => store.homeSlice)

  return (

    <div className={`${mode ? "bg-dark" : ""}`}>
      {
        currentUser.fin === "admin" ?
          <div>
            <Admin />
            <Routes>
                  <Route path='/allsolds' element={<AllSoldTickets />} />
                  <Route path='/add' element={<AddElements />} />
            </Routes>
            <ToastContainer />

          </div>
          :
          <div>
            <div className="bgImg">
              <div className="">
                <Header />
                <Roots />
              </div>

              <div>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/buyticket' element={<BuyTicket />} />
                  <Route path='/flyregistration' element={<FlyRegistration />} />
                  <Route path='/flymanagment' element={<FlyManagment />} />
                  <Route path='/flystatus' element={<FlyStatus />} />
                  <Route path='/registration' element={<Registration />} />
                  <Route path='/ticketregister' element={<TicketRegister />} />
                  <Route path='/signin' element={<SignIn />} />
                  <Route path='/profile/:fin' element={<UserProfile />} />
                </Routes>
              </div>
            </div>
            <About />
            <ToastContainer />
          </div>
      }
    </div>
  )
}

export default App