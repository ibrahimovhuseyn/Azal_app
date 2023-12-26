import React, { useEffect, useState } from 'react'
import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
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
  const [modal, setModal] = useState(false);

  const navigate = useNavigate()

  const { searchingData, soldTickets, findData } = useSelector(store => store.flyingRegistration)
  const dispatch = useDispatch()
  console.log(findData);

  useEffect(() => {
    axios.get(`${apiUrl}/airports`).then(res => setList(res.data))
    axios.get(`${apiUrl}/soldTickets`).then(res => dispatch(getSoldTickets(res.data)))

  }, [])

  const toggle = () => setModal(!modal);
  console.log(searchingData);

  const searchData = () => {
    if (rezerv) {
      if (!searchingData.phone || !searchingData.rezervationNum || !searchingData.selectedAirportId) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Lütfən məlumatları düzgün daxil edin',
        })

      }
      const findData = soldTickets.find(item => item.rezervationNumber == searchingData.rezervationNum)
      if (!findData) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Məlumat tapilmadı',
        })
      }
      else {
        dispatch(setFindData(findData))
        toggle()
      }
    }
    else if (!rezerv) {
      if (!searchingData.phone || !searchingData.ticketNum || !searchingData.selectedAirportId) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Lütfən məlumatları düzgün daxil edin',
        })
      }
      const findData = soldTickets.find(item => item.ticketNumber == searchingData.ticketNum)
      console.log(findData);
      if (!findData) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Məlumat tapilmadı',
        })
      }
      else {
        dispatch(setFindData(findData))
        toggle()
      }
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
            placeholder='Telefon nömrəniz*'
            onChange={e => {
              dispatch(setSearchingData({
                stateName: 'searchingData',
                field: "phone",
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
          onClick={() => searchData()}
        >
          Axtarış
        </Button>
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Uçuşun qeydiyyatı</ModalHeader>
        <ModalBody>
          Davam etmək?
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => {
            Swal.fire({
              icon: 'success',
              title: 'Uğurlu əməliyat',
              text: 'Biletiniz qeydiyyata alındı',
            })
            dispatch(setFindData({}))
            toggle()
            navigate("/")
          }}>
            Qeydiyyat et
          </Button>{' '}
          <Button color="danger" onClick={() => {


          }}>
            Ləğv et
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default SearchTicket