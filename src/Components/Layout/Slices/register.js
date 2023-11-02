import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    errors: {},
}

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {

        setErrors: (state, action) => {
            state.errors = action.payload
        },
    }
})

export const { setUser, setErrors, setIsAuth } = registerSlice.actions
export default registerSlice.reducer