import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    offers: [],
    transitions: [],
    directions: []
}
export const abouttSlice = createSlice({
    name: 'about',
    initialState,
    reducers: {
        getOffers: (state, action) => {
            state.offers = action.payload
        },
        getTransitions: (state, action) => {
            state.transitions = action.payload
        },
        getDirections: (state, action) => {
            state.directions = action.payload
        }
    }
})
export const { getOffers, getTransitions, getDirections } = abouttSlice.actions
export default abouttSlice.reducer