import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    menu: false
}

export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        setmenu: (state) => {
            state.menu = !state.menu
        }
    }
})

export const { setmenu } = menuSlice.actions
export default menuSlice.reducer