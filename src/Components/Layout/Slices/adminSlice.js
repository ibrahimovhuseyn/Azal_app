import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    allSoldTickets: []
}

export const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        getAllSoldTickets: (state, action) => {
            state.allSoldTickets = action.payload
        }
    }
})
export const { getAllSoldTickets,

} = adminSlice.actions
export default adminSlice.reducer