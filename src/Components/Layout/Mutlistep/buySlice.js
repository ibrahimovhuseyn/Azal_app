import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentStep: 1,
    currentFly: {},
    list: [
        {
            index: 1,
            text: "Addım 1",
        },
        {
            index: 2,
            text: "Addım 2",
        },
        {
            index: 3,
            text: "Addım 3",
        },
        {
            index: 4,
            text: "Addım 4",
        },
    ],
    step1: {
        fullname: "",
        phone: ""
    },
    step2: {
        ticketCount: "",
        flyType: ""
    },
    step3: {
        fin: Date.now(),
        fly: ""
    }
}

export const buySlice = createSlice({
    name: 'buySlice',
    initialState,
    reducers: {
        goSelected: (state, action) => {
            state.currentStep = action.payload
        },
        goNext: (state) => {
            state.currentStep += 1
        },
        goPrev: (state,) => {
            state.currentStep -= 1
        },
        resetCurrentStep: (state) => {
            state.currentStep = 0
        },

        getValues: (state, action) => {
            const { stateName, field, value } = action.payload
            state[stateName][field] = value
        },
        getCurrentFly: (state, action) => {
            state.currentFly = action.payload
        },
        resetSteps: (state) => {
            state.step1 = {}
            state.step2 = {}
            state.step3 = {}
        }
    }
})

export const { goSelected,
    goNext,
    goPrev,
    getValues,
    getCurrentFly,
    resetCurrentStep,
    resetSteps } = buySlice.actions
export default buySlice.reducer