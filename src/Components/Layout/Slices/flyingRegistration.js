import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    searchingData: {
        phone: "",
        ticketNum: "",
        rezervationNum: "",
        selectedAirportId: ""
    },
    soldTickets: [],
    findData: null,
    registeredTickets: []
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
        setFindData: (state, action) => {
            state.findData = action.payload
        },
        getRegisteredTicket: (state, action) => {
            state.registeredTickets = action.payload
        }
    }
})

export const { setSearchingData, getSoldTickets, setFindData, getRegisteredTicket } = flyingRegistrationSlice.actions
export default flyingRegistrationSlice.reducer