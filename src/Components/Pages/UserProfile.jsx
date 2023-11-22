import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { apiUrl } from '../../Confiq'
import { setCurrentUser, setUserSoldTicket } from '../Layout/Slices/home'
import { Button, Table } from 'reactstrap'

function UserProfile() {
  const params = useParams()
  const { currentUser } = useSelector(store => store.homeSlice)
  const { users, allSoldTickets, userSoldTickets } = useSelector(store => store.homeSlice)
  const dispatch = useDispatch()


  const navigate = useNavigate()
  useEffect(() => {
    axios.get(`${apiUrl}/soldtickets?userFin=${currentUser.fin}`).then(res => dispatch(setUserSoldTicket(res.data)))
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

              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  )
}

export default UserProfile