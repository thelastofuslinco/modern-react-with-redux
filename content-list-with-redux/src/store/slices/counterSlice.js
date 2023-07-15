import { createSlice } from '@reduxjs/toolkit'
import { reset } from '../actions'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => {
      return state + 1
    },
    decrement: (state) => {
      return state - 1
    },
    incrementByAmount: (state, action) => {
      return state + action.payload
    }
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return 0
    })
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
