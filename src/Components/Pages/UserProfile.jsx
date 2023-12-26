import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { apiUrl } from '../../Confiq'
import { setCurrentUser, setUserSoldTicket } from '../Layout/Slices/home'
import { Button, Table } from 'reactstrap'
import { setFindData } from '../Layout/Slices/flyingRegistration'

function UserProfile() {
  const params = useParams()
  const { currentUser } = useSelector(store => store.homeSlice)
  const { users, allSoldTickets, userSoldTickets } = useSelector(store => store.homeSlice)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`${apiUrl}/soldtickets?userFin=${currentUser.phone}`).then(res => dispatch(setUserSoldTicket(res.data)))
  }, [])

  function signOut() {
    dispatch(setCurrentUser({}))
    localStorage.setItem("isAuth", "false")
    navigate('/signin')
  }


  return (
    <div className='container'>
      <h1>Your tickets</h1>
      <div>
        <Button
          onClick={() => navigate('/')}
          className='mx-2'
        >Ana səhifə
        </Button>
        <Button
          onClick={signOut}
        >
          Cixis
        </Button>
      </div>
      {
        userSoldTickets.length > 0 ?
          <Table
            hover
          >
            <thead>
              <th>Tarix</th>
              <th>Uçuş</th>
              <th>Uçuş növü</th>
              <th>Bilet nömrəsi</th>
              <th>Rezervasiya nömrəsi</th>
              <th>Bilet sayı</th>
              <th>Məbləğ</th>
            </thead>
            <tbody>
              {
                userSoldTickets.map(item => (
                  <tr key={item.id}>
                    <td>{item.departureDate}</td>
                    <td>{item.fly}</td>
                    <td>{item.flyType}</td>
                    <td>{item.ticketNumber}</td>
                    <td>{item.rezervationNumber}</td>
                    <td>{item.ticketCount}</td>
                    <td>{item.totalPrice}</td>
                    <td>
                      <Button
                      size='sm'
                      onClick={()=>{
                        navigate('/ticketregister')
                        dispatch(setFindData(item))
                      }}
                      >
                        Register
                      </Button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
          :
          <h2 className='my-5 text-center'>
            Sizin bilet yoxdur
          </h2>
      }

    </div>
  )
}

export default UserProfile