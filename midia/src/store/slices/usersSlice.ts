import {
  createSlice,
  SerializedError,
  SliceCaseReducers
} from '@reduxjs/toolkit'
import { addUser, deleteUser, getUsers } from '../thunks/users'
import { UserModel } from '../../model/userModel'

interface UsersSliceInterface {
  data: Array<UserModel>
  isLoading: boolean
  error: SerializedError | null
}

const usersSlice = createSlice<
  UsersSliceInterface,
  SliceCaseReducers<UsersSliceInterface>
>({
  name: 'user',
  initialState: { data: [], isLoading: false, error: null },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getUsers.pending, (state, action) => {
      state.isLoading = true
    })

    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })

    builder.addCase(getUsers.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error
    })

    builder.addCase(addUser.pending, (state, action) => {
      state.isLoading = true
    })

    builder.addCase(addUser.fulfilled, (state, action) => {
      state.isLoading = false
      state.data.push(action.payload)
    })

    builder.addCase(addUser.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error
    })

    builder.addCase(deleteUser.pending, (state, action) => {
      state.isLoading = true
    })

    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.isLoading = false

      const userIndex = state.data.findIndex(
        (user) => user.id === action.payload
      )

      state.data.splice(userIndex, 1)
    })

    builder.addCase(deleteUser.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error
    })
  }
})

export default usersSlice.reducer
