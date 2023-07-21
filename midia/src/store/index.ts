import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './slices/usersSlice'
import albumsReducer from './slices/albumsSlice'
import photosReducer from './slices/photos.Slice'

const store = configureStore({
  reducer: {
    users: usersReducer,
    albums: albumsReducer,
    photos: photosReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export { store }
