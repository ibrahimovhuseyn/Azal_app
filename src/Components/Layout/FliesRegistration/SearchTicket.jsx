import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Table } from 'reactstrap'
import Select from 'react-select'
import axios from 'axios'
import { apiUrl, toast_config } from '../../../Confiq'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { getSoldTickets, setFindData, setSearchingData } from '../Slices/flyingRegistration'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'


function SearchTicket() {

  const [rezerv, setRezerv] = useState(true)
  const [list, setList] = useState([])

  const navigate = useNavigate()

  const { searchingData, soldTickets, findData } = useSelector(store => store.flyingRegistration)
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get(`${apiUrl}/airports`).then(res => setList(res.data))
    axios.get(`${apiUrl}/soldTickets`).then(res => dispatch(getSoldTickets(res.data)))
  }, [])

  const searchData = () => {

    if (rezerv) {
      const findData = soldTickets.find(ticket => ticket.rezervationNumber === searchingData.rezervationNum && ticket.userFin.toUpperCase() === searchingData.fin.toUpperCase() && ticket.fromAirportId === searchingData.selectedAirportId)
      dispatch(setFindData(findData))
    }
    else if (!rezerv) {
      const findData = soldTickets.find(ticket => ticket.ticketNumber.toUpperCase() === searchingData.ticketNum.toUpperCase() && ticket.userFin.toUpperCase() === searchingData.fin.toUpperCase() && ticket.fromAirportId === searchingData.selectedAirportId)
      dispatch(setFindData(findData))
    }
    if (!searchingData.fin) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Lütfən fin kodunuzu daxil edin',
      })
      return
    }
    else if (rezerv && !searchingData.rezervationNum) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Lütfən rezervasiya nömrənizi  daxil edin',
      })
      return
    }
    else if (!rezerv && !searchingData.ticketNum) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Lütfən bilet nömrənizi  daxil edin',
      })
      return
    }
    else if (!searchingData.selectedAirportId) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Lütfən gediş aeroportunuzu  daxil edin',
      })
      return
    }
    if (!findData) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Məlumat tapılmadı!!!',
      })
      return
    }
    else {
      Swal.fire({
        icon: 'success',
        title: 'Oops...',
        text: 'Məlumat tapıldı',
      })
      navigate('/ticketregister')
    }
  }


  return (
    <div className='searchTicket'>
      <div className="top">
        <Button
          className={`${rezerv ? "actived" : ""}`}
          onClick={() => setRezerv(true)}
        >
          Rezervasiya nömrəsi ilə
        </Button>
        <Button
          className={`${!rezerv ? "actived" : ""}`}
          onClick={() => setRezerv(false)}
        >
          Bilet nömrəsi ilə
        </Button>
      </div>
      <div className="searchingData">
        <div className='d-flex'>
          <Input
            className='w-50'
            placeholder='Fin kodunuz*'
            onChange={e => {
              dispatch(setSearchingData({
                stateName: 'searchingData',
                field: "fin",
                value: e.target.value
              }))
            }}
          />
          {
            rezerv ?
              <Input
                placeholder='Rezervasiya nömrəsi*'
                className='w-50'
                onChange={e => {
                  dispatch(setSearchingData({
                    stateName: 'searchingData',
                    field: "rezervationNum",
                    value: Number(e.target.value)
                  }))
                }}
              />
              :
              ""
          }
          {
            !rezerv ?
              <Input
                placeholder='Bilet nömrəsi*'
                className='w-50'
                onChange={e => {
                  dispatch(setSearchingData({
                    stateName: 'searchingData',
                    field: "ticketNum",
                    value: e.target.value
                  }))
                }}
              />
              :
              ""
          }
        </div>
        <Select
          options={list}
          getOptionLabel={option => option.name}
          getOptionValue={option => option.id}
          onChange={e => {
            dispatch(setSearchingData({
              stateName: "searchingData",
              field: "selectedAirportId",
              value: e.id
            }))
          }}
        />
        <Button
          onClick={searchData}
        >
          Axtarış
        </Button>
      </div>
    </div>
  )
}

export default SearchTicket