import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { apiUrl, toast_config } from '../../../Confiq'
import { Label, Input, Button, Form } from 'reactstrap'
import { getAirportList, getCityList, getCountryList, setSelectedCity, setSelectedCountry } from '../Inputs/inputslice'
import { toast } from 'react-toastify';
import Select from 'react-select'

function AddElements() {
    const { countryList, selectedCountry, cityList, selectedCity, airportList } = useSelector(store => store.inputSlice)
    const dispatch = useDispatch()
    const [countryName, setCountryName] = useState('')
    const [cityName, setCityName] = useState('')
    const [airportName, setAirportName] = useState('')
    const [fromAirportName, setFromAirportName] = useState("")
    const [toAirportName, setToAirportName] = useState("")
    const [currentPage, setCurrentPage] = useState(null);
    const [validationErrors, setValidationErrors] = useState({})


    useEffect(() => {
        getList()
    }, [])


    const getList = () => {
        axios.get(`${apiUrl}/countries`).then(res => dispatch(getCountryList(res.data)))
        axios.get(`${apiUrl}/cities`).then(res => dispatch(getCityList(res.data)))
        axios.get(`${apiUrl}/airports`).then(res => dispatch(getAirportList(res.data)))
    }


    const handleInputChangeCountry = (event) => {
        const newValue = event.target.value;
        const capitalizedValue = newValue.charAt(0).toUpperCase() + newValue.slice(1);
        setCountryName(capitalizedValue);
    };

    const handleInputChangeCity = (event) => {
        const newValue = event.target.value;
        const capitalizedValue = newValue.charAt(0).toUpperCase() + newValue.slice(1);
        setCityName(capitalizedValue);
    };

    const handleInputChangeAirport = (event) => {
        const newValue = event.target.value;
        const capitalizedValue = newValue.charAt(0).toUpperCase() + newValue.slice(1);
        setAirportName(capitalizedValue);
    };

    function formValidate(data) {
        const errors = {
            departureDate: "",
            arrivalDate: "",
            price: ""
        }
        if (!data.price) {
            errors.price = 'Qiymet daxil edin'
        }
        return errors
    }
    const handleCreateFly = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = {}
        for (const [key, value] of formData.entries()) {
            data[key] = value
        }
        const errors = formValidate(data)
        setValidationErrors(errors)

        console.log("data", data);
        if (Object.values(errors).filter(string => string).length) {
            toast.error("doldur", toast_config)
            return
        }
    }


    const addCountry = () => {
        if (!countryName) {
            toast.error("Ölkə adını daxil edin", toast_config)
            return
        }
        axios.post(`${apiUrl}/countries`, {
            name: countryName
        }).then(res => {
            setCountryName('')
            toast.success('Uğurlu əməliyyat', toast_config)
        })
    }


    const addCity = () => {

        if (!selectedCountry.id) {
            toast.error("Ölkə seçin", toast_config)
            return
        }
        else if (!cityName) {
            toast.error('Şəhər adını daxil edin', toast_config)
            return
        }
        else {
            axios.post(`${apiUrl}/cities`, {
                name: cityName,
                countryId: selectedCountry.id
            }).then(res => {
                setCityName("")
                toast.success('Uğurlu əməliyyat', toast_config)
                dispatch(setSelectedCountry({}))
            })
        }

    }

    const addAirport = () => {
        if (!selectedCity.id) {
            toast.error("Şəhər seçin", toast_config)
            return
        }
        else if (!airportName) {
            toast.error("Aeroport adını daxil edin", toast_config)
            return
        }
        else {
            axios.post(`${apiUrl}/airports`, {
                cityId: selectedCity.id,
                name: airportName
            }).then(res => {
                toast.success("Uğurlu əməliyyat", toast_config)
                setAirportName("")
                dispatch(setSelectedCity({}))
            })
        }
    }

    const renderCountryPage = () => {
        setCurrentPage('country');
    }
    const renderCityPage = () => {
        setCurrentPage('city');
    }
    const renderAirportPage = () => {
        setCurrentPage('airport');
    }
    const renderFlyPage = () => {
        setCurrentPage('fly');
    }

    return (
        <div className='container add'>
            <Button onClick={renderCountryPage}>Ölkə əlavə et</Button>
            <Button onClick={renderCityPage}>Şəhər əlavə et</Button>
            <Button onClick={renderAirportPage}>Aeroport əlavə et</Button>
            {/* <Button onClick={renderFlyPage}>Uçuş əlavə et</Button> */}

            <div>
                {currentPage === 'country' &&
                    <div className='addCountry'>
                        <Label htmlFor='countryName'>
                            <b>Ölkə əlavə et</b>
                        </Label>
                        <Input
                            value={countryName}
                            id='countryName'
                            onChange={e => handleInputChangeCountry(e)}
                            className='w-50 mb-2'
                        />
                        <Button onClick={addCountry}>Əlavə et</Button>
                    </div>}
                {currentPage === 'city' &&
                    <div className='addCity'>
                        <Label htmlFor='cityName'>
                            <b>Şəhər əlavə et</b>
                        </Label>
                        <div className='d-flex'>
                            <p>Əlavə edəcəyiniz ölkəni seçin</p>
                            <Select
                                options={countryList}
                                getOptionLabel={option => option.name}
                                getOptionValue={option => option.id}
                                onChange={e => dispatch(setSelectedCountry(e))}
                                className='mb-3 select'
                            />
                        </div>
                        <Input
                            value={cityName}
                            onChange={e => handleInputChangeCity(e)}
                            id='cityName'
                            className='mb-2'
                        />
                        <Button onClick={addCity}>Əlavə et</Button>
                    </div>
                }
                {currentPage === 'airport' &&
                    <div className='addAirport'>
                        <Label htmlFor='airportName'>
                            <b>Aeroport əlavə et</b>
                        </Label>
                        <div className='d-flex'>
                            <p>Əlavə edəcəyiniz şəhəri seçin</p>
                            <Select
                                options={cityList}
                                getOptionLabel={option => option.name}
                                getOptionValue={option => option.id}
                                onChange={e => dispatch(setSelectedCity(e))}
                                className='mb-3 select'
                            />
                        </div>
                        <Input
                            value={airportName}
                            onChange={e => handleInputChangeAirport(e)}
                            id='airportNanem'
                            className='mb-2'
                        />
                        <Button onClick={addAirport}>Əlavə et</Button>
                    </div>
                }
                {
                    // currentPage === 'fly' &&
                    // <div
                    //     className='addFly'
                    // >
                    //     <Label htmlFor='flyName'>
                    //         <b >Uçuş əlavə et</b>
                    //     </Label>
                    //     <div className='d-flex mb-5 '>
                    //         <div className="d-flex">
                    //             <p>Uçuş aeroportunu qeyd edin</p>
                    //             <Select
                    //                 options={airportList}
                    //                 getOptionLabel={option => option.name}
                    //                 getOptionValue={option => option.id}
                    //                 onChange={e => setFromAirportName(e)}
                    //             />
                    //         </div>
                    //         <div className="d-flex">
                    //             <p>Eniş aeroportunu qeyd edin</p>
                    //             <Select
                    //                 options={airportList}
                    //                 getOptionLabel={option => option.name}
                    //                 getOptionValue={option => option.id}
                    //                 onChange={e => setToAirportName(e)}
                    //             />
                    //         </div>
                    //     </div>
                    //     <Form
                    //         onSubmit={e => handleCreateFly(e)}
                    //     >
                    //         <div className="form-group mb-4">
                    //             <Label htmlFor='departureDate'>Uçuş vaxtı</Label>
                    //             <Input
                    //                 type='date'
                    //                 id='departureDate'
                    //                 name='departureDate'
                    //             />

                    //         </div>
                    //         <div className="form-group mb-4">
                    //             <Label htmlFor='arrivalDate'>Eniş vaxtı</Label>
                    //             <Input
                    //                 type='date'
                    //                 id='arrivalDate'
                    //                 name='arrivalDate'
                    //             />

                    //         </div>
                    //         <div className="form-group mb-4">
                    //             <Label htmlFor='ticketPrice'>Bilet qiyməti</Label>
                    //             <Input
                    //                 type='number'
                    //                 id='ticketPrice'
                    //                 name='ticketPrice'
                    //             />
                    //         </div>
                    //         <Button type='submit'>Əlavə et</Button>
                    //     </Form>
                    // </div>
                }
            </div>

        </div>
    )
}

export default AddElements