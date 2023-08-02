import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './slices/usersSlice'
import albumsApi from './apis/albumsApi'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

const store = configureStore({
  reducer: {
    users: usersReducer,
    [albumsApi.reducerPath]: albumsApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([albumsApi.middleware])
  }
})

setupListeners(store.dispatch)

export * from './apis/albumsApi'
export * from './thunks/users'
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export { store }
