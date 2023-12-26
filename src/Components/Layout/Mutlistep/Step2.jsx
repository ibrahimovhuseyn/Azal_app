import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input, Label, Row } from 'reactstrap'
import { getValues } from './buySlice'
import Select from 'react-select'
import axios from 'axios'
import { apiUrl } from '../../../Confiq'



function Step2() {

  const [flyType, setFlyType] = useState([])
  const { step2, validation } = useSelector(store => store.buySlice)
  const dispatch = useDispatch()



  useEffect(() => {
    axios.get(`${apiUrl}/flyTypes`).then(res => setFlyType(res.data))
  }, [])
  return (
    <div className='stepItem'>
      <Row>
        <div className="col-md-6">
          <Label htmlFor='count'><b>Bilet sayını seçin</b></Label>
          <Input
            type='number'
            value={step2.ticketCount}
            onChange={e => {
              dispatch(getValues({
                stateName: 'step2',
                field: "ticketCount",
                value: e.target.value
              }))

            }
            }
          />
        </div>
        <div className="col-md-6">
          <Label><b>Uçus tipini seçin</b></Label>
          <Select
            options={flyType}
            getOptionLabel={option => option.name}
            getOptionValue={option => option.id}
            onChange={e => {
              dispatch(getValues({
                stateName: 'step2',
                field: "flyType",
                value: e.name
              }))
            }
            }
          />
        </div>
      </Row>
    </div>
  )
}

export default Step2