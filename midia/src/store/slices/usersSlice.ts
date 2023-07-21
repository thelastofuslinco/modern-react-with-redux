import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit'

interface User {
  id: number
  name: string
}

interface UsersSliceInterface {
  data: Array<User>
}

const usersSlice = createSlice<
  UsersSliceInterface,
  SliceCaseReducers<UsersSliceInterface>
>({
  name: 'user',
  initialState: { data: [] },
  reducers: {}
})

export default usersSlice.reducer
