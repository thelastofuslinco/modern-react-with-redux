import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const carsSlice = createSlice({
  name: 'car',
  initialState: {
    cars: [],
    searchTerm: ''
  },
  reducers: {
    addCar: (state, action) => {
      state.cars.push({ id: uuidv4(), ...action.payload })
    },
    removeCar: (state, action) => {
      const carIndex = state.cars.findIndex(
        (car) => car.id === action.payload.id
      )

      state.cars.splice(carIndex, 1)
    },
    changeSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    }
  }
})

export const { addCar, removeCar, changeSearchTerm } = carsSlice.actions
export default carsSlice.reducer
