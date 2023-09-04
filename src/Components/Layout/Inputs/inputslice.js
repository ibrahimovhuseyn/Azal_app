import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    countryList: [],
    cityList: [],
    airportList: [],
    flyList : []
}

export const inputSlice = createSlice({
    name: "input",
    initialState,
    reducers: {
        setCountry: (state, action) => {
            state.countryList = action.payload
        },
        setCity: (state, action) => {
            state.cityList = action.payload
        },
        setAirports: (state, action) => {
            state.airportList = action.payload
        },
        setFly : (state, action) =>{
            state.flyList = action.payload
        }
        
    }
})
export const { setCountry, setCity, setAirports, setFly } = inputSlice.actions
export default inputSlice.reducer