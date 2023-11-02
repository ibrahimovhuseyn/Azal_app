import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { apiUrl } from '../../../Confiq'
import { getAllSoldTickets } from '../Slices/adminSlice'
import { Table } from 'reactstrap'

function AllSoldTickets() {
  const { allSoldTickets } = useSelector(store => store.adminSlice)
  const dispatch = useDispatch()
  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    axios.get(`${apiUrl}/soldtickets`).then(res => dispatch(getAllSoldTickets(res.data)))

  }
  return (
    <div className='container my-4'>
      <Table hover>
        <thead>
          <tr>
            <th>İstifadəçi fin</th>
            <th>Bilet nömrəsi</th>
            <th>Uçuş aeroportu-Eniş aeroportu</th>
            <th>Uçuşun vaxtı</th>
            <th>Bilet sayı</th>
            <th>Məbləğ</th>
          </tr>
        </thead>
        <tbody>
          {
            allSoldTickets.map(item => (
              <tr key={item.id}>
                <td>{item.userFin}</td>
                <td>{item.ticketNumber}</td>
                <td>{item.fly}</td>
                <td>{item.departureDate}</td>
                <td>{item.ticketCount}</td>
                <td>{item.totalPrice}AZN</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  )
}

export default AllSoldTickets