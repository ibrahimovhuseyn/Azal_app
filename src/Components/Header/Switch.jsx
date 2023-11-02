import React, { useState } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { setMode } from './modeSlice'

function Switch() {

    const dispatch = useDispatch()
    const { mode } = useSelector(store => store.modeSlice)


    const changeMode = () => {
        dispatch(setMode())
    }

    return (
        <div className='switch'>
            <button
                onClick={changeMode}
            >
                {
                    !mode ? <MdDarkMode className='dark' />
                        :
                        <MdLightMode className='light' />
                }
            </button>
        </div>
    )
}

export default Switch