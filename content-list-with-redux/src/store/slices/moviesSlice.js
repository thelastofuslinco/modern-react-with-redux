import { createSlice } from '@reduxjs/toolkit'
import { reset } from '../actions'

const moviesSlice = createSlice({
  name: 'movie',
  initialState: [],
  reducers: {
    addMovie: (state, action) => {
      state.push(action.payload)
    },
    removeMovie: (state, action) => {
      const movieIndex = state.findIndex((movie) => movie === action.payload)
      state.splice(movieIndex, 1)
    }
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return []
    })
  }
})

export const { addMovie, removeMovie } = moviesSlice.actions
export default moviesSlice.reducer
