import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isAuth: localStorage.getItem('isAuth') ? JSON.parse(localStorage.getItem('isAuth')) : false,
    users: [],
    currentUser: localStorage.getItem('currentUser') ?
        JSON.parse(localStorage.currentUser) :
        {
            fin: "",
            password: ""
        },
    userSoldTickets: []
}

export const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.users = action.payload
        },
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
            state.isAuth = !action.payload.fin ? false : true
        },
        setUserSoldTicket: (state, action) => {
            state.userSoldTickets = action.payload
        }
    }
})

export const { setUser, setCurrentUser, setUserSoldTicket } = homeSlice.actions
export default homeSlice.reducer