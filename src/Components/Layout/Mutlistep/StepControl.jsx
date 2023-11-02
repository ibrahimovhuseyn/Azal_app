import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'reactstrap'
import { goNext, goPrev, goSelected, resetCurrentStep, resetSteps } from './buySlice'
import axios from 'axios'
import { apiUrl, toast_config } from '../../../Confiq'
import { useNavigate } from "react-router-dom";
import { setSelectedAirport, setSelectedCity, setSelectedCountry } from '../Inputs/inputslice'
import { toast } from 'react-toastify'



function StepControl() {

  const { currentStep, step1, step2, step3, currentFly, validation } = useSelector(store => store.buySlice)
  const { currentUser } = useSelector(store => store.homeSlice)
  const { selectedAirport } = useSelector(store => store.inputSlice)
  const navigate = useNavigate()

  const dispatch = useDispatch()


  const complete = () => {
    if (currentStep === 4) {
      axios.post(`${apiUrl}/Soldtickets`, {
        rezervationNumber: step3.fin,
        flyType: step2.flyType,
        totalPrice: step2.ticketCount * currentFly.price,
        userFin: currentUser.fin,
        departureDate: currentFly.departureDate,
        fly: `${currentFly.fromAirportName}-${currentFly.toAirportName}`,
        ticketNumber: currentFly.flyNumber,
        ticketCount: step2.ticketCount,
        fromAirportId: selectedAirport.id
      })
      toast.success("Uğurlu əməliyyat", toast_config)
      dispatch(resetSteps())
      dispatch(resetCurrentStep())
      dispatch(setSelectedCountry({}))
      dispatch(setSelectedAirport({}))
      dispatch(setSelectedCity({}))
      navigate(`/profile/${currentUser.fin}`)

    }
  }



  return (
    <div
      className='stepControl'
    >
      {
        currentStep !== 1 ?
          <Button
            onClick={() => {
              dispatch(goPrev())
            }}
          >Əvvəlki
          </Button>
          : ""
      }
      <Button
        color='primary'
        onClick={() => {
          complete()
          dispatch(goNext())
        }}
      >
        {currentStep === 4 ? 'Tamamla' : "Növbəti"}
      </Button>
    </div>
  )
}

export default StepControl