import { configureStore } from '@reduxjs/toolkit'
import inputSliceReducer from '../Components/Layout/Inputs/inputslice'
import modeSliceReducer from '../Components/Header/modeSlice'
import menuSliceReducer from '../Components/Header/menu'
import registerSliceReducer from '../Components/Layout/Slices/register'
import homeSliceReducer from '../Components/Layout/Slices/home'
import buySliceReducer from '../Components/Layout/Mutlistep/buySlice'
import ticketSliceReducer from '../Components/Layout/Slices/tickets'
import adminSliceReducer from '../Components/Layout/Slices/adminSlice'
import flyingRegistrationReducer from '../Components/Layout/Slices/flyingRegistration'

export const store = configureStore({
    reducer: {
        homeSlice: homeSliceReducer,
        inputSlice: inputSliceReducer,
        modeSlice: modeSliceReducer,
        menuSlice: menuSliceReducer,
        registerSlice: registerSliceReducer,
        buySlice: buySliceReducer,
        ticketSlice: ticketSliceReducer,
        adminSlice: adminSliceReducer,
        flyingRegistration: flyingRegistrationReducer
    }
})