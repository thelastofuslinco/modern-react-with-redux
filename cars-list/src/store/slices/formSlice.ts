import { PayloadAction, SliceCaseReducers, createSlice } from '@reduxjs/toolkit'
import { addCar } from './carsSlice'

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
  },
  extraReducers(builder) {
    builder.addCase(addCar, () => ({ name: '', cost: 0 }))
  }
})

export const { changeCost, changeName } = formSlice.actions
export default formSlice.reducer
