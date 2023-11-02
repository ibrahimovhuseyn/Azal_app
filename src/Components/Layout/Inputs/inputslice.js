import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    countryList: [],
    cityList: [],
    airportList: [],
    flyList: [],
    selectedCountry: {},
    selectedCity: {},
    selectedAirport: {},
}

export const inputSlice = createSlice({
    name: "input",
    initialState,
    reducers: {
        getCountryList: (state, action) => {
            state.countryList = action.payload
        },
        getCityList: (state, action) => {
            state.cityList = action.payload
        },
        getAirportList: (state, action) => {
            state.airportList = action.payload
        },
        getFlyList: (state, action) => {
            state.flyList = action.payload
        },
        setSelectedCountry: (state, action) => {
            state.selectedCountry = action.payload
        },
        setSelectedCity: (state, action) => {
            state.selectedCity = action.payload
        },
        setSelectedAirport: (state, action) => {
            state.selectedAirport = action.payload
        }
    }
})
export const { getCountryList,
    getAirportList,
    getCityList,
    setSelectedCountry,
    setSelectedCity,
    setSelectedAirport,
    getFlyList,
} = inputSlice.actions
export default inputSlice.reducer