import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, Table } from 'reactstrap'
import { AiFillCheckCircle } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'
import axios from 'axios'
import { apiUrl } from '../../../Confiq'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';



function TicketRegister() {
    const { findData } = useSelector(store => store.flyingRegistration)
    const navigate = useNavigate()
    const [list, setList] = useState([])


    useEffect(() => {
        axios.get(`${apiUrl}/registeredTickets`).then(res => setList(res.data))
    }, [])


    const registerFly = (data) => {
        const filteredData = list.filter(item => item.rezervationNumber === data.rezervationNumber)
        if (!filteredData.length) {
            axios.post(`${apiUrl}/registeredTickets`, data)
            Swal.fire({
                icon: 'success',
                title: 'Uğurlu əməliyyat',
                text: 'Bilet qeydiyyata alındı',
            })
            navigate('/')
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Uğurlusuz əməliyyat',
                text: 'Bu bilet artıq qeydiyyata alınmışdır',
            })
            return
        }
    }

    const deleteFly = (data) => {
        const rezervationNumber = data.rezervationNumber
        axios.delete(`${apiUrl}/Soldtickets/${data.id}`).then(res => console.log("silindi"))
        navigate('/')
    }
    return (
        <div className='ticketRegister'>
            <Table>
                <thead>
                    <th>Haradan-Haraya</th>
                    <th>Uçuşun vaxtı</th>
                    <th>Uçuşun növü</th>
                    <th>Məbləğ</th>
                </thead>
                <tbody>
                    <tr>
                        <td>{findData.fly}</td>
                        <td>{findData.departureDate}</td>
                        <td>{findData.flyType}</td>
                        <td>{findData.totalPrice}AZN</td>
                        <td>
                            <Button
                                onClick={() => registerFly(findData)}
                            >
                                <AiFillCheckCircle className='check' />
                            </Button>
                        </td>
                        <td>
                            <Button
                                onClick={() => deleteFly(findData)}
                            >
                                <BsFillTrashFill className='trash' />
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default TicketRegister