import React from 'react'
import { useAppSelector } from '../../hooks/useAppSelector'

const CarValue = () => {
  const { cars, searchTerm } = useAppSelector((state) => state.cars)

  const value = cars.reduce((accumulator, car) => accumulator + car.cost, 0)
  return (
    <div>
      Total value: ${value} {searchTerm}
    </div>
  )
}

export default CarValue
