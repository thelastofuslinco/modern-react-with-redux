import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './slices/usersSlice'
import albumsApi from './apis/albumsApi'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import photosApi from './apis/photosApi'

const store = configureStore({
  reducer: {
    users: usersReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([
      albumsApi.middleware,
      photosApi.middleware
    ])
  }
})

setupListeners(store.dispatch)

export * from './apis/photosApi'
export * from './apis/albumsApi'
export * from './thunks/users'
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export { store }
