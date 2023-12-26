import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavItem from './NavItem';
import { goSelected } from './buySlice';


function StepNav() {
  const { list, currentStep } = useSelector(store => store.buySlice)
  const dispatch = useDispatch()


  const handleOnClick = (selectedStep) => {
    dispatch(goSelected(selectedStep))
  }
  return (
    <div
      className='stepNav'
    >
      {
        list.map(item => (
          <NavItem
            key={item.index}
            text={item.text}
            isActive={currentStep === item.index}
          />
        ))
      }
    </div>
  )
}

export default StepNav