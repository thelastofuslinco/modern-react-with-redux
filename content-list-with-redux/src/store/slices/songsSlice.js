import { createSlice } from '@reduxjs/toolkit'
import { reset } from '../actions'

const songsSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    addSong: (state, action) => {
      state.push(action.payload)
    },
    removeSong: (state, action) => {
      const songIndex = state.findIndex((song) => song === action.payload)
      state.splice(songIndex, 1)
    }
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return []
    })
  }
})

export const { addSong, removeSong } = songsSlice.actions
export default songsSlice.reducer
