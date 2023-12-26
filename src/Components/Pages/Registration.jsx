import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Label, Row } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import { setErrors } from '../Layout/Slices/register';
import axios from 'axios'
import { apiUrl, toast_config } from '../../Confiq';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';


function Registration() {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);
  const [registerErrors, setRegisterErros] = useState({})

  const dispatch = useDispatch()
  const navigate =useNavigate()



  const handleInputChange = (e) => {
    setPassword(e.target.value)
  }

  const handleCheckboxChange = (e) => {
    setShowPassword(e.target.checked)
  }

  function registerValidate(data) {
    const errors = {
      fullname: "",
      email: "",
      phone: "",
      password: ""
    }
    if (!data.fullname) {
      errors.fullname = "Fullname is required"
    }
    if (!data.email) {
      errors.email = "Email is required"
    }
    if (!data.phone) {
      errors.phone = "Phone is required"
    }
    if (!data.password) {
      errors.password = "Password is required"
    }
    return errors
  }

  const register = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = {}
    for (const [key, value] of formData.entries()) {
      data[key] = value
    }
    const errors = registerValidate(data)
    setRegisterErros(errors)

    if (Object.values(errors).filter(string => string).length) {
      toast.error("Please filled the boxes", toast_config)
      return
    }
    else if (data.password.length <= 5) {
      toast.error("Password length is minimum 6 characters")
      return
    }

    axios.post(`${apiUrl}/users`, {
      fullname: data.fullname,
      phone: data.phone,
      email: data.email,
      password: data.password
    }).then(res => {
      toast.success("Registration complete", toast_config)
      e.target.reset()
      navigate('/')
    })

  }
  return (
    <div className='container'>
      <Row>
        <div className="col-md-6 register">
          <Form
            onSubmit={e => {
              register(e)
            }}
          >
            <div className='my-2'>
              <Label htmlFor='fullname'><b>Enter your fullname</b></Label>
              <Input
                name='fullname'
                type='text'
                id='fullname'
                className={`${registerErrors.fullname ? "border border-danger w-50" : "w-50"}`}
                placeholder='Enter your fullname'
              />
              {
                registerErrors.fullname &&
                <p className='mt-2 text-danger fw-bold' >{registerErrors.fullname}</p>
              }
            </div>
            <div className='my-4'>
              <Label htmlFor='fin'><b>Enter your phone number</b></Label>
              <Input
                name='phone'
                type='text'
                id='fin'
                className={`${registerErrors.phone ? "border border-danger w-50" : "w-50"}`}
                placeholder='Enter your phone'
              />
              {
                registerErrors.fin &&
                <p className='mt-2 text-danger fw-bold' >{registerErrors.fin}</p>
              }
            </div>

            <div className='my-2'>
              <Label htmlFor='email'><b>Enter your email</b></Label>
              <Input
                name='email'
                type='email'
                id='email'
                className={`${registerErrors.email ? "border border-danger w-50" : "w-50"}`}
                placeholder='Enter your email'
              />
              {
                registerErrors.email &&
                <p className='mt-2 text-danger fw-bold' >{registerErrors.email}</p>
              }
            </div>
            <div className="my-2">
              <Label htmlFor='password'><b>Enter your password</b></Label>
              <Input
                name='password'
                type={showPassword ? 'text' : 'password'}
                id='password'
                onChange={e => handleInputChange(e)}
                className={`${registerErrors.password ? "border border-danger w-50" : "w-50"}`}
                placeholder='Enter your password'
              />
              {
                registerErrors.password &&
                <p className='mt-2 text-danger fw-bold' >{registerErrors.password}</p>
              }
              <Input
                type='checkbox'
                className='my-2'
                id='show'
                onChange={e => handleCheckboxChange(e)}
              />
              <Label
                htmlFor='show'
                className='my-1 mx-2'
              >
                Show password</Label>
            </div>
            <Button
              type='submit'
              color='primary'
            >Register</Button>
          </Form>
        </div>
      </Row>
    </div>
  )
}

export default Registration