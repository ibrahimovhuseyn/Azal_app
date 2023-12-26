import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { apiUrl } from '../../../Confiq'
import { getDirections } from '../Slices/aboutSlice'

function PopularDirections() {

  const { directions } = useSelector(store => store.aboutSlice)
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get(`${apiUrl}/popularDirecions`).then(res => dispatch(getDirections(res.data)))
  }, [])
  return (
    <div className='popularDirections'>
      <h1>Populyar istiqamətlər</h1>
      <ul>
        {
          directions.map(item => (
            <li key={item.id}>
              <div>
                <div className="img-wrapper">
                  <img src={item.imgUrl} alt="img" />
                </div>
                <h3>{item.name}</h3>
                <h4>{item.country}</h4>
                <p>{item.price}</p>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default PopularDirections