import React from 'react'
import { Input, Label, Row } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import { getValues } from './buySlice'

function Step3() {

  const { step3, currentFly } = useSelector(store => store.buySlice)

  const { currentUser } = useSelector(store => store.homeSlice)


  const dispatch = useDispatch()

  return (
    <div className='stepItem'>
      <Row>
        <div className="col-md-6">
          <Label ><b>Rezervasiya nömrəniz</b></Label>
          <Input
            value={step3.fin}
            disabled
          />
        </div>
        <div className="col-md-6">
          <Label htmlFor='fin'><b>Seçilən uçuş</b></Label>
          <Input
            disabled
            value={`${currentFly.fromAirportName} - ${currentFly.toAirportName}`}
            onChange={e => console.log(e)}
          />
        </div>
      </Row>
    </div>
  )
}

export default Step3