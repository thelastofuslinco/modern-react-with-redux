import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCar } from '../../store'

const CarList = () => {
  const { cars, searchTerm } = useSelector((state) => state.cars)
  const dispach = useDispatch()

  return (
    <div>
      {searchTerm}
      {cars.map((car) => {
        return (
          <div key={car.id}>
            {car.name} - {car.cost}
            <button onClick={() => dispach(removeCar(car))}>removeCar</button>
          </div>
        )
      })}
    </div>
  )
}

export default CarList
