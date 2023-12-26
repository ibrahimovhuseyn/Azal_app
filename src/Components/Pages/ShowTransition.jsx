import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { apiUrl } from '../../Confiq'

function ShowTransition() {
  const { id } = useParams()
  const { transitions } = useSelector(store => store.aboutSlice)
  const renderTransition = transitions.find(item => item.id == id)



  return (
    <div className='showTransition'>
      <div className="img-wrapper">
        <img src={renderTransition.bgImg} alt="" />
      </div>
      <div className="root">
        <ul>
          <li><Link to={'/'}>Ana səhifə</Link></li>
          <li>{renderTransition.title}</li>
          <li>{renderTransition.name}</li>
        </ul>
        <h2>{renderTransition.name}</h2>
      </div>
      <div className="maine container">
        <h2>{renderTransition.header}</h2>
        <p>{renderTransition.about}</p>
      </div>
    </div>
  )
}

export default ShowTransition

