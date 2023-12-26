import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Form, Input } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { apiUrl, toast_config } from '../../Confiq'
import { setUser } from '../Layout/Slices/home'

function ResetPassword() {
    const dispatch = useDispatch()
    const { users } = useSelector(store => store.homeSlice)
    const [password, setPassword] = useState(null)


    useEffect(() => {
        getUser()
    }, [])

    console.log(password);

    const getUser = () => {
        axios.get(`${apiUrl}/users`).then(res => dispatch(setUser(res.data)))
    }


    const handlePassword = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = {}
        for (const [key, value] of formData.entries()) {
            data[key] = value
        }
        if (!data.email || !data.phone) {
            toast.error("Enter your informations", toast_config)
        }
        const passwordData = users.find(item => item.email == data.email && item.phone == data.phone)
        if (!passwordData) {
            return
        }
        setPassword(passwordData.password)
        e.target.reset()
    }
    return (
        <div>
            <h1 className='text-center'>Password recovery</h1>
            <Link
                style={{
                    "color": '#000',
                    "fontSize": '2rem'
                }}
                className='mx-5'
                to={'/'}
            >
                Home
            </Link>
            <Form
                onSubmit={(e) => handlePassword(e)}
                className='my-5 mx-5'
            >
                <Input
                    type='email'
                    className='w-50 my-2'
                    placeholder='Enter your email'
                    name='email'
                />
                <Input
                    className='w-50 my-4'
                    placeholder='Enter your phone number'
                    name='phone'
                />
                <Button
                    type='submit'
                    color='primary'
                >
                    Search
                </Button>
            </Form>
            <div>
                {
                    password &&
                    <p style={{
                        fontWeight : "bold",
                        marginLeft : "3rem",
                        fontSize : "2rem"
                    }}>
                        Your password is : {password}
                    </p>
                }
            </div>

        </div>
    )
}

export default ResetPassword