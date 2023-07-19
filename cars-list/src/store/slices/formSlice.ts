import { PayloadAction, SliceCaseReducers, createSlice } from '@reduxjs/toolkit'

interface FormSliceInterface {
  name: string
  cost: number
}

const formSlice = createSlice<
  FormSliceInterface,
  SliceCaseReducers<FormSliceInterface>
>({
  name: 'form',
  initialState: { name: '', cost: 0 },
  reducers: {
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    changeCost: (state, action: PayloadAction<number>) => {
      state.cost = action.payload
    }
  }
})

export const { changeCost, changeName } = formSlice.actions
export default formSlice.reducer
