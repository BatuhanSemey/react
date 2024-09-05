import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  index: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {

      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    setCategoryIndex: (state, action) => {
        state.index = action.payload
        console.log(state.index);
    }
  },
})

export const { increment, decrement, incrementByAmount, setCategoryIndex } = counterSlice.actions

export default counterSlice.reducer