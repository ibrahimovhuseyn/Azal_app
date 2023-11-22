import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { apiUrl } from '../../../Confiq'
import { getOffers } from '../Slices/aboutSlice'


function Offers() {
    const { offers } = useSelector(store => store.aboutSlice)
    const dispatch = useDispatch()

    const seenOffers = offers.slice(0, 2)
    useEffect(() => {
        axios.get(`${apiUrl}/specialOffers`).then(res => dispatch(getOffers(res.data)))
    }, [])

    return (
        <div className='offers'>
            <div className="d-flex align-items-center justify-content-between">
                < h1>Xüsusi təkliflər</h1>
                <Link to={'/alloffers'}>Hamısına baxın</Link>
            </div>
            <div className='seenOffers'>
                {
                    seenOffers.map(item => (
                        <div key={item.id} className='seen-offers col-md-6'>
                            <div className="img-wrapper ">
                                <img src={item.imgUrl} alt="img" />
                            </div>
                            <div className="text ">
                                <div className='title'><h3>{item.title}</h3></div>
                                <p className='text-secondary description'>{item.description}</p>
                                <Link to={`/alloffers/${item.id}`}>Daha ətraflı</Link>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div >
    )
}

export default Offers