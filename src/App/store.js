import {configureStore} from '@reduxjs/toolkit'
import inputSliceReducer from '../Components/Layout/Inputs/inputslice'

export const store = configureStore({
    reducer : {
        inputSlice : inputSliceReducer
    }
})