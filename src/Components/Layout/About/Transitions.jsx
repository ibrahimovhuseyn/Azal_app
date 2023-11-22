import React, { useEffect } from 'react'
import axios from 'axios'
import { apiUrl } from '../../../Confiq'
import { useDispatch, useSelector } from 'react-redux'
import { getTransitions } from '../Slices/aboutSlice'
import { Link } from 'react-router-dom'
function Transitions() {

  const { transitions } = useSelector(store => store.aboutSlice)
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get(`${apiUrl}/transitions`).then(res => dispatch(getTransitions(res.data)))
  }, [])


  return (
    <div className='transitions'>
      <h2>Faydalı Keçidlər</h2>
      <ul>
        {
          transitions.map(item => (
            <li key={item.id}>
              <div>
                <div className="img-wrapper">
                  <img src={item.imgUrl} alt="" />
                </div>
                <div className="text">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <Link to={`/transitions/${item.id}`}>Daha ətaflı</Link>
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Transitions