import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { BsArrowRightCircle } from 'react-icons/bs'

function AllOffers() {
  const { offers } = useSelector(store => store.aboutSlice)
  return (
    <div className='allOffers'>
      {
        offers.map(item => (
          <div className='all-offers container' key={item.id}>
            <div className="img-wrapper col-md-6">
              <img src={item.imgUrl} alt="img" />
            </div>
            <div className="text col-md-6">
              <div className="none">
                <div>
                  <h3>{item.title}</h3>
                  <p className='text-secondary'>{item.description}</p>
                </div>
                <Link to={`/alloffers/${item.id}`} className="arrow">
                  <BsArrowRightCircle />
                </Link>
              </div>
              <Link to={`/alloffers/${item.id}`}>
                <h3>{item.title}</h3>
                <p className='text-secondary'>{item.description}</p>
              </Link>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default AllOffers