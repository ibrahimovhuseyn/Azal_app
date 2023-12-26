import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    searchingData: {
        phone: "",
        ticketNum: "",
        rezervationNum: "",
        selectedAirportId: ""
    },
    soldTickets: [],
    findData: null
}

export const flyingRegistrationSlice = createSlice({
    name: "flyingRegistration",
    initialState,
    reducers: {
        setSearchingData: (state, action) => {
            const { stateName, field, value } = action.payload
            state[stateName][field] = value
        },
        getSoldTickets: (state, action) => {
            state.soldTickets = action.payload
        },
        setFindData : (state, action) =>{
            state.findData = action.payload
        }
    }
})

export const { setSearchingData, getSoldTickets, setFindData} = flyingRegistrationSlice.actions
export default flyingRegistrationSlice.reducer