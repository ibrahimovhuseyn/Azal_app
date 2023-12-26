import React from 'react'
import { PiSignInBold } from 'react-icons/pi'
import { FaUserAlt } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function SignInLogo() {

  const { currentUser, isAuth } = useSelector(store => store.homeSlice)
  const navigate = useNavigate()

  return (
    <div className='signInLogo'>
      {
        !currentUser.phone ?
          <button
            onClick={() => navigate('/signin')}
          >
            <PiSignInBold className='item' />
          </button> :
          <button
            onClick={() => navigate(`/profile/${currentUser.id}`)}
          >
            <FaUserAlt className='item' />
          </button>
      }
    </div>
  )
}

export default SignInLogo