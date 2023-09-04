import React, { useEffect, useState } from 'react'
import { Input, Button, Label } from 'reactstrap'
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux'
import { setAirports, setCity, setCountry, setFly } from './inputslice'
import axios from 'axios'
import { apiUrl } from '../../../Confiq'
import { useNavigate } from "react-router-dom"



function Inputs() {

    const [selectedCountry, setSelectedCountry] = useState(null)
    const [selectedCity, setSelectedCity] = useState(null)
    const [selectedAirport, setSelectedAirport] = useState(null)


    const dispatch = useDispatch()
    const { countryList, cityList, airportList, flyList } = useSelector(store => store.inputSlice)


    useEffect(() => {
        getcountryList()
    }, [])

    const navigate = useNavigate()

    const getcountryList = () => {
        axios.get(`${apiUrl}/countries`).then(res => dispatch(setCountry(res.data)))

    }

    const getCityList = (country) => {
        setSelectedCountry(country)
        setSelectedCity("")
        setSelectedAirport('')
        axios.get(`${apiUrl}/cities?countryId=${country.id}`).then(res => dispatch(setCity(res.data)))
    }

    const getAirportList = (city) => {
        setSelectedCity(city)
        setSelectedAirport("")
        axios.get(`${apiUrl}/airports?cityId=${city.id}`).then(res => dispatch(setAirports(res.data)))
    }

    const getFlyList = (airport) => {
        setSelectedAirport(airport)
        axios.get(`${apiUrl}/flies?fromAirportId=${airport.id}`).then(res => dispatch(setFly(res.data)))
    }




    return (
        <div className='inputs container'>
            <Select
                value={selectedCountry}
                isClearable
                options={countryList}
                getOptionLabel={item => item.name}
                getOptionValue={item => item.id}
                onChange={e => getCityList(e)}
            />
            <div className="selections">
                {
                    !selectedCountry ? "" :
                        <div className='cities'>

                            {
                                cityList.map(item => (
                                    <button
                                        key={item.id}
                                        className='btn'
                                        onClick={() => getAirportList(item)}
                                    >
                                        {item.name}
                                    </button>
                                ))
                            }
                        </div>


                }
                {
                    !selectedCity ? "" :


                        <div className='airports'>
                            {
                                airportList.map(item => (
                                    <button
                                        onClick={() => {
                                            getFlyList(item)
                                        }}
                                        key={item.id}
                                    >{item.name}</button>
                                ))
                            }
                        </div>
                }
                {
                    !selectedAirport ? "" :
                        <div>
                            {
                                flyList.map(item => (
                                    <div key={item.id}>
                                        <div className='flies'>
                                            <p><b>From</b> {item.fromAirportName}</p>
                                            <p><b>To</b> {item.toAirportName}</p>
                                            <p>Departure Date: {item.departureDate}</p>
                                            <p>Arrival Date: {item.arrivalDate}</p>
                                            <p>Price: {item.price}</p>

                                            <button
                                                onClick={()=>{
                                                    console.log("salam");
                                                    navigate("/buyticket")
                                                }}
                                            >Buy</button>

                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                }
            </div>

        </div>
    )
}

export default Inputs