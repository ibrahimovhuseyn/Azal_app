import React from 'react'
import { Input, Label, Row } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getValues } from './buySlice'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

function Step1() {

  const { step1 } = useSelector(store => store.buySlice)


  const dispatch = useDispatch()
  return (
    <div className='stepItem'>
      <Row>
        <div className="col-md-6">
          <Label htmlFor='fullname'><b>Ad və soyad daxil edin </b></Label>
          <Input
            id='fullname'
            value={step1.fullname}
            onChange={e => {
              dispatch(getValues({
                stateName: 'step1',
                field: 'fullname',
                value: e.target.value
              }))
            }
            }
          />
        </div>
        <div className="col-md-6">
          <Label htmlFor='phone'><b>Telefon nömrəsi daxil edin </b></Label>
          <PhoneInput
            placeholder="Enter phone number"
            value={step1.phone}
            className='reactPhoneInput'
            onChange={phoneNumber => {
              dispatch(getValues({
                stateName: "step1",
                field: "phone",
                value: phoneNumber
              }))
            }}
          />
        </div>
      </Row>
    </div>
  )
}

export default Step1