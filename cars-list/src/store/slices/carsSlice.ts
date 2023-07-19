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
  cars: Array<Car>
  searchTerm: string
}

const carsSlice = createSlice<
  CarsSliceInterface,
  SliceCaseReducers<CarsSliceInterface>
>({
  name: 'car',
  initialState: {
    cars: [],
    searchTerm: ''
  },
  reducers: {
    addCar: (state, action) => {
      state.cars.push({ id: nanoid(), ...action.payload })
    },
    removeCar: (state, action: PayloadAction<Car>) => {
      const carIndex = state.cars.findIndex(
        (car) => car.id === action.payload.id
      )

      state.cars.splice(carIndex, 1)
    },
    changeSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload
    }
  }
})

export const { addCar, removeCar, changeSearchTerm } = carsSlice.actions
export default carsSlice.reducer
