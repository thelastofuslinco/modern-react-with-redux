import {
  PayloadAction,
  SliceCaseReducers,
  createSlice,
  nanoid
} from '@reduxjs/toolkit'

interface Car {
  id: string
  name: string
  cost: number
}

interface CarsSliceInterface {
  data: Array<Car>
  searchTerm: string
}

const carsSlice = createSlice<
  CarsSliceInterface,
  SliceCaseReducers<CarsSliceInterface>
>({
  name: 'car',
  initialState: {
    data: [],
    searchTerm: ''
  },
  reducers: {
    addCar: (state, action) => {
      state.data.push({ id: nanoid(), ...action.payload })
    },
    removeCar: (state, action: PayloadAction<Car>) => {
      const carIndex = state.data.findIndex(
        (car) => car.id === action.payload.id
      )

      state.data.splice(carIndex, 1)
    },
    changeSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload
    }
  }
})

export const { addCar, removeCar, changeSearchTerm } = carsSlice.actions
export default carsSlice.reducer
