import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice.js'
import songsReducer from './slices/songsSlice.js'
import moviesReducer from './slices/moviesSlice.js'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    songs: songsReducer,
    movies: moviesReducer
  }
})

export { store }
