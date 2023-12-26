import React, { useEffect, useState } from 'react'
import { BiSolidUser } from 'react-icons/bi'
import { FaLock } from 'react-icons/fa'
import { Button, Form, Input, Label, Row } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { apiUrl, toast_config } from '../../../Confiq'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { setCurrentUser, setUser } from '../Slices/home'
import axios from 'axios'

function SignInBody() {

  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { users, isAuth } = useSelector(store => store.homeSlice)

  useEffect(() => {
    getUsers()
  }, [isAuth])
  const getUsers = () => {

    axios.get(`${apiUrl}/users`).then(res => dispatch(setUser(res.data)))
    localStorage.setItem('isAuth', false)
  }



  const handleLogin = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = {}
    for (const [key, value] of formData.entries()) {
      data[key] = value
    }
    const { phone, password } = data

    const selectedUser = users.find(item => item.phone == phone && item.password == password)
    if (!selectedUser) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Username or password is not valid!',
      })
      return
    }
    else {
      localStorage.setItem("isAuth", true)
      localStorage.setItem("currentUser", JSON.stringify(selectedUser))
      dispatch(setCurrentUser(selectedUser))
      navigate('/')
    }
  }


  const handleInputChange = (e) => {
    setPassword(e.target.value)
  }

  const handleCheckboxChange = (e) => {
    setShowPassword(e.target.checked)
  }
  return (
    <div className='body'>
      <p className='text-center'>Kabinetə daxil ol</p>
      <Form
        onSubmit={e => {
          handleLogin(e)
        }}
      >
        <Input
          name='phone'
          type='text'
          placeholder='Phone number'
        />
        <Input
          onChange={e => handleInputChange(e)}
          name='password'
          type={showPassword ? "text" : "password"}
          placeholder='Password'
          value={password}
        />
        <div className='mt-2'>
          <Input
            type='checkbox'
            onChange={handleCheckboxChange}
            id='password'
          />
          <Label className='mx-2' htmlFor='password'>Show password</Label>
        </div>
        <Button
          type='submit'
          color='primary'
        >
          Daxil ol
        </Button>
      </Form>

      <div>
        <ul>
          <li>
            <Link to={'/resetpassword'}>Parolumu unutmuşam</Link>
          </li>
          <li>
            <Link to={'/registration'}>Yeni qeydiyyat</Link>
          </li>
          <li>
            <Link to={'/'}>Ana səhifə</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SignInBody