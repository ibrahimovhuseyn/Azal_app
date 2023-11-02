import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Label, Row } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import { setErrors } from '../Layout/Slices/register';
import axios from 'axios'
import { apiUrl, toast_config } from '../../Confiq';
import { toast } from 'react-toastify'
import { errorText } from '../Lib/errorText';


function Registration() {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);

  const { users, errors } = useSelector(store => store.registerSlice)
  const dispatch = useDispatch()



  const handleInputChange = (e) => {
    setPassword(e.target.value)
  }

  const handleCheckboxChange = (e) => {
    setShowPassword(e.target.checked)
  }

  // function validationErrors(data) {
  //   const errors = {
  //     fullname: "",
  //     email: "",
  //     fin: "",
  //     password: ""
  //   }
  //   if (!data.fullname.trim()) {
  //     errors.fullname = errorText.required('Fullname')
  //   }
  //   if (!data.email.trim()) {
  //     errors.email = errorText.required('Email')
  //   }
  //   if (!data.fin.trim()) {
  //     errors.fin = errorText.required('Fin')
  //   }
  //   if (!data.password.trim()) {
  //     errors.password = errorText.required('Password')
  //   }
  //   return errors
  // }

  const register = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = {}
    for (const [key, value] of formData.entries()) {
      data[key] = value
    }
    // const errors = validationErrors(data)
    // dispatch(setErrors(errors))

    // if (Object.values(errors).filter(string => string.length)) {
    //   toast.error('Plese filled boxes', toast_config)
    //   return
    // }

    axios.post(`${apiUrl}/users`, {
      fullname: data.fullname,
      fin: data.fin,
      email: data.email,
      password: data.password
    }).then(res => {
      toast.success("Registration complete", toast_config)
      e.target.reset()
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
                className={`${errors.fullname ? "border border-danger w-50" : "w-50"}`}
                placeholder='Enter your fullname'
              />
              {
                errors.fullname &&
                <p className='mt-2 text-danger fw-bold' >{errors.fullname}</p>
              }
            </div>
            <div className='my-4'>
              <Label htmlFor='fin'><b>Enter your FIN</b></Label>
              <Input
                name='fin'
                type='text'
                id='fin'
                className={`${errors.fin ? "border border-danger w-50" : "w-50"}`}
                placeholder='Enter your fin'
              />
              {
                errors.fin &&
                <p className='mt-2 text-danger fw-bold' >{errors.fin}</p>
              }
            </div>

            <div className='my-2'>
              <Label htmlFor='email'><b>Enter your email</b></Label>
              <Input
                name='email'
                type='email'
                id='email'
                className={`${errors.email ? "border border-danger w-50" : "w-50"}`}
                placeholder='Enter your email'
              />
              {
                errors.email &&
                <p className='mt-2 text-danger fw-bold' >{errors.email}</p>
              }
            </div>
            <div className="my-2">
              <Label htmlFor='password'><b>Enter your password</b></Label>
              <Input
                name='password'
                type={showPassword ? 'text' : 'password'}
                id='password'
                onChange={e => handleInputChange(e)}
                className={`${errors.password ? "border border-danger w-50" : "w-50"}`}
                placeholder='Enter your password'
              />
              {
                errors.password &&
                <p className='mt-2 text-danger fw-bold' >{errors.password}</p>
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