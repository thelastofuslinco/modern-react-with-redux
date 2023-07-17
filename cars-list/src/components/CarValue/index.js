import React from 'react'
import { useSelector } from 'react-redux'

const CarValue = () => {
  const { cars, searchTerm } = useSelector((state) => state.cars)

  const value = cars.reduce((accumulator, car) => accumulator + car.cost, 0)
  return (
    <div>
      Total value: ${value} {searchTerm}
    </div>
  )
}

export default CarValue
