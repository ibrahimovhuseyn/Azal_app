import React from 'react'
import StepNav from './StepNav'
import StepControl from './StepControl'
import { useSelector } from 'react-redux'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'

function MultiStepBuy() {
    const { currentStep } = useSelector(store => store.buySlice)

    const renderStep = () => {
        if (currentStep === 1) {
            return <Step1 />
        }
        else if (currentStep === 2) {
            return <Step2 />
        }
        else if(currentStep ===3) {
            return <Step3 />
        }
        else {
            return <Step4/>
        }
    }
    return (
        <div className='main'>
            <StepNav />
            {renderStep()}
            <StepControl />
        </div>
    )
}

export default MultiStepBuy