import React, { useEffect } from 'react'
import Select from 'react-select'
import axios from 'axios'
import { apiUrl } from '../../../Confiq'
import { useSelector, useDispatch } from 'react-redux'
import { getAirportList, getCityList, getCountryList, getFlyList, setSelectedAirport, setSelectedCity, setSelectedCountry} from './inputslice'
import { Button, Table } from 'reactstrap'
import { useNavigate } from "react-router-dom";
import { getCurrentFly } from '../Mutlistep/buySlice'



function Inputs() {

  const dispatch = useDispatch()
  const { countryList,
    selectedCountry,
    cityList,
    selectedCity,
    airportList,
    selectedAirport,
    flyList
  } = useSelector(store => store.inputSlice)
  const {isAuth} = useSelector(store=>store.homeSlice)

  const navigate = useNavigate()


  useEffect(() => {
    getList()
  }, [selectedCountry.id, selectedCity.id, selectedAirport.id])

  const getList = () => {
    axios.get(`${apiUrl}/countries`).then(res => dispatch(getCountryList(res.data)))
    axios.get(`${apiUrl}/cities?countryId=${selectedCountry.id}`).then(res => dispatch(getCityList(res.data)))
    axios.get(`${apiUrl}/airports?cityId=${selectedCity.id}`).then(res => dispatch(getAirportList(res.data)))
    axios.get(`${apiUrl}/flies?fromAirportId=${selectedAirport.id}`).then(res => dispatch(getFlyList(res.data)))
  }

  const buyTicket = () =>{
    if(isAuth){
      navigate('/buyticket')
    }
    else{
      navigate("/signin")
    }
  }

  return (
    <div className='inputs'>
      <Select
        options={countryList}
        getOptionLabel={option => option.name}
        getOptionValue={option => option.id}
        onChange={e => {
          dispatch(setSelectedCountry(e))
          dispatch(setSelectedCity({}))
          dispatch(setSelectedAirport({}))
        }}
      />

      <div className="cities">
        {
          selectedCountry.id ?
            cityList.map(item => (
              <Button
                key={item.id}
                onClick={() => {
                  dispatch(setSelectedCity(item))
                  dispatch(setSelectedAirport({}))
                }}
              >
                {item.name}
              </Button>
            ))
            :
            ""
        }
      </div>
      <div className="airports">
        {
          selectedCity.id ?
            airportList.map(item => (
              <Button
                key={item.id}
                onClick={() => {
                  dispatch(setSelectedAirport(item))
                }}
              >
                {item.name}
              </Button>
            ))
            :
            ""
        }
      </div>
      <div className="flies">
        {
          selectedAirport.id ?
            <Table hover>
              <thead>
                <tr>
                  <th>Haradan</th>
                  <th>Haraya</th>
                  <th>Uçuş vaxtı</th>
                  <th>Eniş vaxtı</th>
                  <th>Biletin qiyməti</th>
                </tr>
              </thead>
              <tbody>
                {
                  flyList.map(item => (
                    <tr key={item.id}>
                      <td>{item.fromAirportName}</td>
                      <td>{item.toAirportName}</td>
                      <td>{item.departureDate}</td>
                      <td>{item.arrivalDate}</td>
                      <td>{item.price}AZN</td>
                      <td>
                        <Button
                          onClick={() => {
                            buyTicket()
                            dispatch(getCurrentFly(item))
                          }}
                        >
                          Almaq
                        </Button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
            :
            ""
        }
      </div>
    </div>
  )
}

export default Inputs